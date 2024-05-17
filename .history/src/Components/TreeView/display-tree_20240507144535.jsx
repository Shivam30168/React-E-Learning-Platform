import React, { useState } from 'react';
import TreeView from '.';
import menus from './data';

export default function DisplayTree() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  function toggleDisplay(){
    setIsDisplayed(!isDisplayed)
  }
  return (
    <div className='display'>
      <button onClick={toggleDisplay}>{!isDisplayed?'☰':'✖' }</button>
      {isDisplayed && <TreeView menus={menus} />}
    </div>
  );
}
