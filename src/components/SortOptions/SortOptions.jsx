import "./SortOptions.scss";
import React from "react";

const SortOptions = ({ liftingFormSelect }) => {
  const handleSelect = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const option = selectedOption.value;
    liftingFormSelect(option);
  };
  return (
    <div className="form-wrapper">
      <form className="select-option-form">
        <select
          onChange={handleSelect}
          className="select-option-form__select"
          id="select">
          <option value="default" defaultValue>
            Select an Option
          </option>
          <option value="Red">Red {String.fromCodePoint(0x003e)} 50%</option>
          <option value="Green">
            Green {String.fromCodePoint(0x003e)} 50%
          </option>
          <option value="Blue">Blue {String.fromCodePoint(0x003e)} 50%</option>
          <option value="Saturation">
            Saturation {String.fromCodePoint(0x003e)} 50%
          </option>
        </select>
      </form>
    </div>
  );
};

export default SortOptions;
