"#"

import Alert from './Alert';
import './App.css';
import Textform from './Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{ useState } from 'react'
import Body from './components/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App(props) {
  const[mode,setmode]=useState('light')
  const [alert, setalert] = useState(null);
const [modeone, setmodeone] = useState('light');
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout (()=>{
      setalert(null)
    },1500)
  }
 
  
  const togglemode=()=>{
   if(mode==="light"){
    setmode("dark")
    document.body.style.backgroundColor="grey"
    showalert("darkmode is enabled","Success")
    document.title='darkmode-on'
   setInterval(() => {
    document.title='darkmode-on'
   }, 1000);
   setInterval(() => {
    document.title='darkmode-off'
   }, 1500);
   }
   else{
setmode("light")
document.body.style.backgroundColor="white"
showalert("lightmode is enabled","Success")
document.title='darkmode-off'
setTimeout(() => {
 
}, 2000);
  }
 
  }
  return (
    <Router>
   <>

  <Navbar sigma="typing" mode={mode} modeone={modeone}  togglemode={togglemode}/>
  <Alert alert={alert} />
  <div className='container mb-3'>
  <Switch>
  
       <Route path="/about">
          <About/>
      </Route>
      <Route path="/body">
          <Body/>
      </Route>
         
     <Route path="/">
          <Textform showalert={showalert} title="enter the below text" mode={mode}/>
      </Route>
        </Switch>
 
 </div>
 </>
 </Router>

  );
}


export default App;
