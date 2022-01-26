
import { useState } from 'react';
import './App.scss';

function App() {
  const [number1,setNumber1] = useState(0);
  const [number2,setNumber2] = useState(0);
  const [operation,setOperation] = useState('sumar');
  const [result,setResult] = useState(0);
  const calculate = operation => {
    let resultCalculated = 0;
    if(operation === 'sumar'){
      resultCalculated = Number(number1) + Number(number2)
    }
    setResult(resultCalculated)
    setNumber1(0)
    setNumber2(0)
  }
  return (
    <div className="container">
      <select value={operation} onChange={(value) => setOperation(value)}>
        <option value='sumar'>Sumar</option>
        <option>Restar</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>
      <label>
        Number 1
        <input type='number' value={number1} onChange={(e) => setNumber1(e.target.value)}></input>
      </label>
      <label>
        Number 2
        <input type='number' value={number2} onChange={(e) => setNumber2(e.target.value)}></input>
      </label>
      <button onClick={() => calculate(operation)}>Calcular</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
