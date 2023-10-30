import classes from "./TeamList.module.scss";
import { RoomService } from "../../services/CardsService/room.service";

export const TeamList = () => {
  return (
    <>
      <p>Количество игроков в сеансе: {"" || 0}/8</p>
      <div className={classes.teamList}>
        <div className={classes.teamBody}>
          <h2 className={`${classes.teamListTitle} ${classes.red}`}>
            Красные {"" || 0}/4
          </h2>

          <div className={classes.joinMaster}>
            <p>Капитан красных:</p>
            <button
              className={classes.joinRedTeam}
              onClick={RoomService.joinRoom()}
            >
              Окапитаниться
            </button>
          </div>
          <hr />
          <button
            className={classes.joinRedTeam}
            onClick={RoomService.joinRoom()}
          >
            Стать красным
          </button>
          <ul>
            <li>Red Player</li>
          </ul>
        </div>
        <div className={classes.teamBody}>
          <h2 className={`${classes.teamListTitle} ${classes.blue}`}>
            Синие {"" || 0}/4
          </h2>
          <div className={classes.joinMaster}>
            <p>Капитан синих:</p>
            <button
              className={classes.joinBlueTeam}
              onClick={RoomService.joinRoom()}
            >
              Окапитаниться
            </button>
          </div>
          <hr />
          <button
            className={classes.joinBlueTeam}
            onClick={RoomService.joinRoom()}
          >
            Стать синим
          </button>
          <ul>
            <li>Blue Player</li>
          </ul>
        </div>
      </div>
    </>
  );
};
