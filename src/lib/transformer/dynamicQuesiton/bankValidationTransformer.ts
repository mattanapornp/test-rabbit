export default function bankValidationTransformer(
  config: any,
  banks: Array<any>
) {
  const newConfig = config;
  newConfig.questions.customer_banks.items = banks;

  const activeList = newConfig.questions.customer_banks.items
    .filter((bank) => bank.isActive)
    .map((bank) => bank.id);

  // remove skipQuestion if active bank length
  if (activeList.length) {
    delete newConfig.questions.customer_banks.skipQuestion;
    newConfig.validationSchema.customer_banks.validation = {
      rule: 'array',
      min: 1,
    };

    if (activeList.length > 3) {
      newConfig.questions.customer_banks.recommendedItems = activeList.slice(
        0,
        3
      ); // if active items has more than 3, select first 3 items
    } else {
      newConfig.questions.customer_banks.recommendedItems = activeList.slice(
        0,
        activeList.length
      ); // if active items has less than 3, select as length
    }
  } else {
    newConfig.questions.customer_banks.skipQuestion = [];
    newConfig.validationSchema.customer_banks.validation = {
      rule: 'array',
    };
  }
  return newConfig;
}
