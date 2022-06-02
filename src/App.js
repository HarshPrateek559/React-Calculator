import Buttons from "./components/Buttons";
import "./App.scss";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [show, setShow] = useState("perfect");
  return (
    <div className="calculator">
      <Display show={show} />
      <div className="controls">
        <Buttons sym="7" setShow={setShow} show={show}/>
        <Buttons sym="8" setShow={setShow} show={show}/>
        <Buttons sym="9" setShow={setShow} show={show}/>
        <Buttons sym="DEL" setShow={setShow} show={show}/>
        <Buttons sym="4" setShow={setShow} show={show}/>
        <Buttons sym="5" setShow={setShow} show={show}/>
        <Buttons sym="6" setShow={setShow} show={show}/>
        <Buttons sym="+" setShow={setShow} show={show}/>
        <Buttons sym="1" setShow={setShow} show={show}/>
        <Buttons sym="2" setShow={setShow} show={show}/>
        <Buttons sym="3" setShow={setShow} show={show}/>
        <Buttons sym="-" setShow={setShow} show={show}/>
        <Buttons sym="." setShow={setShow} show={show}/>
        <Buttons sym="0" setShow={setShow} show={show}/>
        <Buttons sym="/" setShow={setShow} show={show}/>
        <Buttons sym="x" setShow={setShow} show={show}/>
        <Buttons sym="RESET" setShow={setShow} show={show}/>
        <Buttons sym="=" setShow={setShow} show={show}/>
      </div>
    </div>
  );
}

export default App;
