import React from "react";

export function Button({ children, asChild = false, className = "", ...props }) {
  const baseStyles = `
    bg-green-700 
    text-white 
    px-4 py-2 
    rounded-full 
    border-2 border-transparent 
    transition 
    duration-200
    hover:bg-white 
    hover:text-green-700
    hover:border-green-700
    active:bg-white
    active:text-green-700
    active:border-green-700
  `;

  if (asChild) {
    return React.cloneElement(children, {
      className: `${baseStyles} ${children.props.className || ""} ${className}`,
      ...props,
    });
  }

  return (
    <button {...props} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}
