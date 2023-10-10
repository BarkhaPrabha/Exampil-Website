import './App.css';
import React from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Quiz from './Components/Quiz';
import Download from './Components/Download';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/download" element={<Download/>} />
    </Routes>
    </BrowserRouter>  
   
  );
}
export default App;