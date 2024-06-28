import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-help";

{
}
function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <>
      {range(5).map((num) => (
        <span className={`cell ${value && result[num].status}`} key={num}>
          {value ? result[num].letter : undefined}
        </span>
      ))}
    </>
  );
}
export default Guess;
