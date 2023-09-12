import React from "react";
import { wordsList } from "../../wordsList";
import { Card } from "../Card/Card";
import classes from "./Cards.module.scss";

const limit = 25;
wordsList.length = limit;

export const Cards = () => {
  return (
    <ul className={classes.cardsList}>
      {wordsList.map((word, index) => (
        <Card key={index} value={word} />
      ))}
    </ul>
  );
};
