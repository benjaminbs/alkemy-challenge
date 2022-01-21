import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
//import { response } from 'express';

function App() {

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');

	useEffect(()=>{
		Axios.get('http://localhost:3001/api').then((response)=>{
			console.log(response.data)
		})
	}, [])

  return (
    <div className="App">
      <div className="form">
		<input type="text" name="userName" onChange={(e)=>{
			setUserName(e.target.value)
		}}></input>
		<input type="text" name="userEmail" onChange={(e)=>{
			setUserEmail(e.target.value)
		}}></input>

		<button ></button>

	  </div>
    </div>
  );
}

export default App;