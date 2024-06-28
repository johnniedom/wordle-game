import React, { useState } from "react"; // Import useState from React library

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import Body from "../Body/Body";
import Guess from "../Guess/Guess";
// Pick a random word on every page load.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log(answer);

function Game() {
  const [words, setWords] = useState([]);
  console.log(words.filter((word) => word === answer));

  return (
    <>
      <div className="game-wrapper">
        <Body words={words} answer={answer} />
      </div>
      <Form words={words} setWords={setWords} answer={answer} />
    </>
  );
}

export default Game;
