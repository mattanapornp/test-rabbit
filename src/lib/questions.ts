import { normalizeDate } from './date';
import { isKeySet } from './object';

export const findMultiQuestions = (
  questions: Array<any>,
  questionOrder: Array<any>
) => {
  const skipQuestions = [];
  const multiQuestions = {};
  let currentMulti = null;
  questionOrder.forEach((key) => {
    const question = questions[key];
    const nextOnSamePage = isKeySet(
      question.annotations,
      'rf/show-next-on-same-page'
    );
    if (!currentMulti) {
      if (!nextOnSamePage) {
        return;
      }
      multiQuestions[key] = {
        [key]: question,
      };
      currentMulti = key;
      return;
    }
    multiQuestions[currentMulti][key] = question;
    skipQuestions.push(key);
    if (!nextOnSamePage) {
      currentMulti = null;
    }
  });
  return {
    multiQuestions,
    skipQuestions,
  };
};

export const getDefaultAnswer = (code: string, questions: Array<any>) => {
  const question = questions[code];

  // If skipQuestion is defined then return it's value
  if (Object.keys(question).includes('skipQuestion')) {
    return question.skipQuestion;
  }

  if (
    question.type === 'combo_radio_select' &&
    question.singleChoices.length === 1
  ) {
    return question.singleChoices[0].value;
  }

  return null;
};

export const getNextQuestion = (
  question: any,
  questionOrder: Array<any>,
  questions: Array<any>
) => {
  let position = questionOrder.indexOf(question);

  if (questions[question].type === 'multi_question') {
    position += questions[question].questions.length;
  } else {
    position += 1;
  }

  if (position > questionOrder.length) {
    return null;
  }

  return questionOrder[position];
};

export const shouldSkipQuestion = (code: string, questions: Array<string>) => {
  const question = questions[code];

  if (!question) {
    return false;
  }

  // Skip if explicitly told to
  if (Object.keys(question).includes('skipQuestion')) {
    return true;
  }

  // Skip if Radio Select with only 1 choice available
  return (
    question.type === 'combo_radio_select' &&
    question.singleChoices.length === 1
  );
};

export const getNextSection = (section: string, sections: Array<string>) => {
  const sectionCodes = Object.keys(sections);
  const currentIndex = sectionCodes.indexOf(section);

  if (currentIndex >= sectionCodes.length) {
    return null;
  }

  return sectionCodes[currentIndex + 1];
};

export const isEndOfSection = (question: any, sections: any) => {
  const sectionQuestions = sections[question.section].questions;
  const questionIndex = sectionQuestions.indexOf(question.code);

  return questionIndex === sectionQuestions.length - 1;
};

export const getFollowingQuestions = (question: any, sections: any) => {
  const current = sections[question.section].questions.indexOf(question.code);
  const followingQuestions = [];

  sections[question.section].questions.forEach((questionCode, index) => {
    if (index <= current) {
      return;
    }

    followingQuestions.push(questionCode);
  });

  return followingQuestions;
};

export const getQuestionPosition = (code: any, config: any) => {
  if (!config.questionOrder) {
    return null;
  }

  return config.questionOrder.indexOf(code);
};

export const sortLabels = (a: any, b: any, direction = 'asc') => {
  let labelA = a.label;
  let labelB = b.label;
  if (direction === 'desc') {
    labelA = b.label;
    labelB = a.label;
  }

  let comparison = 0;
  if (labelA > labelB) {
    comparison = 1;
  } else if (labelA < labelB) {
    comparison = -1;
  }
  return comparison;
};

export const sortTransLabels = (a: any, b: any, direction = 'asc') => {
  let labelA = a.transLabel;
  let labelB = b.transLabel;
  if (direction === 'desc') {
    labelA = b.transLabel;
    labelB = a.transLabel;
  }

  let comparison = 0;
  if (labelA > labelB) {
    comparison = 1;
  } else if (labelA < labelB) {
    comparison = -1;
  }
  return comparison;
};

export const normalizeValue = (question: any, values: any) => {
  const { code, type } = question;

  if (type === 'date') {
    if (values[code] === null) {
      return '';
    }

    if (values[code]) {
      return normalizeDate(values[code]).format('DD/MM/YYYY');
    }
  }

  if (type === 'text' && values[code] === null) {
    return '';
  }

  return values[code];
};

export const normalizeValues = (questions: Array<any>, values: any) => {
  const normalizedValues = {};
  Object.keys(questions).forEach((questionCode) => {
    if (questions[questionCode]) {
      if (questions[questionCode].type === 'multi_question') {
        questions[questionCode].questions.map((subQuestion) => {
          normalizedValues[subQuestion.code] = normalizeValue(
            subQuestion,
            values
          );
          return null;
        });
      } else {
        normalizedValues[questionCode] = normalizeValue(
          questions[questionCode],
          values
        );
      }
    }
  });

  return normalizedValues;
};

export const normalizeAnswers = (answers: string, questions: Array<any>) => {
  const values = {};
  Object.keys(answers).forEach((questionCode) => {
    if (questions[questionCode] && questions[questionCode].type === 'date') {
      if (answers[questionCode]) {
        values[questionCode] = normalizeDate(answers[questionCode]).format(
          'YYYY-MM-DD'
        );
      }
    } else {
      values[questionCode] = answers[questionCode];
    }
  });

  return values;
};

/**
 * Progress bar percentage calculation
 *
 * @example
 * // returns {q1: 25, q2: 25, q3: 60, q4: 70, q5: 80, q6: 90, q7: 100}
 * calculateProgressPercentage([
 *   [q1, q2]
 *   [q3, q4, q5, q6, q7]
 * ]);
 *
 * @param {Array} questionListing
 *
 * @return {Object}
 */
export const calculateProgressPercentage = (questionListing: Array<any>) => {
  const sectionPercentage = 100 / questionListing.length;
  const percentageConfig = {};
  let percentageValue = 0;

  questionListing.forEach((questions) => {
    questions.forEach((name) => {
      // Calculate percentage of each question block
      percentageValue += sectionPercentage / questions.length;
      percentageConfig[name] = Math.ceil(percentageValue);
    });
  });

  return percentageConfig;
};
