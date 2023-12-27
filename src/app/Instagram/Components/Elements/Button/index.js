import "./styles.scss"

const Button = ({
  buttonName,
  type,
  ...props
}) => (
  <button
    className="inner_Button"
  >
    {buttonName}
  </button>
)

export default Button