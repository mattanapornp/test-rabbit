import { NextApiRequest, NextApiResponse } from 'next';
import banks from '../../../lib/constants/loanBanks';

const data = {
  question_flow: {
    validationSchema: {
      name: {
        validation: {
          rule: 'name',
          min: 0,
          max: 40,
        },
      },
      surname: {
        validation: {
          rule: 'name',
          min: 0,
          max: 40,
        },
      },
      phone: {
        validation: {
          rule: 'phone',
        },
      },
      email: {
        validation: {
          rule: 'email',
        },
      },
      purpose: {},
      howlong: {},
      income: {},
      hmloan: {},
      occupation: {},
      experience: {},
      registered: {},
      customer_banks_loan: {
        validation: {
          rule: 'array',
          min: 1,
        },
      },
      customer_banks: {
        validation: {
          rule: 'array',
        },
      },
      idcard: {
        validation: {
          rule: 'thai_id',
        },
      },
      citiloan: {},
      tc: {},
    },
    questions: {
      purpose: {
        code: 'purpose',
        type: 'combo_radio_select',
        section: 'loan',
        order: 1,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.loan_request_purpose',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [],
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_loan_request',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:loan_request_purpose.to_consolidate',
          },
          {
            value: 'A2',
            label: 'motor:loan_request_purpose.to_invest',
          },
          {
            value: 'A3',
            label: 'motor:loan_request_purpose.pay_tution',
          },
          {
            value: 'A4',
            label: 'motor:loan_request_purpose.pay_medical_bill',
          },
          {
            value: 'A5',
            label: 'motor:loan_request_purpose.pay_other',
          },
        ],
        choiceTranslation: null,
      },
      howlong: {
        code: 'howlong',
        type: 'combo_radio_select',
        section: 'loan',
        order: 2,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.howlong',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [],
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_period',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:repay_debt_period.less_a_year',
          },
          {
            value: 'A2',
            label: 'motor:repay_debt_period.more_a_year',
          },
        ],
        choiceTranslation: null,
      },
      income: {
        order: 3,
        label: 'Please select',
        code: 'income',
        section: 'loan',
        placeholder: 'motor:questions.placeholders.select_income',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.customer_income',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_income',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:income.label.less_than_15k',
          },
          {
            value: 'A2',
            label: 'motor:income.label.thb_15k_to_20k',
          },
          {
            value: 'A3',
            label: 'motor:income.label.thb_20k_to_30k',
          },
          {
            value: 'A4',
            label: 'motor:income.label.thb_30k_to_40k',
          },
          {
            value: 'A5',
            label: 'motor:income.label.thb_40k_to_50k',
          },
          {
            value: 'A6',
            label: 'motor:income.label.thb_50k_to_60k',
          },
          {
            value: 'A7',
            label: 'motor:income.label.thb_60k_to_100k',
          },
          {
            value: 'A8',
            label: 'motor:income.label.thb_100k_to_200k',
          },
          {
            value: 'A9',
            label: 'motor:income.label.more_than_200k',
          },
        ],
        choiceTranslation: null,
        singleChoices: [],
        dynamic: true,
      },
      hmloan: {
        code: 'hmloan',
        type: 'combo_radio_select',
        section: 'loan',
        order: 4,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.hmloan',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [],
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_hmloan',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:hmloan.none',
          },
          {
            value: 'A2',
            label: 'motor:hmloan.only_one',
          },
          {
            value: 'A3',
            label: 'motor:hmloan.two',
          },
          {
            value: 'A4',
            label: 'motor:hmloan.three',
          },
        ],
        choiceTranslation: null,
        dynamic: true,
        skipQuestion: '',
      },
      occupation: {
        order: 5,
        code: 'occupation',
        section: 'loan',
        placeholder: 'motor:questions.placeholders.select_occupation',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.customer_occupation',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '1',
        singleChoices: [],
        choiceTranslation: null,
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_occupation',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:occupation.label.permanent_officer',
          },
          {
            value: 'A2',
            label: 'motor:occupation.label.officer_with_commission',
          },
          {
            value: 'A3',
            label: 'motor:occupation.label.temp_employee',
          },
          {
            value: 'A4',
            label: 'motor:occupation.label.government_officer',
          },
          {
            value: 'A5',
            label: 'motor:occupation.label.business_owner_company',
          },
          {
            value: 'A6',
            label: 'motor:occupation.label.business_owner_no_company',
          },
          {
            value: 'A7',
            label: 'motor:occupation.label.online_seller',
          },
          {
            value: 'A8',
            label: 'motor:occupation.label.freelancer',
          },
          {
            value: 'A9',
            label: 'motor:occupation.label.unemployed_plain',
          },
          {
            value: 'A10',
            label: 'motor:occupation.label.housewife',
          },
          {
            value: 'A11',
            label: 'motor:occupation.label.military_and_police',
          },
          {
            value: 'A12',
            label: 'motor:occupation.label.others',
          },
        ],
        dynamic: true,
      },

      experience: {
        code: 'experience',
        type: 'combo_radio_select',
        section: 'loan',
        dynamic: true,
        skipQuestion: '',
        order: 6,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.experience',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [],
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_experience',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:experience.less_4_months',
          },
          {
            value: 'A2',
            label: 'motor:experience.more_4_months',
          },
          {
            value: 'A3',
            label: 'motor:experience.more_a_year',
          },
        ],
        choiceTranslation: null,
      },
      registered: {
        code: 'registered',
        type: 'combo_radio_select',
        section: 'loan',
        order: 7,
        label: 'Please select',
        dynamic: true,
        skipQuestion: '',
        translations: {
          label: 'motor:questions.labels.registered',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [],
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_registered',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:registered.less_a_year',
          },
          {
            value: 'A2',
            label: 'motor:registered.more_a_year',
          },
          {
            value: 'A3',
            label: 'motor:registered.more_2_years',
          },
        ],
        choiceTranslation: null,
      },
      customer_banks_loan: {
        code: 'customer_banks_loan',
        type: 'multi_select_field',
        section: 'loan',
        order: 8,
        label: 'motor:questions.labels.customer_banks_loan',
        validation: {
          rule: 'array',
        },
        items: [
          {
            id: 1,
            name: 'motor:bank_name.SCB',
            logo: '/images/banks/bank_1.svg,',
            isReset: false,
          },
          {
            id: 2,
            name: 'motor:bank_name.TTB',
            logo: '/images/banks/bank_9.svg,',
            isReset: false,
          },
          {
            id: 3,
            name: 'motor:bank_name.KRUNGSRI',
            logo: '/images/banks/bank_4.svg,',
            isReset: false,
          },
          {
            id: 4,
            name: 'motor:bank_name.KKP',
            logo: '/images/banks/bank_2.svg,',
            isReset: false,
          },
          {
            id: 5,
            name: 'motor:bank_name.CITI',
            logo: '/images/banks/citi_bank.svg', // 10
            isReset: false,
          },
          {
            id: 6,
            name: 'motor:bank_name.UOB',
            logo: '/images/banks/uob.svg', // 11
            isReset: false,
          },
          {
            id: 7,
            name: 'motor:bank_name.LH',
            logo: '/images/banks/lh_bank.svg', // 12
            isReset: false,
          },
          {
            id: 8,
            name: 'motor:bank_name.NONE',
            logo: '/images/banks/non_bank.svg,',
            isReset: true,
          },
        ],
      },
      province: {
        order: 9,
        label: 'Please select',
        code: 'province',
        section: 'loan',
        dynamic: {
          group: 'loan',
          dependants: ['loan'],
        },
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.customer_provice',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [],
        placeholder: 'motor:questions.placeholders.select_province',
      },
      name: {
        code: 'name',
        type: 'multi_question',
        section: 'loan',
        placeholder: 'motor:questions.labels.first_name',
        questions: [
          {
            order: 10,
            code: 'name',
            label: 'motor:questions.labels.first_name',
            section: 'loan',
            translations: {
              label: 'motor:questions.labels.first_name',
              placeholder: '',
              tooltip: '',
            },
            type: 'text',
          },
          {
            order: 11,
            code: 'surname',
            label: 'motor:questions.labels.last_name',
            section: 'loan',
            translations: {
              label: 'motor:questions.labels.last_name',
              placeholder: '',
              tooltip: '',
            },
            type: 'text',
          },
        ],
      },
      phone: {
        code: 'phone',
        section: 'loan',
        type: 'multi_question',
        questions: [
          {
            order: 12,
            code: 'phone',
            label: 'motor:questions.labels.customer_phone',
            section: 'laon',
            translations: {
              label: 'motor:questions.labels.customer_phone',
              placeholder: '',
              tooltip: '',
            },
            type: 'phone',
            validation: {
              rule: 'phone',
            },
          },
          {
            order: 13,
            code: 'email',
            label: 'motor:questions.labels.customer_email',
            section: 'loan',
            translations: {
              label: 'motor:questions.labels.customer_email',
              placeholder: '',
              tooltip: '',
            },
            type: 'email',
            validation: {
              rule: 'email',
            },
          },
        ],
      },
      customer_banks: {
        section: 'loan',
        code: 'customer_banks',
        type: 'rich_multi_choice',
        label: 'motor:questions.labels.customer_banks.label',
        description: {
          text: 'motor:questions.labels.customer_banks.description',
          tip: 'motor:questions.labels.customer_banks.tip_text',
        },
        checkbox: {
          label: 'motor:questions.labels.customer_banks.checkbox_label',
          value: '1',
        },
        dynamic: {
          group: 'loan',
          dependants: ['loan'],
        },
        skipQuestion: [],
        order: 14,
        translations: {
          label: 'motor:questions.labels.customer_income',
          placeholder: '',
          tooltip: '',
        },
        items: banks,
        subLabel: 'Current Value of your car :500,000 THB',
        validation: {
          rule: 'array',
          min: 1,
        },
      },
      idcard: {
        order: 15,
        code: 'idcard',
        label: 'motor:questions.labels.id_card_number',
        section: 'loan',
        translations: {
          label: 'motor:questions.labels.id_card_number',
          placeholder: '',
          tooltip: '',
        },
        type: 'thai_id',
        dynamic: true,
        skipQuestion: '',
      },
      citiloan: {
        code: 'citiloan',
        type: 'combo_radio_select',
        section: 'loan',
        order: 16,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.citi_loan',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [
          {
            value: 'Y',
            label: 'common:yes',
          },
          { value: 'N', label: 'common:no' },
        ],
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
        dynamic: true,
        skipQuestion: '',
      },
      tc: {
        label:
          '<a href="https://rabbitfinance.com/en/privacy-policy" target="_blank" rel="noreferrer noopener"><span style="color:#0000FF;">Your information is secured.</span></a> Please accept <a href="https://rabbitfinance.com/en/terms-and-conditions" target="_blank" rel="noreferrer noopener"><span style="color:#0000FF;">Term and Condition.</span></a>',
        code: 'tc',
        optionY: 'Y',
        optionN: 'N',
      },
    },

    questionOrder: [
      'purpose',
      'howlong',
      'income',
      'hmloan',
      'occupation',
      'experience',
      'registered',
      'customer_banks_loan',
      'province',
      'name',
      'surname',
      'phone',
      'email',
      'customer_banks',
      'idcard',
      'citiloan',
      'tc',
    ],
    sections: {
      loan: {
        label: 'motor:page_titles.loan_comparison',
        code: 'loan',
        questions: [
          'purpose',
          'howlong',
          'income',
          'hmloan',
          'occupation',
          'experience',
          'registered',
          'customer_banks_loan',
          'province',
          'name',
          'phone',
          'customer_banks',
          'idcard',
          'citiloan',
        ],
      },
    },
    sectionsVisibility: {
      loan: true,
    },
    questionsVisibility: {
      loan: true,
      tc: false,
    },
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
