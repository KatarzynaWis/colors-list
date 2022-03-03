import "./AddColor.scss";
import { useState, useEffect } from "react";
import saveColors from "../../helpers/saveColors";

const AddColor = ({ liftingFormData, colors }) => {
  const [hex, setHex] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const { addHex } = e.currentTarget.elements;
    if (addHex.value !== "") {
      liftingFormData(hex);
    }
    saveColors(hex);
    setHex("");
  };
  const handleChange = (e) => setHex(e.target.value);

  useEffect(() => {
    // localStorage.clear();
    localStorage.removeItem("colors");
  }, []);

  useEffect(() => {
    const API = "http://51.75.120.145:3000/todo";
    const dataToSend = colors;
    fetch(API, {
      method: "post",
      headers: {},
      body: dataToSend,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Colors sent to the database");
        console.log(res);
      });
  }, [colors]);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="add-color-form">
        <input
          onChange={handleChange}
          type="text"
          className="add-color-form__input"
          id="addHex"
          title="Type #, and after only digits 0-9 or letters a-f eg. #ff4545"
          minLength="4"
          maxLength="9"
          pattern="^#([a-fA-F\d]{3})$|^#([a-fA-F\d]{4})$|^#([a-fA-F\d]{6})$|^#([a-fA-F\d]{8})$"
          value={hex}
          autoComplete="off"
          placeholder="Type color in HEX form"></input>
        <input
          type="submit"
          className="add-color-form__input add-color-form__input--submit"
          value=""
        />
      </form>
    </div>
  );
};

export default AddColor;
