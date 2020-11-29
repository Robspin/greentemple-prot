import React, { useState } from 'react';

const Nav = ({ page, setPage }) => {
   const [spinning, setSpinning] = useState('home flex-container');
   const [menuBtn, setMenuBtn] = useState('menu-btn');

   return (
      <div>
         <div className='navbar'>
            <div
               className={spinning}
               onMouseEnter={() => setSpinning('home flex-container spinning')}
               onMouseLeave={() => setSpinning('home flex-container')}
            >
               <div className='zen-circle'></div>
               <h2 className='title'>GreenTemple</h2>
            </div>
            <div className='flex-container'>
               <h2 className='link' onClick={() => setPage('blog')}>
                  blog{' '}
                  <div className={page === 'blog' ? 'current' : undefined} />
               </h2>
               <h2 className='link' onClick={() => setPage('chart')}>
                  chart{' '}
                  <div className={page === 'chart' ? 'current' : undefined} />
               </h2>
               <h2 className='link' onClick={() => setPage('login')}>
                  login{' '}
                  <div className={page === 'login' ? 'current' : undefined} />
               </h2>
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
            className={menuBtn === 'menu-btn close' ? 'mobile-modal' : 'hide'}
         >
            <h2
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('blog');
               }}
            >
               blog <div className={page === 'blog' ? 'current' : undefined} />
            </h2>
            <h2
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('chart');
               }}
            >
               chart{' '}
               <div className={page === 'chart' ? 'current' : undefined} />
            </h2>
            <h2
               className='link-modal'
               onClick={() => {
                  setMenuBtn('menu-btn');
                  setPage('login');
               }}
            >
               login{' '}
               <div className={page === 'login' ? 'current' : undefined} />
            </h2>
         </div>
      </div>
   );
};

export default Nav;
