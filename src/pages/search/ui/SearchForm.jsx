import React from 'react';

const SearchForm = ({ btnText, placehldrText, mode }) => {


   return (
      <form className={`search-form _${mode}`}>
         <div className="search-form-inner">
            <label className="search-label" htmlFor='search'>
               <input className="search-input" type="search" name="search" placeholder={placehldrText} id='search' />
            </label>
            <button className='search-btn' type='submit'>{btnText}</button>
         </div>
      </form>
   );
};

export default SearchForm;
