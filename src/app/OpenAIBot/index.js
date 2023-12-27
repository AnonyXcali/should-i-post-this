import { useContext } from "react"
import "./styles.css"
import {
  RootContainer,
} from "../Contexts"

const OpenAIBot = () => {
  const {
    state: rootState,
  } = useContext(RootContainer)

  const {
    openAiAnalysis: {
      response: {
        message: {
          content,
        }
      }
    }
  } = rootState || {}

  return (
    <div className="openAI_card">
      <h2 className="underline">Descriptive Analysis</h2>
      <p className="analysis">{content}</p>
    </div>
  )
}


export default OpenAIBot