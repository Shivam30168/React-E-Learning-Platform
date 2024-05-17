import React, { useEffect, useState } from 'react'

const Search = () => {
    const[searchTerm,setSearchTerm]=useState([]);
    useEffect(()=>{

    },searchTerm)

    const handleSearch=(e)=>{
       setSearchTerm(e.target.value)
       console.log(searchTerm);
    }
  return (
    <div>
      <input type="text" placeholder="Search.." onChange={handleSearch}/>
    </div>
  )
}

export default Search
