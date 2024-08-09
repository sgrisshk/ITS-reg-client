import React from "react";
import InputGroupProps from "./Input.props";

export default const InputGroup: React.FC<InputGroupProps> = ({ label, large = false, textfield = false, ...rest }) => {
    const inputClass = `${large ? "large" : "small"} ${textfield ? "textfield" : ""}`;
  
    return (
      <label>
        {label}:
        <input className={inputClass} {...rest} />
      </label>
    );
  };
  
  
