// import React from "react";
import Button from "../Button";
import css from "./_AuthModa.module.scss";

const AuthModal = ({ title, children }) => {
  return (
    <div className={css.wrapper}>
      <form className={css.form}>
        <h2>{title}</h2>
        <input placeholder="Email" className={css.filter} />
        <input placeholder="Password" className={css.filter} />
        <Button type="submit" text={"Login"} isActive={true} />
        {children}
      </form>
    </div>
  );
};

export default AuthModal;
