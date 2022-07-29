import React from 'react';
import Back from '../../ui/Back.jsx';
import SearchForm from './ui/SearchForm'

const Search = () => {
   return (
      <div className='container'>
         <Back />
         <p className='explanation'>Сверстал 3-мя способами: при помощи Grid, Flex и Table.</p>
         <SearchForm mode={'flex'} btnText={'НАЙТИ'} placehldrText={'поиск'} />
         <SearchForm mode={'grid'} btnText={'GO'} placehldrText={'search'} />
         <SearchForm mode={'table'} btnText={'FIND'} placehldrText={'search'} />
      </div>
   );
};

export default Search;
