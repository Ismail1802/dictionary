import React from "react";
import "../styles/input.scss";
import { iconsSearch } from "../assets";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Input = ({ inputValue, setInputValue, setSubmitValue }) => {
  const inputHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Input field is empty! 😡", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setSubmitValue(inputValue);
    }
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
        <img
          onClick={inputHandler}
          className="iconssearch"
          src={iconsSearch}
          alt="iconsSearch"
        />
      </label>
      <ToastContainer />
    </form>
  );
};

export default Input;
