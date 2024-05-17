import React, { useEffect, useState } from 'react'

const Search = () => {
    const[searchTerm,setSearchTerm]=useState([]);
    useEffect(()=>{

    },searchTerm)

    const handleSearch=()=>{
        console.log(e.target.value);
    }
  return (
    <div>
      <input type="text" placeholder="Search.." onChange={handleSearch}/>
    </div>
  )
}

export default Search
