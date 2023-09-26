import classes from "./Cards.module.scss";
import { wordsList } from "../../wordsList";
import { Card } from "../Card/Card";

const quantityRedTeamCard = 8;
const quantityBlueTeamCard = 8;
const quantityСiviliansCards = 8;
const quantityKillerCards = 1;

const limit = 25;
wordsList.length = limit;

function shuffleArray(array) {
  array.forEach((_, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  });
}
shuffleArray(wordsList);

export const Cards = () => {
  return (
    <ul className={classes.cardsList}>
      {wordsList.map((word, index) => (
        <Card key={word + index} value={word} />
      ))}
    </ul>
  );
};
