/* eslint no-eval: 0 */
import React, { useState } from "react";
import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperation from "./components/MathOperation";
import Numbers from "./components/Numbers";
import './App.css';

const App = () => {

  const [stack, setStack] = useState("");

  return (
    <main className="react-calculator">
      <Result value={stack}/>
      <Numbers onClickNumber={number => {
        console.log(number);
        setStack(`${stack}${number}`);
      }}/>
      <Functions
        onContentClear={clear => {
          console.log(clear);
          setStack("");
        }}
        onDelete={deleteText => {
          if(stack.length > 0) {
            console.log(deleteText);
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
        />
      <MathOperation
        onClickOperation={operation => {
          console.log(operation);
          setStack(`${stack}${operation}`)
        }} 
        onClickEqual={equal => {
          console.log(equal);
          setStack(eval(stack).toString());
        }}/>
    </main>
  );
}

export default App;
