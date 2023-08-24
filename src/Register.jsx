import React, {useState} from "react"
export const Register =(props)=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

      const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (
         <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input value={firstName} type="firstName" placeholder="" id="firstName" name="firstName"/>
            <label htmlFor="lastName">Last Name</label>
            <input value={lastName} type="lastName" placeholder="" id="lastName" name="lastName"/>
            
            <label htmlFor="email">E-mail</label>
            <input value={email} type="email" placeholder="" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="" id="password" name="password"/>
            <button type="submit" >Register</button>
         
         </form>
         <button onClick={()=> props.onFormChange('logIn')}>Alredy have an account? Login </button>
         </div>
    )
}