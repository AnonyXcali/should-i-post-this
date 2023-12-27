import "./styles.scss"

const TextArea = ({
  type,
  value,
  customInputStyle,
  ...props
}) => {
  return (
    <textarea
      {...props}
      value={value}
      className="text-area"
      type="text"
      style={{
        ...customInputStyle || {},
      }}
    />
  )
}

export default TextArea