import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';
export const Random = () => {


//   const [gif,setGif] = useState('');
//   const [isLoading, setLoading] = useState(false);


// const key = process.env.REACT_APP_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;



//   async function fetchData(){
//     setLoading(true);
//     const {data} = await axios.get(url);
//     setGif( data.data.images.downsized.url);
//     setLoading(false);
//   }


//   useEffect(()=>{
//     fetchData();  
//   },[]);

  const {gif,fetchData,isLoading} = useGif();

  return (
    <div className='memecard'>
      <h2 style={{"color":"white", "fontSize":"30px"}}>Random Meme</h2>
      {!isLoading? (<img src={gif} />) :(<Spinner />)}
      <br></br>
      <button onClick={(event)=>{fetchData()}}>Generate</button>
    </div>
  )
}
