import React, { useState } from 'react'
import Search from './Search';
import HomeBody from '../Body/HomeBody/HomeBody';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <div>
        <Search setSearchTerm={setSearchTerm} />
        <HomeBody searchTerm={searchTerm} />
      </div>
    );
  }

export default Main
