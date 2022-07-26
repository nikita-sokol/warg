import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './ui/SearchForm'

const Search = () => {
   return (
      <div className='page container'>
         <div className="back"><Link to="/">На главную</Link></div>
         <SearchForm btnText={'НАЙТИ'} placehldrText={'поиск'}/>
         <SearchForm btnText={'GO'} placehldrText={'search'}/>
      </div>
   );
};

export default Search;
