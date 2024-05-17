import { useState } from "react";
import MenuList from "./menu-list";
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  function handleToggleChildren(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
      <Nav.Link as={Link} to={item.label}>{item.label}</Nav.Link>
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
