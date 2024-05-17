import { useState } from "react";
import MenuList from "./menu-list";


export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  function handleToggleChildren(getCurrentLabel) {
    event.preventDefault();
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <a href={item.label}>{item.label}</a>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? "▼" : "▶"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayChildren[item.label] > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
