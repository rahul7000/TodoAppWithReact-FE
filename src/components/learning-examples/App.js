import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
     <SecondComponent/>
     <ThirdComponent/>
    </div>
  );
}

  function ThirdComponent(){
    return(
      <div className="thirdComponent">
        ThirdComponent
      </div>
    )
  }


export default App;
