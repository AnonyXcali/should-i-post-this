import "./styles.scss"

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
      className="inner_TextInput"
      type="text"
      style={{
        ...customInputStyle || {},
      }}
    />
  )
}

export default Input