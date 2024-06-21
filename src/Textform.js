import React,{useState} from 'react';
import './App.js'

export default function Textform(props) {
    
    const[Text, setText]=useState("type something here")
 const clicked= ()=>{
 let NewText=Text.toUpperCase();
  setText(NewText)
  props.showalert("uppercase was enabled","success")
 }
  const lowerclicked= ()=>{
    let NewText=Text.toLowerCase();
     setText(NewText)
     props.showalert("text to lowercase","Success")
    }

     const clearclicked= ()=>{
      let NewText="";
       setText(NewText)
       props.showalert("text cleared","Success")
  
 }
 const copytext=()=>{
  var text=document.getElementById("exampleFormControlTextarea1")
  text.Select();
  navigator.clipboard.writeText(text.value);

 }
 const space=()=>{
  let newtext=Text.split(/[ ]+/)
  setText(newtext.join(" "))
  props.showalert("space cleared","Success")
 }
 const changing=(event)=>{
  setText(event.target.value)
  console.log("change context")
 }
  return (
   <div >
 
     <div className="m-12 ml-10 mb-3">
         <h1 className=''style={{color: props.mode==='dark'?'white':'grey'}}>{props.title}</h1>

        <label htmlFor="exampleFormControlTextarea1"  className="form-label"></label>
        <textarea className="form-control " value={Text} onChange={changing} style={{backgroundColor:props.mode==='grey'?'grey':'grey', Color:props.mode==='grey'?'white':'white',}}id="exampleFormControlTextarea1"  rows="10"></textarea>
             <button className="btn btn-primary mx-2 my-2" onClick={clicked} >convert to upper cases</button>
             <button className="btn btn-danger mx-2 my-2" onClick={lowerclicked} >convert to lower cases</button>
             <button className="btn btn-primary mx-2 my-2" onClick={clearclicked} >clear text</button>
             <button className="btn btn-primary mx-2 my-2" onClick={space} >removing space</button>
      </div>
      <div className='container'style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>this  reads words</h1>
   
        <p> {Text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words,{Text.length} charecters</p>
        <h1>  showing preview</h1>
        <p>{Text.length>0?Text:"write some thing it will show"} </p>
       

      </div>

   </div>
  );
}
