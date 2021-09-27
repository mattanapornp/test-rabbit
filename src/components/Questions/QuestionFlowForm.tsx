import React, { useCallback, useState, useMemo, useEffect } from 'react';
import mergePatch from 'tiny-merge-patch';
import { Box, Container } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import QuestionFlow from '@alphafounders/rf-questionflow-component/src/components/QuestionFlow';

import axios from 'axios';
import transformCustomerBanksForLoan from 'lib/transformer/transformBanksForLoan';
import UpButton from 'components/common/UpButton';

import schemaBuilder from 'lib/validation/schemaBuilder';

import { shouldSkipQuestion } from 'lib/questions';
import { PlatformType } from 'interfaces/data/platformType';

import transformCustomerBanks from 'lib/transformer/transformBanks';
import BankRankingHandler from 'lib/transformer/bankRankingHandler';
import LoanBankRankingHandler from 'lib/transformer/loanBankRankingHandler';
import loanBanks from 'lib/constants/loanBanks';

import PersonalLoan from 'lib/transformer/dynamicQuesiton/personalLoan';
import PlatformService from 'lib/lgt/platformService';
import GTMHelper from 'lib/GTMHelper';

interface QuestionFormProps {
  // Data Props
  data: PlatformType;
  platform: string | string[];
}

/**
 * Question flow form for leasing and loan platform
 */
