import React from 'react';
import Nav from '../components/Nav';

const Header = ({ page, setPage }) => {
   return (
      <div className='header'>
         <Nav setPage={setPage} page={page} />
         <div className='header__text-box'>
            <h2 className='header__title'>CREATE WEALTH</h2>
            <h3 className='header__title-secondary'>
               THROUGH PRINCIPLES AND DISCIPLINE
            </h3>
         </div>
      </div>
   );
};

export default Header;
