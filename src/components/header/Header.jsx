import React, { useState } from "react";
import darkIcon from "../../images/icon-moon.svg";
import lightIcon from "../../images/icon-sun.svg";
import darkBg from "../../images/bg-desktop-dark.jpg";
import lightBg from "../../images/bg-desktop-light.jpg";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState(false);
  return (
    <header
      className="todo__header"
      style={{
        background: `url(${lightBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "40vh",
      }}
    >
      <section className="header__content">
        <div className="header__top">
          <h1>TODO</h1>
          <button className="theme__switch" title="theme">
            <img src={darkIcon} alt="dark" />
          </button>
        </div>
        <form className="header__down">
          <label htmlFor="todo"></label>
          <input type="text" name="todo" placeholder="Add Todo..." />
        </form>
      </section>
    </header>
  );
};

export default Header;
