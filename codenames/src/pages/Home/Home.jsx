import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import classes from "./Home.module.scss";

export const Home = () => {
  const location = useLocation();
  console.log("location:", location === "/");

  return (
    <div className={classes.layout}>
      <Header />
      {location.pathname === "/" && (
        <NavLink to="/game" className={classes.gameLink}>
          <button className={classes.startGameButton}>Start game</button>
        </NavLink>
      )}
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
