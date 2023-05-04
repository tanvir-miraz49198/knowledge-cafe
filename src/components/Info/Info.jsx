import React from 'react';
import Details from '../Details/Details';
import './Info.css'
const Info = ({bookMark, readTime}) => {
  return (
    <div className='text-xl my-6 pl-2'>
      <div className='mint text-center'>
        <h4 className='text-violet-700 font-semibold p-3'>Spent time on read : {readTime} min</h4>
      </div>
      <div className='my-6 text-center bg-slate-300'>
      <div className='bookmark'>
      <h3 className='text-xl text-violet-700 font-semibold p-3'>Bookmarked Blogs : {bookMark.length} </h3>
      <div className='border p-2'>
    {bookMark.map(titles => <Details
     key={titles.id} 
     titles = {titles}
    />)}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Info;