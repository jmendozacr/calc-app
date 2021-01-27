import Result from "./components/Result";
// import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import MathOperation from "./components/MathOperation";
import Button from "./components/Button";
import './App.css';

const App = () => {
  const clickHandlerFunction = text => {
    console.log(text);
  }

  return (
    <main className="react-calculator">
      <Result value={0}/>
      <div className="numbers">
        <Button text={"1"} clickHandler={clickHandlerFunction}/>
        <Button text={"2"} clickHandler={clickHandlerFunction}/>
        <Button text={"3"} clickHandler={clickHandlerFunction}/>
        <Button text={"4"} clickHandler={clickHandlerFunction}/>
        <Button text={"5"} clickHandler={clickHandlerFunction}/>
        <Button text={"6"} clickHandler={clickHandlerFunction}/>
        <Button text={"7"} clickHandler={clickHandlerFunction}/>
        <Button text={"8"} clickHandler={clickHandlerFunction}/>
        <Button text={"9"} clickHandler={clickHandlerFunction}/>
        <Button text={"0"} clickHandler={clickHandlerFunction}/>
      </div>
      <Functions/>
      <MathOperation
        onClickOperation={operation => console.log(operation)} 
        onClickEqual={equal => console.log(equal)}/>
    </main>
  );
}

export default App;
