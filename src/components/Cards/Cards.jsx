import { useState, useEffect } from "react";
import classes from "./Cards.module.scss";
import { Card } from "../Card/Card";

export const Cards = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchWords() {
      const DTO = await fetch("http://localhost:3000/cards");
      const words = await DTO.json();
      setWords(words);
    }
    fetchWords();
  }, []);

  return (
    <ul className={classes.cardsList}>
      {words &&
        words.map((word, index) => <Card key={word + index} value={word} />)}
    </ul>
  );
};
