import { NavLink, useLocation } from "react-router";

import css from "./_AuthRedirectLink.module.scss";

const AuthRedirectLink = ({ text = [] }) => {
  const [title, linkTitle] = text;
  const { pathname } = useLocation();
  const redirectTo = pathname === "/register" ? "/login" : "/register";

  return (
    <p className={css.text}>
      {title}
      <NavLink to={redirectTo} className={css.redirect_link}>
        {linkTitle}
      </NavLink>
    </p>
  );
};

export default AuthRedirectLink;
