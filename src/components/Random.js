import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';
export const Random = () => {

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
