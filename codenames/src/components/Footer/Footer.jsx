import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";
import Logo from "../../assets/images/logo.jpg";
import Telegram from "../../assets/icons/telegram.svg";
import Github from "../../assets/icons/githubWhite.svg";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <div className={classes.layoutMaxWidth}>
        <footer className={classes.footer}>
          <img className={classes.logo} src={Logo} alt="logo" />
          <p>© 2023 — {currentYear} «CodeNames</p>

          <div className={classes.socialIcons}>
            <NavLink
              className={classes.socialIconLink}
              to="https://github.com/Igorsml/codenames"
              target="_blank"
            >
              <img className={classes.socialIcon} src={Github} alt="github" />
            </NavLink>
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
          </div>
        </footer>
      </div>
    </div>
  );
};
