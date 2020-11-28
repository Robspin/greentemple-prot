import React, { useState } from 'react';

const Nav = () => {
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
               <h2 className='link'>blog</h2>
               <h2 className='link'>stats</h2>
               <h2 className='link'>login</h2>
            </div>
         </div>
      </div>
   );
};

export default Nav;
