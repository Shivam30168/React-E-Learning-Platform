import React, { useState } from 'react';
import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="tree-view-container">
      {isVisible && <MenuList list={menus} onClose={toggleVisibility} />}
    </div>
  );
}
