import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm,setCurrentForm] = useState('logIn')
  const togleForm = (form)=>{
    setCurrentForm(form);
  }

  return (
    <div className="App">
      {
        currentForm == 'logIn'? <Login onFormChange={togleForm}/>:<Register onFormChange={togleForm} />
      }
      
    </div>
  );
}

export default App;
