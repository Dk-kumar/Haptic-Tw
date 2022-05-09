import React from "react";

const InputField = ({
  value,
  label,
  name,
  type,
  border,
  className,
  required,
  maxLength,
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
        className={`h-9 px-2 rounded-md border border-solid ${
          !border
            ? `focus:outline-none focus:ring-1 focus:border-primary`
            : `focus:outline-none focus:ring-1 focus:border-red-500`
        } ${border ? "border-red-500" : "border-slate-300"}`}
        type={type}
        value={value}
        name={name}
        autoComplete={"off"}
        maxLength={maxLength && maxLength}
        onChange={onChange}
        onBlur={() => onBlur && onBlur()}
      />
    </div>
  );
};

export default InputField;
