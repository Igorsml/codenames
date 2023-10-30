import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";
import { Header } from "../../components/Header/Header";
import { TeamList } from "../../components/TeamList/TeamList";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard/useCopyToClipboard";

export const Home = () => {
  const location = useLocation();
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        {location.pathname === "/" && (
          <>
            <h2>Авторизация</h2>
            <p>Название комнаты: </p>
            <button
              type="submit"
              disabled={disable}
              className={classes.startGameButton}
            >
              Начать игру
            </button>

            <TeamList />
          </>
        )}
        <Outlet />
      </main>
    </div>
  );
};
