import React, { useState } from 'react'
import Search from './Search';
import HomeBody from '../Body/HomeBody/HomeBody';
import Header from '../Header/header';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <div>
        <Header/>
        <Search setSearchTerm={setSearchTerm} />
      </div>
    );
  }

export default Main
