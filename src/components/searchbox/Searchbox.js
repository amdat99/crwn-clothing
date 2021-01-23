import React from 'react';


const SearchBox = ({ search }) => {
  console.log('SearchBox')
  return (
    <div >
   
      <input
        aria-label = 'Search Producs'
        className=' search-box '
        type='search'
        placeholder='search products'
        onChange={search}
       
        />
     
    </div>
  );
}

export default SearchBox;