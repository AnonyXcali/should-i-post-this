"use client"
import { RootAppContext } from "./context"
import { useReducer } from "react"
import {
  fetchSentimentAnalysisDataAction,
  fetchingDataAction,
  setOpenAiAnalysisAction,
  setOpenAISocialMediaDemographicDataAction,
  fetchingOpenAISocialMediaDemographicDataAction,
  fetchingOpenAIDataAction,
  setImageForAnalysis,
  fetchingProfileConfigAction,
  setProfileConfigAction,
  errorFetchingProfileConfigAction,
} from "./actions"
import * as apis from "./api"
import {
  reducer,
} from "./reducer"

const init = {
  textInput: "",
  requesting: false,
  analysisData: null,
  demographics: null,
  requestingOpenAIAnalysis: false,
  openAiAnalysis: null,
  profileConfig: null,
  requestingDemographicData: false,
  requestingProfileConfig: false,
  renderingImages: false,
}

const RootContext = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, init);


  const setImage = (image) => {
    dispatch({
      type: setImageForAnalysis,
      image,
    })
  }

  const fetchSentimentAnalysisData = (text = "") => {
    dispatch({
      type: fetchingDataAction,
    })

    dispatch({
      type: fetchingOpenAIDataAction,
    })

    dispatch({
      type: fetchingOpenAISocialMediaDemographicDataAction,
    })

    apis.apiToFetchSentimentalAnalysis({
      text,
    }).then((data = {}) => {
      dispatch({
        type: fetchSentimentAnalysisDataAction,
        analysisData: data,
      })
    })
    
    apis.apiToFetchOpenAIAnalysis({
      text,
    }).then((data = {}) => {
      dispatch({
        type: setOpenAiAnalysisAction,
        openAiAnalysis: data
      })
    })

    apis.apiToFetchDemographicData({
      text,
    }).then((data = {}) => {
      const {
        response,
      } = data || {}
      dispatch({
        type: setOpenAISocialMediaDemographicDataAction,
        demographics: response.message.content,
      })
    })
  }


  const generateConfig = (payload) => {
    try {
      dispatch({
        type: fetchingProfileConfigAction,
      })

      const errHandler = () => {
        dispatch({
          type: errorFetchingProfileConfigAction,
        })
      }

      apis.apiToGenerateProfile({
        payload,
      },errHandler).then((data = {}) => {
        dispatch({
          type: setProfileConfigAction,
          profileConfig: data.response,
          renderingImages: true,
        })

        //add api here in loop


      })
    } catch(e) {
      errHandler()
      console.log('error', e)
    }
  }

  const dispatchedAction = {
    generateConfig,
    fetchSentimentAnalysisData,
    setImage,
  }

  return (
    <RootAppContext.Provider value={{ state, dispatchedAction }}>
      {children}
    </RootAppContext.Provider>
  )
}

export default RootContext
