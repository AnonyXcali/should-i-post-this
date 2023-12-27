import "./style.css"

const Button = ({
  title,
  buttonClassType,
  customButtonStyle,
  ...props
}) => (
  <button
    {...props}
    className={`${buttonClassType ? `button ${buttonClassType}` : "button"}`}
    style={{
      ...customButtonStyle || {}
    }}
  >
    <p>{title}</p>
  </button>
)

export default Button