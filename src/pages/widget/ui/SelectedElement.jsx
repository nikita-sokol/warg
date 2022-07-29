import React from 'react';

const SelectedElement = ({nameElem, selectedElems, setSelectedElems}) => {
   const removeElem = (e) => {
      e.preventDefault();
      const newArr = selectedElems.filter(elem=>{
         return elem !== nameElem;
      });

      setSelectedElems([...newArr])
   }
   return (
      <div className="select-el">
         <div className="select-el__text">{nameElem}</div>
         <button className="select-el__cross" onClick={(e) => {removeElem(e)}}>X</button>
      </div>
   );
};

export default SelectedElement;
