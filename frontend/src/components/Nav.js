import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
   const [page, setPage] = useState('stats');
   const [spinning, setSpinning] = useState('home flex-container');
   const [menuBtn, setMenuBtn] = useState('menu-btn');

   const location = useLocation();

   useEffect(() => setPage(location.pathname.split('/')[1]), [location]);

   return (
      <div className='navbar'>
         <div className='navbar__box'>
            <div
               className={spinning}
               onMouseEnter={() => setSpinning('home flex-container spinning')}
               onMouseLeave={() => setSpinning('home flex-container')}
            >
               <div className='zen-circle'></div>
               <div className='test'>
                  <h2 className='title'>GreenTemple</h2>
                  <div className='paint-bg'></div>
               </div>
            </div>
            <div className='flex-container'>
               <Link className='link' onClick={() => setPage('')} to='/'>
                  stats <div className={page === '' ? 'current' : undefined} />
               </Link>
               <Link
                  className='link'
                  onClick={() => setPage('test')}
                  to='/test'
               >
                  test{' '}
                  <div className={page === 'test' ? 'current' : undefined} />
               </Link>
               <Link
                  className='link'
                  onClick={() => setPage('chart')}
                  to='/chart'
               >
                  chart{' '}
                  <div className={page === 'chart' ? 'current' : undefined} />
               </Link>
               <Link
                  className='link'
                  onClick={() => setPage('blog')}
                  to='/blog'
               >
                  blog{' '}
                  <div className={page === 'blog' ? 'current' : undefined} />
               </Link>
            </div>

            <div
               className={menuBtn}
               onClick={() =>
                  menuBtn === 'menu-btn'
                     ? setMenuBtn('menu-btn close')
                     : setMenuBtn('menu-btn')
               }
            >
               <div className='btn-line'></div>
               <div className='btn-line'></div>
               <div className='btn-line'></div>
            </div>
         </div>
         <div
            className={
               menuBtn === 'menu-btn close'
                  ? 'mobile-modal show'
                  : 'mobile-modal'
            }
         >
            <Link
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('');
               }}
               to='/'
            >
               stats <div className={page === '' ? 'current' : undefined} />
            </Link>
            <Link
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('test');
               }}
               to='/test'
            >
               test <div className={page === 'test' ? 'current' : undefined} />
            </Link>
            <Link
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('chart');
               }}
               to='/chart'
            >
               chart{' '}
               <div className={page === 'chart' ? 'current' : undefined} />
            </Link>
            <Link
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('blog');
               }}
               to='/blog'
            >
               blog <div className={page === 'blog' ? 'current' : undefined} />
            </Link>
         </div>
      </div>
   );
};

export default Nav;
