import React,{ useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,  
  Route,
  Routes
} from 'react-router-dom';


function App() {

  const[mode, setMode] = useState('light'); //whther dark mode is enabled or not
  const[alert,setAlert] = useState('','2');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('');
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#0b1338';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Dark mode enabled';
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Light mode enabled';
    }
  }

  return (
    <>    
    <Router>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes> 
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below:" mode={mode}/>}/>    
        <Route path="/about-us" element={<AboutUs showAlert={showAlert} mode={mode}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
