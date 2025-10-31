import React from "react";
const getError = (errors, path) => {
  const keys = path
    .replace(/\[(\w+)\]/g, ".$1") 
    .replace(/^\./, "")           
    .split(".");

  return keys.reduce((obj, key) => (obj ? obj[key] : undefined), errors);
};

const Input = ({
  id,
  register,
  type,
  name,
  errors,
  placeholder,
  className,
  label,
}) => {
  const error = getError(errors, name);
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}{" "}
      <input
        id={id}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-indigo-500"
        } rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2  ${className}`}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
