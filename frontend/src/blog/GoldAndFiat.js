import React from 'react';
import { Link } from 'react-router-dom';

const GoldAndFiat = () => {
   return (
      <div className='blog'>
         <h2 className='blog__title'>Gold, FIAT and their history</h2>
         <h2 className='blog__title blog__title--secondary'>
            Why FIAT currencies are bound to collapse
         </h2>
         <div alt='fiat' className='blog__title--image' />
         <Link className='blog__return' to='/blog'>
            &#11176;<span className='blog__return--back'>back</span>
         </Link>
      </div>
   );
};

export default GoldAndFiat;
