import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import usePasswordcreator from './usePasswordcreator';
import simpleFunction from './simpleFunction';
function App() {

  const [upstate,setUpstate]=useState(false)
  const [lwstate,setLwstate]=useState(false)
  const [nustate,setNustate]=useState(false)
  const [systate,setSystate]=useState(false)
  const [lengt,setLength]=useState(4);
  const [password,setPassword]=useState('Ft34')

  const passwordCreator=()=>{
     
    let pass='';
    let count=Math.floor(lengt/4);
    if(upstate){
      pass=pass+simpleFunction("ABCDEFGHIJKLMNOPQRST",count)
    }

    if(lwstate){
     pass=pass+ simpleFunction("abcdefghijklmnopqrstuvwxyz",count)
    }

    if(nustate){
      pass=pass+simpleFunction("0123456789",count)
    }

    if(systate){
      
     pass=pass+simpleFunction("`!@#$%^&*()_",count)
    }
    
    if(lengt !== pass.length){
      pass=pass+simpleFunction("ABCDEFGHIJKLMNOPQRST`!@#$%^&*()_0123456789",lengt-pass.length)
    }

    setPassword(pass);
  }
 const copyPassword=()=>{
  navigator.clipboard.writeText(password);
 }
  return (
    <div className="App">
     <div className='container'>
          
          <div className='topdiv'>
            <span >{password}</span>
            <button onClick={copyPassword}>copy</button>
          </div>
          <div className='topdiv2'><span >Length</span> <span >{lengt}</span></div>
          
        <input value={lengt} className='length' type='range' min={4} max={9} onChange={(e)=>{setLength(e.target.value)}} />
        <div className='grid'>
          <div>Include UpperCase<input onChange={()=>{setUpstate(!upstate)}} type='checkbox'/></div>
          <div>Include LowerCase<input onChange={()=>{setLwstate(!lwstate)}}type='checkbox'/></div>
          <div>Include Numbers<input onChange={()=>{setNustate(!nustate)}}type='checkbox'/></div>
          <div>Include Symbols<input onChange={()=>{setSystate(!systate)}} type='checkbox'/></div>
        </div>
        {
          password.length===0 && <div style={{color:'red'}}>Error:please select an option</div>
        }
        <button className='password' onClick={passwordCreator}>Generate Password</button>
        
          <div style={{height:50,width:450}}>h<div style={{width:`${10*password.length}%`,backgroundColor:'green'}} className='strength'  >
            </div></div>
        
     </div>
    </div>
  );
}

export default App;
