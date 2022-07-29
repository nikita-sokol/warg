import React, { useState, useRef, useEffect } from 'react';
import Back from '../../ui/Back.jsx';

const List = () => {

   const [activeList, setActiveList] = useState(false);
   const [list] = useState([
      'World Of Tanks', 'World Of Warplanes', 'World Of Warships'
   ]);
   const [activeItem, setActiveItem] = useState(list[0]);

   const handlerActiveItem = (item) => {
      if (activeItem !== item) {
         setActiveItem(item);
      }
   }

   const activateList = () => {
      setActiveList(true);
   };
   const deactivate = (e) => {
      if (!e.target.closest('.list')) {
         setActiveList(false);
      }
   };
   const listEl = useRef(null);

   useEffect(() => {
      document.addEventListener('click', deactivate);
      return () => {
         document.removeEventListener('click', deactivate);
      }
   }, [])

   return (
      <div className='container'>
         <Back />
         <div className="list-box">
            <ul ref={listEl} className={activeList ? 'list _active' : 'list'} onClick={activateList}>
               {list.map(item => {
                  return <li className={activeItem === item ? 'list-item _active' : 'list-item'} key={item} onClick={() => handlerActiveItem(item)}>{item}</li>;
               })}
               <div className={activeList ? 'indicator _arrow' : 'indicator'}>
                  <div className="indicator-line"></div>
               </div>
            </ul>
         </div>
      </div>
   );
};

export default List;
