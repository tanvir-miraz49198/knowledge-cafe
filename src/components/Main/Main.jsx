import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CartData from '../CartData/CartData';
import Info from '../Info/Info';
import './Main.css';

const Main = () => {
  const [allData, setAllData] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookMark, setBookMark] = useState([]);
 
  const addReadTime = (minute) =>{
    const item = allData.find((mint) => mint.id === minute.id);
    let totalTime = readTime + item.min;
    setReadTime(totalTime);
    
  }
  const addBookMark = (singleData) =>{
    let markedItem = [];
    const exist = bookMark.find((marked) => marked.id === singleData.id);
    if(exist){
        toast.error('You Have Already Bookmarked This Blog', {
          position: toast.POSITION.TOP_CENTER,
        });
      
    }
    else{
      const bookMarkItem = allData.find((item) => item.id === singleData.id);
      markedItem = [...bookMark, bookMarkItem];
      setBookMark(markedItem);
    }
  };

  useEffect(()=>{
    const loadData = async() =>{
      try{
        const jsonData = ('knowledge.json')
        const res = await fetch(jsonData)
        const data = await res.json()
       setAllData(data);
      }catch(error){
        console.log(error)
      }
    };
    loadData();
  },[])

  return (
   <div className='mainContainer'>
    <div className='grid px-2 gap-5 lg:pl-5 my-6 lg:grid-cols-2'>
      {
        allData.map(singleData => <CartData 
        key={singleData.id} 
        singleData = {singleData}
        addBookMark = {addBookMark}
        addReadTime = {addReadTime}
        ></CartData>)}
    </div>
    <div>
      <Info 
      bookMark = {bookMark}
      readTime = {readTime}
      />
    </div>
    </div>
  );
};

export default Main;