import { useState } from 'react';
import calculator from './calculator';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }
    
    const res = calculator(a, b, operation);
    setResult(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App</h1>
        
        <div className="calculator">
          <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="input-field"
          />
          
          <div className="buttons">
            <button onClick={() => handleOperation('add')} className="btn">Addition (+)</button>
            <button onClick={() => handleOperation('subtract')} className="btn">Subtraction (-)</button>
            <button onClick={() => handleOperation('multiply')} className="btn">Multiplication (×)</button>
            <button onClick={() => handleOperation('divide')} className="btn">Division (÷)</button>
          </div>
          
          <div className="result">
            <h2>Result: {result}</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
