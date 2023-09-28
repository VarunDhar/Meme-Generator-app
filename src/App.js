import './App.css';
import {Random} from './components/Random.js'
import {Tag} from './components/Tag.js'

function App() {
  return (
    <div className='parentClass' >
    <h1>😏 Your favorite spot for memes! 😎</h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;
