import React from 'react'

function FormField({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  className,
  onChange,
}) {
  return (
    <div input-container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  )
}

export default FormField
