import React, {useState} from "react"


export const Login =(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Wel Come!</h1>
            <label htmlFor="email">E-mail</label>
            <input value={email} type="email" placeholder="Enter your email" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="Enter your password" id="password" name="password"/>
            <button type="submit" >Log In</button>
         
         </form>
         <button onClick={()=> props.onFormChange('register')} >Don`t have an account? Register </button>
         </div>
         
    )
}