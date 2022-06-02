import React from "react";
import "./Buttons.scss";
const Buttons = (props) => {
  const p = props.sym;
  let style = {};
  if (p === "RESET") {
    style["gridColumn"] = "1/span 2";
    style["width"] = "96%";
  } 
  else if (p === "=") {
    style["gridColumn"] = "3/span 2";
    style["width"] = "96%";
    style['backgroundColor'] = '#d03f2f';
    style["color"] = 'white';
  }
  if (p === "DEL" || p === "RESET") {
    style["backgroundColor"] = "#637097";
    style["color"] = 'white';
  }
  return (
    <button style={style} onClick={() => props.setShow(props.show + props.sym)}>
      {props.sym}
    </button>
  );
};

export default Buttons;
