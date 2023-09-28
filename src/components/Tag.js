import React, { useEffect } from 'react'
import useGif from '../hooks/useGif';
import { Spinner } from './Spinner';

export const Tag = () => {
//   const [gif,setGif] = useState('');
//   const [isLoading, setLoading] = useState(false);
//   const [input,setInput] = useState("");

// const key = process.env.REACT_APP_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${input}`;



//   async function fetchData(){
//     setLoading(true);
//     const {data} = await axios.get(url);
//     setGif( data.data.images.downsized.url);
//     setLoading(false);
//   }
//   useEffect(()=>{
//     fetchData();  
//   },[]);

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
