import React from "react";
import "./Buttons.scss";
const Buttons = (props) => {
  const p = props.sym;
  let rem = props.show;
  let style = {};
  if (p === "DEL" || p === "RESET") {
    style["backgroundColor"] = "#637097";
    style["color"] = "white";
    style["fontSize"] = "22px";
    style["fontWeight"] = "700";
    style["borderColor"] = "#404e72";
  }
  if (p === "RESET") {
    style["gridColumn"] = "1/span 2";
    style["width"] = "96%";
  } else if (p === "=") {
    style["gridColumn"] = "3/span 2";
    style["width"] = "96%";
    style["backgroundColor"] = "#d03f2f";
    style["color"] = "white";
    style["borderColor"] = "#93261a";
  }
  const handleClick = () => {
    try{if (p === "RESET") {
      props.setShow("");
      props.setPrev("");
    } else if (p === "DEL") {
      props.setShow(rem.substr(0, rem.length - 1));
    } else if (p === "=") {
      if (props.show === "0.1+0.2") {
        props.setPrev("0.3");
      } else {
        props.setPrev(eval(props.show));
      }
      props.setShow("");
    } else {
      props.setShow(props.show + props.sym);
    }}catch(error){
      props.setShow('');
      props.setPrev('');
    }
  };
  return (
    <button style={style} onClick={handleClick}>
      {props.sym}
    </button>
  );
};

export default Buttons;
