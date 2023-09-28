import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

function useGif(){
    
  const [gif,setGif] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [input,setInput] = useState("");

    const key = process.env.REACT_APP_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;



  async function fetchData(event){
    setLoading(true);
    // console.log(event)
    const {data} = await axios.get(event !== null? url+`&tag=${input}`:url);
    setGif( data.data.images.downsized.url);
    setLoading(false);
  }


  useEffect(()=>{
    fetchData();  
  },[]);

  return {fetchData,gif,isLoading,input,setInput};
}
export default useGif;
