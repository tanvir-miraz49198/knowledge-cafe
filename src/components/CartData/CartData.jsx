import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './CartData.css';


const CartData = (props) => {
  const {author_name, date, hashtag1, hashtag2, img, min, profile_img, title} = props.singleData;
 const addBookMark = props.addBookMark;
 const addReadTime = props.addReadTime;
  return (
<div className="card w-full bg-gradient-to-r from-purple-500 to-purple-300">
<figure className='p-3'><img className='w-full rounded' src={img} alt="img" /></figure>
  <div className="card-body">
   <div className='flex justify-between'>
   <div className='flex'>
   <img className='w-12 rounded-full' src={profile_img} alt="" />
   <div className='pl-3'>
   <h5 className='text-xl font-semibold text-white'>{author_name}</h5>
   <p className='text-white'>{date}</p>
   </div>
    </div>
<div className="flex items-center gap-2">
 <p>{min} min read</p>
 <button className='hover:text-fuchsia-800' onClick={()=> addBookMark(props.singleData)}> <FontAwesomeIcon icon={faBookmark}/></button>
</div>
   </div>
   <h1 className='text-3xl text-white font-semibold'>{title}</h1>
  <div className='flex text-white gap-2 text-xl'>
  <span>{hashtag1}</span>
   <span>{hashtag2}</span>
  </div>
<div className='justify-start'>
<button onClick={()=> addReadTime(props.singleData)} className='my-3 tex-2xl text-white hover:text-fuchsia-300 font-bold cursor-pointer btn-mark'>Mark as read</button>
</div>
  </div>
</div>
 
  );
};

export default CartData;