import * as actions from "./actions"
import * as apis from "./api"

export const reducer = (state, action) => {
  switch (action.type) {
    case "text_change":
      return {
        ...state,
        textInput: action.data,
      }
    case actions.fetchingDataAction: {
      return {
        ...state,
        requesting: true,
      }
    }

    case actions.fetchingOpenAIDataAction: {
      return {
        ...state,
        requestingOpenAIAnalysis: true,
      }
    }

    case actions.fetchingOpenAISocialMediaDemographicDataAction: {
      return {
        ...state,
        requestingDemographicData: true,
      }
    }

    case actions.fetchSentimentAnalysisDataAction: {
      const {
        analysisData,
      } = action || {}
      return {
        ...state,
        analysisData,
        requesting: false,
      }
    }

    case actions.setOpenAiAnalysisAction: {
      const {
        openAiAnalysis,
      } = action || {}
      return {
        ...state,
        openAiAnalysis,
        requestingOpenAIAnalysis: false,
      }
    }

    case actions.setOpenAISocialMediaDemographicDataAction: {
      const {
        demographics,
      } = action || {}
      return {
        ...state,
        demographics,
        requestingDemographicData: false,
      }
    }

    case actions.fetchingProfileConfigAction: {
      return {
        ...state,
        requestingProfileConfig: true,
      }
    }

    case actions.setProfileConfigAction: {
      const {
        profileConfig,
      } = action || {}

      return {
        ...state,
        profileConfig,
        requestingProfileConfig: false,
      }
    }

    case actions.errorFetchingProfileConfigAction: {
      return {
        ...state,
        profileConfig: null,
        requestingProfileConfig: false,
      }
    }

    case actions.setImageForAnalysis: {
      const {
        image,
      } = action

      return {
        ...state,
        image,
      }
    }

    default:
      return {
        ...state,
      }
  }

}