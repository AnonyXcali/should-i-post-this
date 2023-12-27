import "./style.css"

const Input = ({
  type,
  value,
  customInputStyle,
  ...props
}) => {
  return (
    <input
      {...props}
      value={value}
      className="text-input"
      type="text"
      style={{
        ...customInputStyle || {},
      }}
    />
  )
}

export default Input