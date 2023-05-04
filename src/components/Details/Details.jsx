import React from 'react';
import './Details.css';

const Details = ({titles}) => {
  return (
    <div className='details text-white'>
      <p>{titles.title}</p>
    </div>
  );
};

export default Details;