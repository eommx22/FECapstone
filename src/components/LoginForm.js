const LoginForm = () => {
    return (
        <div id="logindiv">
           <h1 id="logintitle">Login</h1>
           <form id="loginform">
               <label for="uname">Name:
               <input type="text" id="uname" placeholder="Username" required></input>
               </label>
               <label for="password">Password:
               <input type="password" id="password" placeholder="Password" required></input>
               </label>
               <button type="submit" id="loginbtn">Login</button>
           </form>
          
        </div>
    );
  };
  
  export default LoginForm;

