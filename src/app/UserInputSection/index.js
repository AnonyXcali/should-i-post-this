import { useContext } from "react"
import {
  Input,
  Button,
  FileUpload,
} from "../Elements"
import "./style.css"
import {
  RootContainer
} from "../Contexts"


const UserInputSection = ({
  handleTextChange,
  value,
  handleSubmit,
  handleFileUpload,
}) => {

  return (
    <div id="userInputSection_wrap">
      <div className="userInputSection_CTA">
        <Input
          value={value}
          onChange={handleTextChange}
          placeholder="Enter you thoughts?..."
        />
        <FileUpload
          placeholder="Upload an image"
          onChange={handleFileUpload}
        />
      </div>
      <Button
        title="Analyze!"
        onClick={handleSubmit}
        disabled={!value}
        customButtonStyle={{
          width: "120px",
          fontSize: "15px"
        }}
      />
    </div>
  )
}

export default UserInputSection