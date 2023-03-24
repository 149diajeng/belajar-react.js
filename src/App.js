// Props = properti
import React, {
  useState} from "react";

// import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  const navHeading = "navigation bar"
  const navText = "MEI MEI"

  const clicked = () => {
    return alert("udah dipencet")
  }
  const traceButton = ()=> {
    alert ("hayooow")
     console.log("button di click");
  }

  const paragraf = () => {
    return <i>oke gaes</i>;
  }


  return (
    <div className="App">
      <header>

        <Navbar navText={navText} navHeading={navHeading} />
      <h1>Pertama</h1>
      <Button clicked={clicked}/>
      <button onClick={() => traceButton()}>button di klik ini pake console.log state</button>

      <p>ya pokoknya belajar okeeeee</p>
      <Footer paragraf={paragraf()}/>
      </header>
      
    </div>
  );
}

export default App;
