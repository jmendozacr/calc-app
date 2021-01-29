import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperation from "./components/MathOperation";
import Numbers from "./components/Numbers";
import './App.css';

const App = () => {

  return (
    <main className="react-calculator">
      <Result value={undefined}/>
      <Numbers onClickNumber={number => console.log(number)}/>
      <Functions
        onContentClear={clear => console.log(clear)}
        onDelete={deleteText => console.log(deleteText)}
        />
      <MathOperation
        onClickOperation={operation => console.log(operation)} 
        onClickEqual={equal => console.log(equal)}/>
    </main>
  );
}

export default App;
