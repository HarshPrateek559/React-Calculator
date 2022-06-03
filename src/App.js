import Buttons from "./components/Buttons";
import "./App.scss";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [show, setShow] = useState("");
  const [prev, setPrev] = useState('');
  return (
    <>
    <div className="calculator">
    <div className="change">
      <h1>calc</h1>
      <div className="toggle">

      </div>
    </div>
      <Display show={show} prev={prev}/>
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
        <Buttons sym="*" setShow={setShow} show={show}/>
        <Buttons sym="RESET" setShow={setShow} show={show} setPrev={setPrev}/>
        <Buttons sym="=" setShow={setShow} show={show} setPrev={setPrev}/>
      </div>
    </div>
    </>
  );
}

export default App;
