import Result from "./components/Result";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Operations from "./components/Operations";
import './App.css';

const App = () => {
  return (
    <main className="react-calculator">
      <Result value={0}/>
      <Numbers/>
      <Functions/>
      <Operations/>
    </main>
  );
}

export default App;
