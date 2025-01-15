import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult("Cannot divide by zero");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ margin: '10px 0', padding: '8px', width: '100%' }}
      />

      <div style={{ margin: '10px 0' }}>
        <button onClick={handleAddition} style={{ margin: '5px', padding: '10px' }}>+</button>
        <button onClick={handleSubtraction} style={{ margin: '5px', padding: '10px' }}>-</button>
        <button onClick={handleMultiplication} style={{ margin: '5px', padding: '10px' }}>*</button>
        <button onClick={handleDivision} style={{ margin: '5px', padding: '10px' }}>/</button>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
        <strong>Result: </strong>{result !== null ? result : 'N/A'}
      </div>
    </div>
  );
};

export default Calculator;
