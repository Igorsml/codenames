import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Cards } from "../../components/Cards/Cards";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Cards />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
