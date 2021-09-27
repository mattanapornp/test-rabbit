import yupFactory from './yupFactory';

export default function schemaBuilder(questions) {
  const reducer = (schema, question) => {
    const [name, config] = question;
    const validationConfig = config.validation
      ? config.validation
      : { rule: 'default' };

    const { rule, ...params } = validationConfig;

    const validation = yupFactory(rule, params);

    if (!validation) {
      return schema;
    }

    return {
      ...schema,
      [name]: validation,
    };
  };

  return Object.entries(questions).reduce(reducer, {});
}
