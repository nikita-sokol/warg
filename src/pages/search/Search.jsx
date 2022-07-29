import React from 'react';
import Back from '../../ui/Back.jsx';
import SearchForm from './ui/SearchForm'

const Search = () => {
   return (
      <div className='container'>
         <Back />
         <SearchForm btnText={'НАЙТИ'} placehldrText={'поиск'} />
         <SearchForm btnText={'GO'} placehldrText={'search'} />
      </div>
   );
};

export default Search;
