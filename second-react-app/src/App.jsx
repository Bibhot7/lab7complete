import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './Components/BitcoinRates'
import NavBar from './Components/NavBar'
import lab2 from './Components/lab2'
import { EmojiProvider } from './Components/EmojiContext';
import Emoji from './Components/Emoji'
import { BrowserRouter } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        
         
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bitcoinrates" element={<BitcoinRates />} />
              <Route path="/enoji" element={<Emoji />} />
              <Route path="/emojicontext" element={<EmojiProvider />} />
              <Route path="/lab2" element={<lab2/>} />
             
            </Routes>
         
      </BrowserRouter>
    </>
  );
}


export default App
