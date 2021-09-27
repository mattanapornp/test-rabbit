// state reducers pattern for controlling [type] platform data

export const initialState = {
  surveyDetail: {},
  templateData: {},
  lgtCampaignQueryParams: '',
  isPartnerDomain: null,
};

export const actionTypes = {
  SET_SURVEY_DETAIL: 'SET_SURVEY_DETAIL',
  SET_TEMPLATE_DATA: 'SET_TEMPLATE_DATA',
  SET_LGT_CAMPAIGN_QUERY_PARAMS: 'SET_LGT_CAMPAIGN_QUERY_PARAMS',
  SET_IS_PARTNER_DOMAIN: 'SET_IS_PARTNER_DOMAIN',
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case actionTypes.SET_SURVEY_DETAIL:
      return {
        ...state,
        surveyDetail: action.surveyDetail,
      };

    case actionTypes.SET_TEMPLATE_DATA:
      return {
        ...state,
        templateData: action.templateData,
      };

    case actionTypes.SET_LGT_CAMPAIGN_QUERY_PARAMS:
      return {
        ...state,
        lgtCampaignQueryParams: action.lgtCampaignQueryParams,
      };
    case actionTypes.SET_IS_PARTNER_DOMAIN:
      return {
        ...state,
        isPartnerDomain: action.isPartnerDomain,
      };

    default:
      return state;
  }
};

export default reducer;
