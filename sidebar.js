import React, { useState, useEffect}from 'react'
import axios from 'axios'
 import {FaCaretDown, FaCaretUp}  from  'react-icons/fa';

    
 


function  Sidebar () {
    const[ mydata,setMydata] = useState([])


 //using promises


    useEffect(() =>{
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res =>{
            console.log(res)
            setMydata(res.data)
        }
            )
            .catch (err=>{
                console.log(err)
            })
    } , [])
  return (
 <>
<div 
style={{
  width:450,
 marginLeft:0,
paddingLeft:0,
}}>
   <div>
    <h1>Cryptocurrency by market cap</h1>
    {/* using map function */}
    
   {mydata.map((post)=>{
     const {id, image, name, market_cap,price_change_percentage_24h,} = post;
     
     return <div key={id}>
        <div className=' grid grid-cols-3 md: grid-cols-3 font-light p-2 rounded border-gray-300 border-b hover:bg-gray-300 ' >
        <div className='flex  items-center gap-3'>
        <img  className=' text-center w-9' src={image}alt={name}/>

        <div className='w-50%'>
        <p className=' flex text-xl font-bold pr-7'>{ name}</p>
         
         <p className='text-left text-xl font-light'>
             market cap {market_cap}</p> 
    
      
     </div>
      </div>
      <div>
       <div className=' flex pl-20'>
       <span className={`flex text-center gap-4  ${price_change_percentage_24h < 0 ? 'text-red-400':'text-green-400'}`}>
         {price_change_percentage_24h < 0 ? <FaCaretDown/>:  <FaCaretUp/>}
         {price_change_percentage_24h.toFixed(3)}%
   
        
        </span>
        </div> 
        </div>
     </div>

    </div>
        
    })}


    
  </div>
  </div>
   </>
  )
}

export default Sidebar









