import { AxiosResponse } from 'axios';
import Api from './Api';

class PlatformService {
  api: Api;

  constructor() {
    this.api = new Api('/api/');
  }

  getDynamicQuestions(
    questionCode: string,
    queryString: string,
    lang: string
  ): Promise<AxiosResponse<any>> {
    return this.api
      .get(`questionflow/choices/${questionCode}?${queryString}&lang=${lang}`)
      .then((data: AxiosResponse) => data)
      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
        throw error;
      });
  }

  saveToBackOffice(platform, requestData): Promise<AxiosResponse<any>> {
    return this.api
      .post(`/api/campaign/${platform}/response`, requestData)
      .then((data: AxiosResponse) => data)
      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
        throw error;
      });
  }
}

export default PlatformService;
