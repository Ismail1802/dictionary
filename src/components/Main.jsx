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
  const [error, setError] = useState(false);

  useEffect(() => {
    // setError(false);
    // const fetcher = async () => {
    //   setLoading(true);
    //   const response = await fetch(
    //     `https://api.dictionaryapi.dev/api/v2/entries/en/${submitValue}`
    //   );
    //   if (!response.ok) {
    //     throw new Error("Could not find");
    //   }
    //   const data = await response.json();
    //   if (data.title === "No Definitions Found") {
    //     setLoading(false);
    //     setError(true);
    //   } else {
    //     setInfo(data[0]);
    //     setLoading(false);
    //   }
    // };
    // try {
    //   fetcher();
    // } catch (error) {
    //   alert(error);
    // }
    // fetcher();

    const dataFetcher = async () => {
      setError(false);
      const fetcher = async () => {
        setLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${submitValue}`
        );
        if (!response.ok) {
          throw new Error("Could not find");
        }
        const data = await response.json();
        if (data.title === "No Definitions Found") {
          setLoading(false);
          setError(true);
        } else {
          setInfo(data[0]);
          setLoading(false);
        }
      };
      try {
        await fetcher();
      } catch (e) {
        setError(true);
      }
    };
    dataFetcher();
  }, [submitValue]);

  return (
    <>
      <Input
        setSubmitValue={setSubmitValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {error ? (
        <p className="error">Couldnt find info</p>
      ) : loading ? (
        <Spinner />
      ) : (
        <Information info={info} />
      )}
    </>
  );
};

export default Main;
