import classes from "./Card.module.scss";

export const Card = (props) => {
  return <li className={classes.cardItem}>{props.value}</li>;
};
