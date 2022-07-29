import React from 'react';

const CheckboxElement = ({ nameElem, onClick, checkSelectedElem }) => {

   return (
      <label className={checkSelectedElem ? "w-form-elem-item _checked" : "w-form-elem-item"}>
         <input className="w-form-elem-item-check" type="checkbox" checked={checkSelectedElem ? true : false} onClick={onClick} />
         <span className="w-form-elem-item-label" >{nameElem}</span>
      </label>
   );
};

export default CheckboxElement;
