/* eslint-disable consistent-return */
import mergePatch from 'tiny-merge-patch';

import PlatformService from 'lib/lgt/platformService';

interface IDynamicHandler {
  config: any;
  validationSchema: any;
}

export default class DynamicQuestion implements IDynamicHandler {
  config: any;

  validationSchema: any;

  shouldSkipQuestion: boolean;

  constructor(config: any, validationSchema: any) {
    this.config = config;
    this.shouldSkipQuestion = false;
    this.validationSchema = validationSchema;
  }

  mergeWithChoices(questionCode: string, response: any) {
    if (response.error) {
      return;
    }

    // destructure and restructure the shapes of the api response as the same structure of questions inside config
    // pluck choices and popular count and then assigned selectionOptions and singleChoices property respectively
    const { choices, popularcount } =
      response.questions[questionCode].singlechoice;

    // check the placeholder and assigned that as first index of selectable options
    // if it is existed in the question config
    const getPlaceHolder = this.config.questions[questionCode].placeholder;

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

    return mergePatch(this.config, newFlow);
  }

  async handleDynamicQuestion(
    questionCode: string,
    formValues: Record<string, any>,
    lang: string
  ) {
    if (this.shouldSkipQuestion) {
      return;
    }

    const queryString = Object.keys(formValues).reduce(
      (previous, accumulator) =>
        `${accumulator}=${formValues[accumulator]}&${previous}`,
      ''
    );

    // create the api instance
    const service = new PlatformService();

    try {
      return await service.getDynamicQuestions(questionCode, queryString, lang);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return {
        error: e,
      };
    }
  }
}
