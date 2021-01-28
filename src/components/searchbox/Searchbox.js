import React from 'react';
import UseFetch from '../use-fetch'


const SearchBox = ({ search }) => {
  

     
        
  
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