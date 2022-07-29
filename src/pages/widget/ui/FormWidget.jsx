import React, { useState, useEffect, useMemo } from 'react';
import SelectedElement from './SelectedElement';
import CheckboxElement from './CheckboxElement';
import InputSearch from './InputSearch';
import InputFilter from './InputFilter';

const FormWidget = ({ listElems, selectedElems, setIsActiveForm, setSelectedElems }) => {
   const [valueSearch, setValueSearch] = useState('');
   const [checkSelectedElems, setCheckSelectedElems] = useState({});
   const [filterMode, setFilterMode] = useState('0');

   const filteredElems = useMemo(() => {
      if (filterMode === '0') {
         return listElems;
      }
      if (filterMode) {
         let leastNum = Number(filterMode);
         return listElems.filter((elem, index) => {
            return index >= leastNum
         });
      }
   }, [filterMode]);

   const searchedElems = useMemo(() => {
      return filteredElems.filter(elem => {
         return elem.toLowerCase().includes(valueSearch.toLowerCase());
      });
   }, [filteredElems, valueSearch]);



   const changeChecked = (elem) => {
      if (checkSelectedElems[elem]) {
         setCheckSelectedElems(obj => {
            const newObj = { ...obj };
            delete newObj[elem];
            newObj.length -= 1;

            return { ...newObj };
         });
      }

      if (!checkSelectedElems[elem] && checkSelectedElems.length < 3) {
         setCheckSelectedElems(obj => {
            const newObj = { ...obj };
            newObj[elem] = true;
            newObj.length += 1;

            return { ...newObj };
         })
      }
   };

   const initCheckSelectedElems = () => {
      let obj = { length: selectedElems.length };
      selectedElems.forEach(item => {
         obj[item] = true;
      });
      setCheckSelectedElems({ ...obj });
   }

   useEffect(() => {
      initCheckSelectedElems();
   }, []);

   const onSave = (e) => {
      e.preventDefault();
      let newSelectedElems = [];
      for (let key in checkSelectedElems) {
         if (key !== 'length') {
            newSelectedElems.push(key);
         }
      }
      setSelectedElems([...newSelectedElems]);
      setIsActiveForm(false);
   }

   const onCancel = (e) => {
      e.preventDefault();
      setCheckSelectedElems({ length: 0 })
      setIsActiveForm(false);
   }

   return (
      <form className="w-form">
         <p className="w-form-text">Диалог выбора элементов</p>
         <button className="w-form-btn-cross" onClick={e => { onCancel(e) }}>X</button>

         <div className="w-filter-box">
            <InputSearch value={valueSearch} onChange={(e) => { setValueSearch(e.target.value) }} />
            <InputFilter
               value={filterMode}
               onChange={(e) => { setFilterMode(e.target.value) }}
               options={[{ value: '10', name: 'Номер >10' },
               { value: '100', name: 'Номер >100' },
               { value: '200', name: 'Номер >200' }]}
               selectedOption={{ value: '0', name: 'Без фильтра' }}
            />
         </div>

         <div className={checkSelectedElems.length >= 3 ? "w-form-elem-list _disabled" : "w-form-elem-list"}>
            {searchedElems.map(elem => {
               return <CheckboxElement key={elem} nameElem={elem} checkSelectedElem={checkSelectedElems[elem]} onClick={() => { changeChecked(elem) }} />;
            })}
         </div>

         <p className="w-form-text">Выбранные элементы на данный момент:</p>
         <div className="w-selected">
            {selectedElems.map(elem => {
               return <SelectedElement nameElem={elem} key={elem} selectedElems={selectedElems} setSelectedElems={setSelectedElems} />;
            })}
         </div>

         <div className="w-form-btns">
            <button className="w-btn w-btn-success" onClick={e => { onSave(e) }}>Сохранить</button>
            <button className="w-btn w-btn-cancel" onClick={e => { onCancel(e) }}>Отмена</button>
         </div>
      </form>
   );
};

export default FormWidget;
