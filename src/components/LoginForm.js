import { useState } from "react";



const LoginForm = () => {

    const [username, setUsername]=useState("");
    const [password, setPassword]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername("");
        setPassword("");
    }


    return (
        <div id="logindiv">
           <h1 id="logintitle">Login</h1>
           <form id="loginform" onSubmit={handleSubmit}>
               <label for="uname">Name:
               <input type="text" id="uname" value={username} required
                minLength={3} maxLength={20} placeholder="Username"
                onChange={(e) => {setUsername(e.target.value);}}></input>
               </label>
               <label for="password">Password:
               <input type="password" id="password"  value={password} required
                minLength={5} maxLength={20} placeholder="Password"
                onChange={(e) => {setPassword(e.target.value);}}></input>
               </label>
               <button type="submit" disabled={!username||!password} id="loginbtn">Login</button>
           </form>
          
        </div>
    );
  };
  
  export default LoginForm;

