import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {


   return (
      <div className='main container'>
         <ol className='nav'>
            <li className='nav-item'><Link className='nav-link' to="/search">search</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/list">list</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/article">article</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/widget">widget</Link></li>
         </ol>
      </div>
   );
};

export default Main;
