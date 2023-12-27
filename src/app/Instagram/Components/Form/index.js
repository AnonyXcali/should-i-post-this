import "./styles.scss"
import {
  Input,
  TextArea,
  Select,
  Button,
} from "../Elements"

const options = [
  { label: "Anime", value: "anime" },
  { label: "Realistic", value: "realistic" },
  { label: "Human", value: "human" },
  { label: "Cartoonish", value: "cartoonish" },
  { label: "Cyberpunk", value: "cyberpunk" },
  { label: "Renaissance", value: "renaissance" },
  { label: "Modern", value: "modern" },
  { label: "Village", value: "village" },
  { label: "Sporty", value: "sporty" },
  { label: "Artistic", value: "artistic" },
  { label: "Tech", value: "tech" }
];


const Form = ({
  onSubmit,
}) => (
  <div className="inner_Form_Wrap">
    <div className="user_Instruction_Wrap_Form">
      <p>Details</p>
    </div>
    <form className="inner_Form" onSubmit={onSubmit}>
      <div className="spacer">
        <label>username</label>
        <Input name="user_name" />
      </div>
      <div className="spacer">
        <label>description</label>
        <TextArea
          name="user_description"
          rows="10"
        />
      </div>
      <div className="spacer">
        <label for="image_characteristics">profile type</label>
        <Select
          name="image_type"
          id="image_characteristics"
          options={options}
        />
      </div>
      <div className="spacer">
        <Button
          type="submit"
          buttonName="Generate!"
        />
      </div>
    </form>
  </div>
)

export default Form