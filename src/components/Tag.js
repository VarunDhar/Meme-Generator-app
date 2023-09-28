import React, { useEffect } from 'react'
import useGif from '../hooks/useGif';
import { Spinner } from './Spinner';

export const Tag = () => {

  const {gif,fetchData,isLoading,input,setInput} = useGif();

  return (
    <div className='memecard'>


      <h2 style={{"color":"white", "fontSize":"30px"}}>{input===""?"Enter tag to get meme of your choice":"Meme on "+input}</h2>

      {!isLoading? (<img src={gif} />) :(<Spinner />)}
      
      <input type="text" value={input} 
        onChange={(event)=>{ setInput(event.target.value); }} 
        className="input" 
        placeholder='Enter a tag'
       />

      <button name="tag" onClick={(event)=>{fetchData(event)}}>Generate</button>


    </div>
  )
}
