import React from 'react';
import logo from '../../assets/images.jpg'

const Header = () => {
  return (
      <div className="navbar bg-purple-600 shadow-lg lg:px-12">
  <div className="flex-1 ">
    <a className="font-semibold text-white cursor-pointer lg:text-2xl">Knowledge Cafe</a>
  </div>

  <div className='gap-3 lg:text-xl lg:font-semibold  mr-3'>
  <a className='text-white ' href="/home">Home</a>
    <a className='text-white ' href="/blog">Blog</a>
    <a className='text-white ' href="/pages">Pages</a>
    <a className='text-white ' href="/contact">Contact</a>
  </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={logo} />
        </div>
      </label>
    </div>
</div>
  );
};

export default Header;