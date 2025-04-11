import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '←') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        const evalResult = eval(expression); // for simplicity (be careful in real apps)
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    'C', '←', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', 
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
