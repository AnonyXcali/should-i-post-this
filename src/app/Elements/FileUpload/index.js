import "./style.css"

const FileUpload = ({
  type,
  value,
  customInputStyle,
  ...props
}) => {
  return (
    <input
      {...props}
      className="file-input"
      type="file"
    />
  )
}

export default FileUpload