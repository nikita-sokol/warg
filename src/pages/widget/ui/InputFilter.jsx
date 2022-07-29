import React from 'react';

const InputFilter = ({ value, onChange, options, selectedOption }) => {
   return (
      <div className="w-filter-box-item">
         <label className="w-filter-box-label" htmlFor="select">Фильтр</label>
         <select className="w-filter-box-input" id="select" value={value} onChange={onChange}>
            <option selected value={selectedOption.value}>{selectedOption.name}</option>
            {options.map(opt=>{
               return <option value={opt.value}>{opt.name}</option>;
            })}
         </select>
      </div>
   );
};

export default InputFilter;
