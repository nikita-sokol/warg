import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectedElement from './ui/SelectedElement'
import FormWidget from './ui/FormWidget'

const createElementList = (amount) => {
   const arrayEl = [];
   for (let i = 0; i<amount; i++) {
      arrayEl[i] = `Элемент ${i+1}`;
   }
   return [...arrayEl];
}

const Widget = () => {
   const [listElems] = useState(createElementList(300));
   const [selectedElems, setSelectedElems] = useState([]);
   const [isActiveForm, setIsActiveForm] = useState(false);


   const changeActiveForm = (e) => {
      e.preventDefault();
      setIsActiveForm(!isActiveForm);
   };

   return (
      <div className='container'>
         <div className="back"><Link to="/">На главную</Link></div>

         <div className="widget">
            <h2 className="w-header">Выбор элементов</h2>
            <p className="w-text">На данный момент у вас выбрано 2 элемента:</p>
            <div className="w-selected">
               {selectedElems.map(elem => {
                  return <SelectedElement nameElem={elem} key={elem} selectedElems={selectedElems} setSelectedElems={setSelectedElems}/>;
               })}
            </div>
            <button className="w-btn w-btn-success w-btn-change-select" onClick={(e)=>{changeActiveForm(e)}}>Изменить мой выбор</button>

            {isActiveForm && <FormWidget listElems={listElems} selectedElems={selectedElems} setIsActiveForm={setIsActiveForm} setSelectedElems={setSelectedElems}/>}
         </div>
      </div>
   );
};

export default Widget;
