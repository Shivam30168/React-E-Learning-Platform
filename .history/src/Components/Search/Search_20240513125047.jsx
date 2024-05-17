import React, { useEffect, useState } from 'react'
import HomeBody from '../Body/HomeBody/HomeBody';

const Search = () => {
    const[searchTerm,setSearchTerm]=useState('');

    const handleSearch=(e)=>{
        const term=e.target.value;
        setSearchTerm(term)
    }
  return (
    <div>
      <input type="text" placeholder="Search.." onChange={handleSearch}/>
    </div>
  )
}

export default Search
