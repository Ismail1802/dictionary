import React from "react";
import "../styles/toggleSwitch.scss";

const ToggleSwitch = ({ active, onChange }) => {
  return (
    <label className="toggle-switch">
      <input checked={active} onChange={onChange} type="checkbox" />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;
