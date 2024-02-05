import { useState } from "react";

import RecipePage from "./Components/RecipePage/RecipePage";

import "./App.css";
import "./normalize.css";

function App() {
  return (
    <>
      <RecipePage />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Pio678</a>.
      </div>
    </>
  );
}

export default App;
