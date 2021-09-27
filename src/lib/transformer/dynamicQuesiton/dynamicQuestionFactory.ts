import Leasing from './leasing';
import PersonalLoan from './personalLoan';

export default class DynamicQuestionFactory {
  static create(
    platform: string | string[],
    config: any,
    validationSchema: any
  ): any {
    switch (platform) {
      case 'leasing':
        return new Leasing(config, validationSchema);
      case 'personal-loan':
        return new PersonalLoan(config, validationSchema);
      default:
        throw new Error('Unknown platform');
    }
  }
}
