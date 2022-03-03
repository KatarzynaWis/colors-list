import "./App.scss";
import AddColor from "../components/AddColor/AddColor";
import ColorsList from "../components/ColorsList/ColorsList";
import SortOptions from "../components/SortOptions/SortOptions";
import { useState, useEffect } from "react";
import hexToRgba from "../helpers/hexToRgba";

const App = () => {
  const [hexColors, setHexColors] = useState([]);
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState("default");
  const liftingFormData = (hex) => {
    setHexColors([...hexColors, hex]);
    if (hexColors.every((value) => value !== hex)) {
      setColors([...colors, hexToRgba(hex)]);
    }
  };
  const liftingFormSelect = (option) => setOptions(option);

  return (
    <div className="container">
      <AddColor liftingFormData={liftingFormData} colors={colors} />
      <SortOptions liftingFormSelect={liftingFormSelect} />
      <ColorsList colors={colors} options={options} />
    </div>
  );
};

export default App;
