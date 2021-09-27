import { AxiosResponse } from 'axios';
import Api from './Api';

class Service {
  api: Api;

  constructor() {
    this.api = new Api(process.env.NEXT_PUBLIC_BACKOFFICE_API_URL);
  }

  getSurveyDetailById(surveyId: number, lang: string): Promise<null> {
    return this.api
      .get(`/survey/${surveyId}/lang/${lang}`)
      .then((data) => data)
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          return null;
        }

        /* eslint-disable no-console */
        console.log(`Error fetching Survey Data: ${error}`);
        console.log(error);

        throw error;
      });
  }

  saveResponseWSL(
    data: object,
    platform: string
  ): Promise<AxiosResponse<any> | { is_duplicated: boolean }> {
    return (
      this.api
        .post(`/${platform}/lead`, data)
        // eslint-disable-next-line @typescript-eslint/no-shadow
        .then((data: AxiosResponse) => data)
        .catch((error) => {
          if (error.response.status === 409) {
            return { is_duplicated: true };
          }

          if (error.response && error.response.status === 404) {
            return null;
          }
          throw error;
        })
    );
  }
}

export default Service;
