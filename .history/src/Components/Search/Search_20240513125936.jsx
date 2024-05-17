import React, { useEffect, useState } from 'react'


const Search = ({setSearchTerm}) => {
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
