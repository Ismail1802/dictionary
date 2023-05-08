import React, { useEffect } from "react";
import { useState } from "react";
import { logo, iconsMoon, iconsArrowDown } from "../assets";
import "../styles/header.scss";
import ToggleSwitch from "./Toggle";

const Header = ({ mode, setMode, fontText, setFontText }) => {
  const [open, setOpen] = useState(false);

  const onChange = () => {
    setMode(!mode);
  };
  const onFontChange = (e) => {
    setFontText(e.target.innerText);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header__content">
        <div onClick={() => setOpen(!open)} className="header__select">
          <p>{fontText}</p>
          <img src={iconsArrowDown} alt="" />
          {open && (
            <div className="header__dropdown">
              <p onClick={onFontChange}>Sans Serif</p>
              <p onClick={onFontChange} id="mono">
                Mono
              </p>
              <p onClick={onFontChange} id="serif">
                Serif
              </p>
            </div>
          )}
        </div>
        <div className="header__line" />
        <div className="header__switch">
          <ToggleSwitch checked={mode} onChange={onChange} />
          <img src={iconsMoon} alt="iconsMoon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
