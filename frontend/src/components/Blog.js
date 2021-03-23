import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
   return (
      <div className='blog'>
         <div className='stats__header stats__header-top'>
            <div className='stats__header-header'>BLOG</div>
            <div className='stats__header-text'>
               <h3>Posts:</h3>
               <Link className='blog__link' to='/blog/GoldandFiat'>
                  Gold, FIAT and their history
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Blog;
