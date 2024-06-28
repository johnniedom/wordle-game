import React from "react";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="game-wrapper">
        <Game />
      </div>
    </>
  );
}

export default App;