const QuestionFlowForm = ({
  data,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  platform = '',
}: QuestionFormProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [queryValue, setQueryValue] = useState<Object>({});

  const bankRankingHandler = new BankRankingHandler();
  const loanBankRankingHandler = new LoanBankRankingHandler(loanBanks);
  const gtmHelper = new GTMHelper();

  // assigned question_flow object into config
  const [config, setConfig] = useState(
    platform === 'leasing'
      ? transformCustomerBanks(data.question_flow, i18n.language, t)
      : transformCustomerBanksForLoan(data.question_flow, i18n.language, t)
  );

  // create the api instance
  const service = new PlatformService();

  // prepared for the validation schema
  const [validationSchema, setValidationSchema] = useState(
    Yup.object(schemaBuilder(config.validationSchema))
  );

  // application component's state
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isStartQuestion, setIsStartQuestion] = useState<boolean>(false);
  const [values, setValues] = useState({});

  const sectionsVisibility = useMemo(
    () => ({
      [Object.keys(data.question_flow.sections)[0]]: true,
    }),
    [data.question_flow.sections]
  );

  const questionsVisibility = useMemo(
    () => ({
      [Object.keys(data.question_flow.questions)[0]]: true,
      tc: false,
    }),
    [data.question_flow.questions]
  );

  const dataFilled = (d: JSON) => {
    let toReturn = true;

    Object.entries(config.questions).forEach((question) => {
      const [prop] = question;

      // eslint-disable-next-line no-prototype-builtins
      toReturn = toReturn && d.hasOwnProperty(prop);
    });

    return toReturn;
  };

  const getNullableValidationRule = () =>
    Yup.string().nullable().notRequired().default('');

  const extendValidation = (dependentValue: number) => {
    return Yup.number()
      .typeError('common:validation.required')
      .required('common:validation.required')
      .max(dependentValue, 'common:validation.invalid_price');
  };

  const resetValidationSchema = (field: string, carValue: number) => {
    const extendedSchema = Object.assign(
      schemaBuilder(config.validationSchema)
    );
    extendedSchema[field] = extendValidation(carValue);
    const schema = Yup.object(extendedSchema);
    setValidationSchema(schema);
  };

  const handleHMRepaidValidation = (formValues: any) => {
    const extendedSchema = Object.assign(
      schemaBuilder(config.validationSchema)
    );
    if (formValues.debtfree === 'Y') {
      extendedSchema.hmrepaid = getNullableValidationRule();
    } else {
      extendedSchema.hmrepaid = Yup.string().required(
        'common:validation.required'
      );
    }
    const schema = Yup.object(extendedSchema);
    setValidationSchema(schema);
  };

  const handleChange = (fieldName, formValues) => {
    const dataValue = {
      ...formValues,
    };

    if (!isStartQuestion) {
      setIsStartQuestion(true);
    }

    if (fieldName === 'debtfree' && platform === 'leasing') {
      handleHMRepaidValidation(formValues);
    }

    const newConfig = config;
    const banks =
      platform === 'leasing'
        ? bankRankingHandler.getRanking(formValues)
        : loanBankRankingHandler.getRanking(formValues);
    newConfig.questions.customer_banks.items = banks;

    setConfig(
      platform === 'leasing'
        ? transformCustomerBanks(newConfig, i18n.language, t)
        : transformCustomerBanksForLoan(newConfig, i18n.language, t)
    );

    if (fieldName === 'customer_banks') {
      setValidationSchema(
        Yup.object(schemaBuilder(newConfig.validationSchema))
      );
    }

    setValues(dataValue);
    setIsCompleted(dataFilled(dataValue));
  };

  useEffect(() => {
    const value = {
      lang: router.locale,
    };

    if (router.query) {
      Object.keys(router.query).forEach((key) => {
        if (key !== 'url') {
          value[key] = router.query[key];
        }
      });

      setQueryValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Determine the eligibilty for the loan and leasing application
   */
  const checkEligibility = (dataValue): boolean => {
    if (
      !dataValue.customer_banks.length ||
      (platform === 'personal-loan' &&
        ['A1', 'A2', 'A3'].includes(dataValue.income) &&
        dataValue.hmloan === 'A4')
    ) {
      return false;
    }

    return true;
  };

  const handleRedirectToRejection = () => {
    return router.push(
      `/rejection${
        // https://alphafounders.atlassian.net/browse/MEDIA-174
        // if thai language and it was rejected for personal-loan, it should redirect to cash-card url
        platform === 'personal-loan' && i18n.language === 'th'
          ? '?redirectToCash=true'
          : ''
      }`
    );
  };

  const handleSubmit = (dataValue) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    let requestData = { ...dataValue } ?? { ...values };

    if (queryValue) {
      requestData.queryparams = JSON.stringify({
        ...requestData.queryparams,
        ...queryValue,
      });
    }

    if (dataValue?.tc === 'Y') {
      gtmHelper.eventCustomMessage('accept_marketing_consent', {
        question: null, // reset question object from event question display
      });
    }

    const bankData = {};
    Object.keys(requestData.customer_banks).forEach((val, key) => {
      // eslint-disable-next-line no-param-reassign
      bankData[`bank${key + 1}`] = requestData.customer_banks[val];
    });

    if (platform === 'personal-loan' && requestData.customer_banks_loan) {
      const bankList = [
        'SCB',
        'TTB',
        'KRUNGSRI',
        'KKP',
        'CITI',
        'UOB',
        'LHBANK',
      ];

      requestData.customer_banks_loan = requestData.customer_banks_loan.map(
        (bank) => bankList[bank - 1] || 'None'
      );
      // @ts-ignore
      bankData.existed = JSON.stringify(requestData.customer_banks_loan);
    }

    const leadStatus = {
      nana_status: 'qualified',
      consent_SQ001: requestData.tc,
    };

    const isQualified = checkEligibility(dataValue);

    if (!isQualified) {
      leadStatus.nana_status = 'rejected';
    }

    // citiloan can be skipped and nullable at some condition, need to provide `N` as default coz api need that
    if (platform === 'personal-loan' && !requestData.citiloan) {
      requestData.citiloan = 'N';
    }

    requestData = {
      ...requestData,
      ...bankData,
      ...leadStatus,
    };

    gtmHelper.eventCustomMessage('questions/complete', { question: null });
    axios
      .post(
        `/api/campaign/${platform}/response`,
        { values: requestData },
        { headers }
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(`Successfully Submitted lead : ${response.data.id}`);

        gtmHelper.eventLeadCreated(response.data.id);

        localStorage.setItem('formSubmitSuccessful', 'success');

        localStorage.setItem(
          'nana_status',
          response?.data?.nana_status || 'rejected'
        );

        if (response?.data?.nana_status !== 'qualified') {
          // save lead as rejected status
          return handleRedirectToRejection();
        }

        // have to show thank you page
        return router.push(`/product/${platform}/thankyou`);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(`post error: ${error}`);

        localStorage.setItem('nana_status', 'rejected');

        return handleRedirectToRejection();
      });
  };

  // assigned data from the response of the api for dynamic questions
  const getDynamicChoiceQuestionPatch = async (questionCode, formValues) => {
    let newConfig;
    const personalLoan = new PersonalLoan(config, validationSchema);
    const queryString = Object.keys(formValues).reduce(
      (previous, accumulator) =>
        `${accumulator}=${formValues[accumulator]}&${previous}`,
      ''
    );
    if (platform === 'leasing') {
      handleHMRepaidValidation(formValues);
    } else {
      newConfig = await personalLoan.handle(
        questionCode,
        formValues,
        i18n.language
      );
    }

    if (newConfig) {
      setConfig(newConfig);

      setValidationSchema(
        Yup.object(schemaBuilder(newConfig.validationSchema))
      );

      return {
        shouldSkipNextQuestion: shouldSkipQuestion(
          questionCode,
          newConfig.questions
        ),
        questionConfig: newConfig,
      };
    }

    if (questionCode === 'hmrepaid') {
      newConfig = { ...config };
      newConfig.validationSchema.hmrepaid = {};
      if (formValues.debtfree !== 'N') {
        delete newConfig.validationSchema.hmrepaid;
      }
      setConfig(newConfig);
      return {
        shouldSkipNextQuestion: formValues.debtfree !== 'N',
        questionConfig: config,
      };
    }

    if (questionCode === 'customer_banks') {
      newConfig = config;

      const banks =
        platform === 'leasing'
          ? bankRankingHandler.getRanking(formValues)
          : loanBankRankingHandler.getRanking(formValues);
      newConfig.questions.customer_banks.items = banks;

      const activeList = newConfig.questions.customer_banks.items
        .filter((bank) => bank.isActive)
        .map((bank) => bank.id);

      // https://app.diagrams.net/#G1h-PaXgs8YBnEAXQEntd4M22KJq1MMQBO
      // user had less than 30k income and had 3 more loan, bank ranking section should be skipped
      const invalidForPersonalLoan =
        platform === 'personal-loan' &&
        ['A1', 'A2', 'A3'].includes(formValues.income) &&
        formValues.hmloan === 'A4';

      // remove skipQuestion if active bank length
      if (activeList.length && !invalidForPersonalLoan) {
        delete newConfig.questions.customer_banks.skipQuestion;
        newConfig.validationSchema.customer_banks.validation = {
          rule: 'array',
          min: 1,
        };

        if (activeList.length > 3) {
          newConfig.questions.customer_banks.recommendedItems =
            activeList.slice(0, 3); // if active items has more than 3, select first 3 items
        } else {
          newConfig.questions.customer_banks.recommendedItems =
            activeList.slice(0, activeList.length); // if active items has less than 3, select as length
        }
      } else {
        newConfig.questions.customer_banks.skipQuestion = [];
        newConfig.validationSchema.customer_banks.validation = {
          rule: 'array',
        };
      }

      setConfig(
        platform === 'leasing'
          ? transformCustomerBanks(newConfig, i18n.language, t)
          : transformCustomerBanksForLoan(newConfig, i18n.language, t)
      );

      setValidationSchema(
        Yup.object(schemaBuilder(newConfig.validationSchema))
      );

      return {
        shouldSkipNextQuestion: shouldSkipQuestion(
          questionCode,
          newConfig.questions
        ),
        questionConfig: newConfig,
      };
    }

    try {
      const response: any = await service.getDynamicQuestions(
        questionCode,
        queryString,
        i18n.language
      );

      if (questionCode === 'hmborrow') {
        const { price } = response.questions.hmborrow;
        resetValidationSchema('hmborrow', price);
        newConfig = config;
        newConfig.validationSchema.hmborrow.validation = {
          ...newConfig.validationSchema.hmborrow.validation,
          max: price,
        };
        newConfig.questions.hmborrow.subLabel = (
          <div>
            {t('motor:questions.labels.car_loan_price_current_value')} :{' '}
            <b className="loan-price-current-value">
              {Number(price).toLocaleString()}{' '}
              {t('motor:questions.labels.car_loan_price_currency')}
            </b>
          </div>
        );
      } else {
        // destructure and restructure the shapes of the api response as the same structure of questions inside config
        // pluck choices and popular count and then assigned selectionOptions and singleChoices property respectively
        const { choices, popularcount } =
          response.questions[questionCode].singlechoice;

        // check the placeholder and assigned that as first index of selectable options
        // if it is existed in the question config
        const getPlaceHolder = config.questions[questionCode].placeholder;

        const newFlow = {
          questions: {
            [questionCode]: {
              selectOptions: [
                getPlaceHolder
                  ? {
                      label: getPlaceHolder,
                      isPlaceHolder: true,
                    }
                  : [],
                ...choices,
              ],
              singleChoices: choices.slice(0, popularcount),
            },
          },
        };

        newConfig = mergePatch(config, newFlow);
      }

      setConfig(
        platform === 'leasing'
          ? transformCustomerBanks(newConfig, i18n.language, t)
          : transformCustomerBanksForLoan(newConfig, i18n.language, t)
      );

      return {
        shouldSkipNextQuestion: shouldSkipQuestion(
          questionCode,
          newConfig.questions
        ),
        questionConfig: newConfig,
      };
    } catch (e) {
      return {
        questionConfig: config,
      };
    }

    /*
    const dynamicQuestionFactory = DynamicQuestionFactory.create(
      platform,
      cloneDeep(config),
      validationSchema
    );
    const conf = await dynamicQuestionFactory.handle(
      questionCode,
      formValues,
      i18n.language,
      t
    );

    if (questionCode === 'hmrepaid') {
      return {
        shouldSkipNextQuestion: formValues.debtfree !== 'N',
        questionConfig: config,
      };
    }

    setConfig(newConfig);

    setValidationSchema(Yup.object(schemaBuilder(newConfig.validationSchema)));

    return {
      shouldSkipNextQuestion: shouldSkipQuestion(
        questionCode,
        newConfig.questions
      ),
      questionConfig: newConfig,
    }; */
  };

  const handleUpdate = useCallback((newConfig: Record<string, any>) => {
    setConfig(
      platform === 'leasing'
        ? transformCustomerBanks(newConfig, i18n.language, t)
        : transformCustomerBanksForLoan(newConfig, i18n.language, t)
    );
    setValidationSchema(Yup.object(schemaBuilder(newConfig.validationSchema)));
  }, []);

  /* eslint-disable react/no-danger */
  const marketingConsent = {
    submitLabel: t('buttons.proceed'),
    htmlTop: (
      <div
        dangerouslySetInnerHTML={{
          __html: t('common:terms_conditions.html_top'),
        }}
      />
    ),
    htmlBottom: (
      <div
        dangerouslySetInnerHTML={{
          __html: t('common:terms_conditions.html_bottom'),
        }}
      />
    ),
  };

  const handleEventQuestionDisplay = (_section: string, code: string) => {
    return gtmHelper.eventQuestionDisplay(platform, code);
  };

  return (
    <>
      <UpButton questionOrder={config.questionOrder} />
      <Container pt={5} maxW={1140} mt={10}>
        <QuestionFlow
          t={t}
          initialConfig={data.question_flow}
          initialValues={{ customer_banks: [], customer_banks_loan: [] }}
          initialSectionsVisibility={sectionsVisibility}
          initialQuestionsVisibility={questionsVisibility}
          marketingConsent={marketingConsent}
          validationSchema={validationSchema}
          onSubmit={!config.questions.tc ? () => null : handleSubmit}
          getDynamicChoiceQuestionPatch={getDynamicChoiceQuestionPatch}
          onConfigUpdate={handleUpdate}
          onAnswer={handleChange}
          eventQuestionDisplay={handleEventQuestionDisplay}
          onShowQuestion={() => null}
          lastStage={null}
        />
        {!config.questions.tc && (
          <Box w="100" textAlign="right">
            <button
              type="button"
              className="btn btn-lg btn-primary text-uppercase btn-block mt-2"
              onClick={() => handleSubmit(values)}
              disabled={!isCompleted}
              id="btn-submit"
            >
              {t('common:buttons.proceed')}
            </button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default QuestionFlowForm;
