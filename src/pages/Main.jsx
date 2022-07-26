import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {


   return (
      <div className='main container'>
         <h1>Задания</h1>
         <ul>
            <li><Link to="/search">search</Link></li>
            <li><Link to="/list">list</Link></li>
            <li><Link to="/article">article</Link></li>
            <li><Link to="/widget">widget</Link></li>
         </ul>
      </div>
   );
};

export default Main;
