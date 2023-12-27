import "./styles.scss"

const Select = ({
  options,
  onChange,
  ...props
}) => (
  <select
   {...props}
    onChange={onChange}
    className="inner_Select"
  >
    {options && options.map((item, index) => (
      <option
        key={`${item.label}_${Math.ceil(Math.sqrt(index)*10.123)}}`}
        value={item.value}
      >
        {item.label}
      </option>
    ))}

  </select>
)

export default Select