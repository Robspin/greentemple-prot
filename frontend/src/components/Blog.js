import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
   return (
      <div className='blog'>
         <div className='stats__header stats__header-top'>
            <div className='stats__header-header'>BLOG</div>
            <p className='stats__header-text'>
               <h3>Posts:</h3>
               <Link className='blog__link' to='/blog/GoldandFiat'>
                  Gold, FIAT and their history
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Blog;
