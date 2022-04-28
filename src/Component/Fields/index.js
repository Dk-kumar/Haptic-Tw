import React from "react";

const InputField = ({
  value,
  label,
  name,
  className,
  length,
  type,
  required,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={className ? className : "field-wrapper flex flex-col gap-2"}
    >
      {label && (
        <label className={required && "after:content-['*']"}>{label}</label>
      )}
      <input
        className="h-9 px-2 rounded-md border border-solid border-slate-300 focus:border-teal-500"
        type={type}
        value={value}
        name={name}
        autoComplete={"off"}
        maxLength={length && length}
        onChange={onChange}
        onBlur={() => onBlur && onBlur()}
      />
    </div>
  );
};

export default InputField;
