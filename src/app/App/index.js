"use client"
import { useReducer, useContext } from "react"
import "./styles.css"
import UserInputSection from "../UserInputSection"
import OpenAIBot from "../OpenAIBot"
import { ProgressBarData } from "../DataVisualization"
import {
  RootContainer,
} from "../Contexts"

const init = {
  textInput: "",
  requesting: false,
  analysisData: null,
}

const reducer = (state, action) => {

  switch(action.type) {
    case "text_change":
      return {
        ...state,
        textInput: action.data,
      }
    default:
      return {
        ...state,
      }
  }

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, init);

  const {
    state: rootState,
    dispatchedAction: {
      fetchSentimentAnalysisData,
      setImage,
    },
  } = useContext(RootContainer)

  const {
    textInput,
  } = state || {}

  const {
    requesting,
    openAiAnalysis = null,
    analysisData = null,
    requestingOpenAIAnalysis,
    demographics,
    requestingDemographicData,
    image,
  } = rootState || {}

  const handleTextChange = (e) => {
    const value = e.target.value
    dispatch({
      type: "text_change",
      data: value,
    })
  }

  const handleSubmit = () => {
    fetchSentimentAnalysisData(textInput)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  console.log("image", image)

  return (
    <div id="appPage">
      <div>
        <h1 className="fw500">Should I Post This?</h1>
        <p className="app_description">
          A personal AI powered platform that helps you analyze your content and helps you cater it to correct audience.
        </p>
      </div>
      <div className="wrap">
        <UserInputSection
          state={{ ...state }}
          handleTextChange={handleTextChange}
          value={textInput}
          handleSubmit={handleSubmit}
          handleFileUpload={handleFileUpload}
        />
      </div>
      <div className="flex mt40">
        {requestingOpenAIAnalysis ? (
          <p>Loading...</p>
        ) : openAiAnalysis && (
          <OpenAIBot />
        )}
        {requestingDemographicData ? (
          <p>Loading..</p>
        ) : demographics && (
          <ProgressBarData
            title="Demographic Favorability"
            response={JSON.parse(demographics)}
          />
        )}
        {requesting ? (
          <p>Loading..</p>
        ) : analysisData && (
          <ProgressBarData
            title="Sentiment Stats"
            response={analysisData.response}
          />
        )}
      </div>
    </div>
    )
}

export default App