import React from "react";

const InputField = ({
  value,
  label,
  name,
  length,
  type,
  onChange,
}) => {
  return (
    <div className="field-wrapper flex flex-col gap-2">
      {label && (
        <label className="after:content-['*']">
          {label}
        </label>
      )}
      <input
        className="h-8 px-2 rounded-md border border-solid border-slate-300 focus-within:border-teal-500"
        type={type}
        value={value}
        name={name}
        maxLength={length && length}
        onChange={onChange}
        autocomplete={"off"} 
      />
    </div>
  );
};

export default InputField;
