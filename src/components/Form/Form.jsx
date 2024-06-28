import React from "react";

function Form({ words, setWords, answer }) {
  const [guesses, setGuesses] = React.useState("");
  const newGuess = {
    value: guesses,
    id: new Date().getTime().toString(),
  };

  function handleEvent(event) {
    const letter = event.target.value.toUpperCase();

    setGuesses(letter);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (guesses.length !== 5) {
      alert("input should have a minimum and maximum length of 5");
      return null;
    }
    const nextGuesses = [...words, newGuess];
    console.table(nextGuesses);
    setWords(nextGuesses);
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label className="guess-input">Enter guess</label>
        <input
          type="text"
          name="guess-input"
          value={guesses}
          id="guess-input"
          onChange={handleEvent}
          disabled={
            words.length === 6 ||
            !!words.filter((word) => word.value === answer).length
          }
          required={true}
        />
      </form>
    </>
  );
}

export default Form;
