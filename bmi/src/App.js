import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
    }
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
  };

  return (
    <div className="container">
      <h2 className="title">BMI Calculator</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="input"
        />
        
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="input"
        />
        <div className="btns">
          <button type="submit" className="btn submit">Submit</button>
          <button type="button" onClick={handleReset} className="btn reset">Reset</button>
        </div>
      </form>
      {bmi && (
        <p className="result">Your BMI is <strong>{bmi}</strong></p>
      )}
    </div>
  );
}

export default App;
