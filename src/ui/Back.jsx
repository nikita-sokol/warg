import React from 'react';
import { Link } from 'react-router-dom';

const Back = () => {
   return (
      <div className="back">
         <Link className="back-link" to="/">назад</Link>
      </div>
   );
};

export default Back;
