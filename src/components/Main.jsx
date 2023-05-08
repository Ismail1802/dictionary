import React from "react";
import { useState } from "react";
import Input from "./Input";
import Spinner from "./Spinner";
import Information from "./Information";
import { useEffect } from "react";
import "../styles/main.scss";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("hello");
  const [submitValue, setSubmitValue] = useState("hello");
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);

      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${submitValue}`
      );
      const data = await response.json();
      setInfo(data[0]);
      setLoading(false);
    };

    fetcher();
  }, [submitValue]);

  return (
    <>
      <Input
        setSubmitValue={setSubmitValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {loading ? <Spinner /> : <Information info={info} />}
    </>
  );
};

export default Main;
