import React from 'react';

const InputSearch = ({value, onChange}) => {
   return (
      <div className="w-filter-box-item">
         <label className="w-filter-box-label" htmlFor="search">Поиск</label>
         <input className="w-filter-box-input" type='search' id="search" value={value} onChange={onChange} />
      </div>
   );
};

export default InputSearch;
