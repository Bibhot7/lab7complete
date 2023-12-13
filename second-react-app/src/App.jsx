import { useState } from 'react';
import './App.css';
// import BitcoinRates from './Components/BitcoinRates';
import NavBar from './Components/NavBar';
import BitcoinRates from './Components/lab2';
import { EmojiProvider } from './Store/EmojiContext';
import Emoji from './Components/Emoji';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmojiProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/bitcoinrates" element={<BitcoinRates />} />
            <Route path="/emoji" element={<Emoji />} />

            <Route path="/lab2" element={<BitcoinRates />} />
          </Routes>
        </BrowserRouter>
      </EmojiProvider>
    </>
  );
}

export default App;
