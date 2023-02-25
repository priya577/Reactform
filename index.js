import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Func5(){
  return(
    <>
    <form>
      <label className='name'>Name:</label>
      <br></br>
      <input type={Text}></input>
      <br></br>
      <label className='age'>Age:</label>
      <br></br>
      <input type={Text}></input>
      <br></br>
      <label className='email'>Email:</label>
      <br></br>
      <input type={Text}></input>
      <br></br>
      <label className='pass'>Password:</label>
      <br></br>
      <input type={Text}></input>
      <br></br>
      <label className='conp'>Confirm password:</label>
      <br></br>
      <input type={Text}></input>
      <br></br>
      <button type='submit'>submit</button>
      </form></>
  )
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Func5/></>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
