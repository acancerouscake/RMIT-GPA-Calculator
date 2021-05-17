import React, { useState, useEffect } from "react";
import './App.css';
//Importing components
import Form from "./components/Form";
import Results from "./components/Results";
import Popup from "./components/Popup";
import logo from './rmit_logo_blue.svg';
import Lottie from "lottie-react";
import education from "./lotties/education.json";

function App() {
  const [latestInputText, setInputText] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  
  const handleInputText = (submittedInputText) => {
   // console.log('this has been called');
    setInputText(submittedInputText);
    setShowResults(true);
  };

  const closePopupHandler = () => {
    setShowResults(false);  
    setTimedPopup(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);
  
        

  return (
    
    <div className="App">
      <header>
        <Popup timedPopup={timedPopup} setTimedPopup={setTimedPopup} close={closePopupHandler}>
        </Popup>
        <img src={logo} alt="rmit logo"></img>
      </header>

      <div className="lottie-ed"> 
        <Lottie animationData={education}/> 
      </div>
      <h4 className="gpa_calc_title">GPA Calculator</h4>
      <Form
        onSubmit={handleInputText}
      />
      <Results 
      gpaData={latestInputText} 
      show={showResults} close={closePopupHandler}> 
      </Results>
     
        
    </div>
  );
}

export default App;
