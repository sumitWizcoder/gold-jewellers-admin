import type { InputHTMLAttributes } from "react";

const inputTypes = [
  "text",
  "password",
  "email",
  "number",
  "tel",
  "url",
  "search",
  "date",
  "time",
  "datetime-local",
  "month",
  "week",
  "color",
  "file",
  "checkbox",
  "radio",
  "range",
  "hidden",
  "submit",
  "reset",
  "button",
];

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  id,
  disabled,
  readOnly,
  required,
  min,
  max,
  step,
  multiple,
  accept,
  autoComplete,
  ...rest
}: InputProps) => {
  const inputType = inputTypes.includes(type) ? type : "text";

  return (
    <input
      type={inputType}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      min={min}
      max={max}
      step={step}
      multiple={multiple}
      accept={accept}
      autoComplete={autoComplete}
      {...rest}
    />
  );
};

export default Input;
