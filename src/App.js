import './App.css'
import Navbar from './components/navbar'
import News from './components/news';
import {useState} from "react"

import { BrowserRouter,Route,Routes} from "react-router-dom";


 export default function App () {

  const [mode, setMode]=useState('light'); 
  const [Message, setMessage]=useState(null);
  const [Type, setType]=useState(null); 

  const alerttodo=(message,type)=>{
    
    setMessage(`Succes: ${Message}`);
    setType(Type);

    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  }
  const modechanger=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      alerttodo(`you are in lightmode.`,'primary');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#495057';
      alerttodo('you are in dark mode','warning');
      }
  }
    
    return (
     <>
        <BrowserRouter>
        <Navbar mode={mode} changemode={modechanger} />
        <h1 className={`text-${mode=='dark'?'white':'dark'}`}>Top-headline are here.</h1>
        <Routes>
        <Route exact path="/" element={<News key={1} mode={mode} country='us' pageSize='9' category="general" />}/>
        <Route exact path="/home" element={<News key={2} mode={mode} country="us" pageSize='9' category="general" />} />
        <Route exact path="/technology" element={<News key={3} mode={mode} country="us" pageSize='9' category="technology" />} />
        <Route exact path="/sports" element={<News key={4} mode={mode} country="us" pageSize='9' category="sports" />} />
        <Route exact path="/entertainment" element={<News key={5} mode={mode} country="us" pageSize='9' category="entertainment" />} />
        <Route exact path="/science" element={<News key={6} mode={mode} country="us" pageSize='9' category="science" />} />
        <Route exact path="/health" element={<News key={7} mode={mode} country="us" pageSize='9' category="health" />} />
        </Routes>
        </BrowserRouter>
        
      
      
       
      
      </>
      
    );
  
}
  


 
