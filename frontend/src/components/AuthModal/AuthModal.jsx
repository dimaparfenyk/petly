import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import Button from "../Button";
import css from "./_AuthModa.module.scss";

const AuthModal = () => {
  const { pathname } = useLocation();
  const [isFirstRegStep, setIsFirstRegStep] = useState(
    () => pathname === "/register"
  );
  const isFirstRegStepOrLogin = isFirstRegStep || pathname === "/login";
  const redirectAuthLink = pathname === "/register" ? "/login" : "/register";
  const titleText = pathname.slice(1);
  const text = pathname === "/register" ? "Already" : "Don't";

  return (
    <div className={css.wrapper}>
      <form className={css.form}>
        <h2 className={css.form_title}>{titleText}</h2>
        <div className={css.box}>
          {isFirstRegStepOrLogin && (
            <>
              <input placeholder="Email" className={css.auth_field} />
              <input placeholder="Password" className={css.auth_field} />
            </>
          )}
          {isFirstRegStep && (
            <input placeholder="Confirm password" className={css.auth_field} />
          )}

          {!isFirstRegStepOrLogin && (
            <>
              <input placeholder="Name" className={css.auth_field} />
              <input placeholder="City, region" className={css.auth_field} />
              <input placeholder="Mobile phone" className={css.auth_field} />
            </>
          )}
        </div>

        {isFirstRegStep && (
          <Button
            type="button"
            text={"Next"}
            isActive={true}
            onClick={() => setIsFirstRegStep(false)}
          />
        )}

        {!isFirstRegStep && pathname === "/register" && (
          <Button type="submit" text={titleText} isActive={true} />
        )}

        {pathname === "/login" && (
          <Button type="submit" text={titleText} isActive={true} />
        )}

        <p className={css.text}>
          {text} have an account?
          <NavLink to={redirectAuthLink} className={css.redirect_link}>
            {redirectAuthLink.slice(1)}
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default AuthModal;
