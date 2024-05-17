import React from 'react'

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
