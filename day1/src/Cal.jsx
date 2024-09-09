import React, { useState } from 'react';

const Cal = () => {
  const [num, setNum] = useState('');  // Initially an empty string for input
  const [result, setResult] = useState(0); // This will hold the result of the calculation

  const handleChange = (e) => {
    setNum(e.target.value); // Keep it as a string for now and convert to number when calculating
  };

  const myFunction1 = () => {
    setResult(prevResult => prevResult + Number(num)); // Add
    setNum(''); // Clear input after calculation
  };

  const myFunction2 = () => {
    setResult(prevResult => prevResult - Number(num)); // Subtract
    setNum(''); // Clear input after calculation
  };

  const myFunction3 = () => {
    if (Number(num) !== 0) {
      setResult(prevResult => prevResult / Number(num)); // Divide
    } else {
      console.log("Cannot divide by zero");
    }
    setNum(''); // Clear input after calculation
  };

  const myFunction4 = () => {
    setResult(prevResult => prevResult * Number(num)); // Multiply
    setNum(''); // Clear input after calculation
  };

  return (
    <div>
      <input 
        type="number" 
        id="num" 
        value={num} 
        onChange={handleChange} 
        placeholder="숫자를 입력하세요." 
      />
      <button onClick={myFunction1}>더하기</button>
      <button onClick={myFunction2}>빼기</button>
      <button onClick={myFunction3}>나누기</button>
      <button onClick={myFunction4}>곱하기</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Cal;