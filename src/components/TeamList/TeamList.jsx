import React from "react";
import classes from "./TeamList.module.scss";

const quantityTeamCard = 8;
const quantityСiviliansCards = 8;
const quantityKillerCards = 1;

export const TeamList = () => {
  return (
    <div className={classes.teamList}>
      <div className={classes.redTeam}>
        <h2 className={classes.teamListTitle}>Команда красных</h2>
        <button className={classes.joinRedTeam}>Стать капитаном</button>
        <div className={classes.joinMaster}>Капитан красных</div>
        <hr />
        <button className={classes.joinRedTeam}>Стать красным</button>
        <ul>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
          <li>Red Player</li>
        </ul>
      </div>
      <div className={classes.blueTeam}>
        <h2 className={classes.teamListTitle}>Команда синих</h2>
        <button className={classes.joinRedTeam}>Стать капитаном</button>
        <div className={classes.joinMaster}>Капитан синих</div>
        <hr />
        <button className={classes.joinBlueTeam}>Стать синим</button>
        <ul>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
          <li>Blue Player</li>
        </ul>
      </div>
    </div>
  );
};
