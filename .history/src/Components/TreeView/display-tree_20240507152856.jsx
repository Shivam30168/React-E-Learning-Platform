import React, { useState, useEffect, useRef } from 'react';
import TreeView from '.';
import menus from './data';

export default function DisplayTree() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsDisplayed(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function toggleDisplay() {
    setIsDisplayed(!isDisplayed);
  }

  return (
    <div className='display'>
      <button onClick={toggleDisplay}>{isDisplayed ? '✖' : '☰'}</button>
      <div ref={sidebarRef} className={`sidebar ${isDisplayed ? 'visible' : 'hidden'}`}>
        <TreeView menus={menus} />
      </div>
    </div>
  );
}
