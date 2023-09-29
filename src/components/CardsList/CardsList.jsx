import { useState, useEffect } from "react";
import classes from "./Cards.module.scss";
import { Card } from "../Card/Card";
import axios from "axios";

export const CardsList = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cards").then((response) => {
      setWords(response.data);
    });
  }, []);

  return (
    <ul className={classes.cardsList}>
      {words &&
        words.map((word, index) => <Card key={word + index} value={word} />)}
    </ul>
  );
};
