import classes from "./Cards.module.scss";
import { Card } from "../Card/Card";
import { GetCards } from "../../services/CardsService/GetCards";

export const CardsList = (props) => {
  return (
    <>
      <p>Игрок 1: {localStorage.nickname}</p>
      <p>Игрок 2: {props.enemyName}</p>
      <ul className={classes.cardsList}>
        {GetCards() &&
          GetCards().map((word, index) => (
            <Card key={word + index} value={word} />
          ))}
      </ul>
    </>
  );
};
