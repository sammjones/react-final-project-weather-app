import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Weather />
        <footer>
          Open-source code on GitHub by{" "}
          <a
            href="https://github.com/sammjones/react-final-project-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Sami Jones
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
