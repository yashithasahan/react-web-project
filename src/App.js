import React,{useState} from 'react';
import { Login } from './Login';
import { Register } from './Register';
import Footer from './Components/Fotter';
import Dashboard  from './DashBoard';

function App() {
  const [currentForm,setCurrentForm] = useState('logIn')
  const togleForm = (form)=>{
    setCurrentForm(form);
  }

  return (
    <div className="App">
      {/* {
        currentForm == 'logIn'? <Login onFormChange={togleForm}/>:<Register onFormChange={togleForm} />
      }
      <Footer/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
