import Display from "./Display";
import ButtonGroup from "./ButtonGroup";
import "../css/Calculator.css";
import { useState } from "react";
function Calculator() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className="calculator">
      <Display displayValaue={calVal}></Display>
      <ButtonGroup handleButton={onButtonClick}></ButtonGroup>
    </div>
  );
}
export default Calculator;
