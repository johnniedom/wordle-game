import React from "react";

function modal({ words, answer, value }) {
  const style = words === answer ? "happy" : "sad";
  console.log(value);

  const trials = [...words];
  console.log(trials);
  const text =
    words === answer ? "Congratulations!" : `Sorry, the correct answer is`;
  return (
    <div className={`banner ${style}`}>
      <p>
        <strong>
          &times; {text} {words !== answer && <strong>{answer}</strong>}{" "}
        </strong>
        {style === "happy" && <strong> {value.length} Guesses</strong>}
      </p>
    </div>
  );
}

export default modal;
