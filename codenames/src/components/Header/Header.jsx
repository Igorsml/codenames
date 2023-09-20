import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import classes from "./Header.module.scss";
import Telegram from "../../assets/icons/telegram.svg";
import Github from "../../assets/icons/githubWhite.svg";

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
                <NavLink className={classes.navBarLink} to="/rules">
                  Правила
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={classes.socialIconLink}
                  to="https://github.com/Igorsml/codenames"
                  target="_blank"
                >
                  <img
                    className={classes.socialIcon}
                    src={Github}
                    alt="github"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={classes.socialIconLink}
                  to="https://t.me/Igorsml"
                  target="_blank"
                >
                  <img
                    className={classes.socialIcon}
                    src={Telegram}
                    alt="telegram"
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

<div className={classes.socialIcons}></div>;
