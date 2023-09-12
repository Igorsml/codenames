import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.layoutMaxWidth}>
        <div className={classes.headerLayout}>
          <NavLink to="/" className={classes.logoLayout}>
            <img className={classes.logo} src={Logo} alt="logo" />
          </NavLink>
          <nav className={classes.nav}>
            <ul className={classes.navBar}>
              <li>
                <NavLink to="/rules">Правила</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
