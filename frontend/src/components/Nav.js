import React, { useState } from 'react';

const Nav = ({ page, setPage }) => {
   const [spinning, setSpinning] = useState('home flex-container');

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
               <h2 className='link' onClick={() => setPage('stats')}>
                  stats{' '}
                  <div className={page === 'stats' ? 'current' : undefined} />
               </h2>
               <h2 className='link' onClick={() => setPage('login')}>
                  login{' '}
                  <div className={page === 'login' ? 'current' : undefined} />
               </h2>
            </div>
         </div>
      </div>
   );
};

export default Nav;
