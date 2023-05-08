import React from "react";
import "../styles/input.scss";
const Input = ({ inputValue, setInputValue, setSubmitValue }) => {
  const inputHandler = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue);
  };
  return (
    <form onSubmit={(e) => inputHandler(e)}>
      <label htmlFor="word">
        <input
          id="word"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for any word..."
          type="text"
        />
      </label>
    </form>
  );
};

export default Input;
