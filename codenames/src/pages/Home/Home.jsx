import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { TeamList } from "../../components/TeamList/TeamList";
import classes from "./Home.module.scss";

export const Home = () => {
  const location = useLocation();

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        {location.pathname === "/" && (
          <>
            <NavLink to="/game" className={classes.gameLink}>
              <button className={classes.startGameButton}>Start game</button>
            </NavLink>
            <TeamList />
          </>
        )}
        <Outlet />
      </main>
    </div>
  );
};
