import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage("Please enter both weight and height.");
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);

    setBmi(result.toFixed(2));

    if (result < 18.5) {
      setMessage("Underweight");
    } else if (result < 25) {
      setMessage("Normal weight");
    } else if (result < 30) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>BMI Calculator</h1>

        <label>Weight (kg)</label>
        <input
          type="number"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Height (cm)</label>
        <input
          type="number"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;