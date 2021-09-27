import TagManager from 'react-gtm-module';
import SiteConfigRoot from '../../siteConfig';

export default class GTMHelper {
  dataLayer: (event) => void;

  constructor() {
    this.dataLayer = (event) =>
      TagManager.dataLayer({ dataLayer: { ...event } });
  }

  eventQuestionDisplay = (section, question) => {
    return this.dataLayer({
      event: 'question/display',
      section,
      question,
    });
  };

  eventCustomMessage = (event, params = {}) => {
    return this.dataLayer({
      event,
      ...params,
    });
  };

  eventPageLoadMessage = (page, params = {}) => {
    return this.dataLayer({
      event: 'page_load',
      page,
      ...params,
    });
  };

  eventSuccessMsg = (platform: string, params = {}) => {
    const event = SiteConfigRoot[platform];
    if (!event) {
      return null;
    }
    return this.dataLayer({
      [`Facebook-Lead-Event`]: event.eventSuccess,
      ...params,
    });
  };

  eventLeadCreated = (lead_id: string) => {
    return this.dataLayer({
      event: 'lead_created',
      lead_id,
    });
  };
}
