import React from 'react';
import Nav from '../components/Nav';
import leaf1 from '../images/leaves1.png';
import leaf2 from '../images/leaves2.png';
import leaf3 from '../images/leaves3.png';
import leaf4 from '../images/leaves4.png';

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
         <section>
            <div className='set'>
               <div>
                  <img src={leaf1} alt='leaf' />
               </div>
               <div>
                  <img src={leaf2} alt='leaf' />
               </div>
               <div>
                  <img src={leaf3} alt='leaf' />
               </div>
               <div>
                  <img src={leaf4} alt='leaf' />
               </div>
            </div>
            <div className='set set2'>
               <div>
                  <img src={leaf1} alt='leaf' />
               </div>
               <div>
                  <img src={leaf2} alt='leaf' />
               </div>
               <div>
                  <img src={leaf3} alt='leaf' />
               </div>
               <div>
                  <img src={leaf4} alt='leaf' />
               </div>
            </div>
            <div className='set set3'>
               <div>
                  <img src={leaf1} alt='leaf' />
               </div>
               <div>
                  <img src={leaf2} alt='leaf' />
               </div>
               <div>
                  <img src={leaf3} alt='leaf' />
               </div>
               <div>
                  <img src={leaf4} alt='leaf' />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Header;
