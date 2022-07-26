import React from 'react';

const SearchForm = ({ btnText, placehldrText }) => {


   return (
      <form className="search-form">
         <label className="search-label" htmlFor='search'>
            <input className="search-input" type="search" name="search" placeholder={placehldrText} id='search' />
         </label>
         <button className='search-btn' type='submit'>{btnText}</button>
      </form>
   );
};

export default SearchForm;
