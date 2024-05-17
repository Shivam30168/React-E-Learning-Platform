import React from 'react';
import MenuItem from "./menu-item";
import "./style.css";

export default function MenuList({ list = [], onClose }) {
  return (
    <ul className="menu-list-container">
      <button className="btn-forclose" style={{ color: "white" }} onClick={onClose}>
        ✖
      </button>
      {list && list.length
        ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
        : null}
    </ul>
  );
}
