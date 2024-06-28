import React from "react";
import Guess from "../Guess/Guess";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_GUESSES_ALLOWED as Num,
} from "../../constants";
import { range } from "../../utils";
import Modal from "../Modal";

function Body({ words, answer }) {
  const { ...value } = words;
  // console.log(value, words);
  // console.table(words.id);
  const show = words.length === NUM_OF_GUESSES_ALLOWED;
  return (
    <div className="guess-results">
      {range(Num).map((num) => {
        return (
          <React.Fragment key={num}>
            <p className="guess">
              <Guess value={words[num]?.value} answer={answer} />
            </p>
            {(words[num]?.value === answer || show) && (
              <Modal words={words[num]?.value} answer={answer} value={words} />
            )}
          </React.Fragment>
        );
        X;
      })}{" "}
    </div>
  );
}

export default Body;
