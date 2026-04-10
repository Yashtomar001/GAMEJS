import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("Choose your move!");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const choices = ["rock", "paper", "scissors"];

  const playGame = (userChoice) => {
    const computerChoice =
      choices[Math.floor(Math.random() * 3)];

    let newResult = "";

    if (userChoice === computerChoice) {
      newResult = "It's a Draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      newResult = "You Win!";
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else {
      newResult = "You Lose!";
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }

    setResult(
      `You chose ${userChoice}, Computer chose ${computerChoice}. ${newResult}`
    );
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      <div className="buttons">
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("paper")}>Paper</button>
        <button onClick={() => playGame("scissors")}>Scissors</button>
      </div>

      <h2>{result}</h2>

      <h3>
        Score: You {score.user} - {score.computer} Computer
      </h3>
    </div>
  );
}

export default App;
