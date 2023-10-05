import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";
import { Header } from "../../components/Header/Header";
import { TeamList } from "../../components/TeamList/TeamList";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard/useCopyToClipboard";

export const Home = () => {
  const location = useLocation();

  const [invitationGame, setInvitationGame] = useState();
  const [gameId, setGameId] = useState("");
  const [nickname, setNickname] = useState("");
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  const startGame = (event) => {
    event.preventDefault();

    if (nickname && gameId) {
      localStorage.nickname = nickname;
      setDisable(false);
      navigate("/game/" + gameId);
    }
  };

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        {location.pathname === "/" && (
          <>
            <h2>Авторизация</h2>
            <form className={classes.formAuth} onSubmit={startGame}>
              <div className={classes.fieldGroup}>
                <div>
                  <label htmlFor="nickname">Никнейм</label>
                </div>
                <input
                  className={classes.playerNickname}
                  type="text"
                  name="nickname"
                  id="nickname"
                  required
                  onChange={(event) => setNickname(event.target.value)}
                ></input>
              </div>

              <div
                onChange={(event) =>
                  setInvitationGame(event.target.id === "inGame")
                }
                className={classes.fieldGroup}
              >
                <input
                  type="radio"
                  name="typeEnter"
                  id="gen"
                  value={!invitationGame}
                  defaultChecked={!invitationGame}
                />
                <label htmlFor="gen">Создать игру</label>
                <input
                  type="radio"
                  name="typeEnter"
                  id="inGame"
                  value={invitationGame}
                  defaultChecked={invitationGame}
                ></input>
                <label htmlFor="inGame">Войти в игру по ID</label>
              </div>

              <div className={classes.fieldGroup}>
                {invitationGame ? (
                  <div>
                    <div>
                      <label htmlFor="gameId">Введите ID</label>
                    </div>
                    <input
                      type="text"
                      name="gameId"
                      defaultValue=""
                      id="gameId"
                      onChange={(event) => setGameId(event.target.value)}
                    />
                  </div>
                ) : (
                  <>
                    <button
                      className={classes.buttonGenerationId}
                      onClick={(event) => {
                        event.preventDefault;
                        setGameId(Date.now());
                      }}
                    >
                      Сгенерировать ID игры
                    </button>
                    <div
                      className={classes.gameId}
                      onClick={() => copyToClipboard(`${gameId}`)}
                    >
                      {gameId}
                    </div>
                    {success ? `ID ${gameId} скопирован!` : ""}
                  </>
                )}
              </div>

              <button
                type="submit"
                disabled={disable}
                className={classes.startGameButton}
              >
                Начать игру
              </button>
            </form>

            {/* <TeamList /> */}
          </>
        )}
        <Outlet />
      </main>
    </div>
  );
};
