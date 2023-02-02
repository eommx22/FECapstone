const LoginForm = () => {
    return (
        <>
           <h1>Login Form</h1>
           <form>
               <label for="firstname"></label>
               <input type="text" id="firstname" placeholder="firstname" required></input>
               <label for="lastname"></label>
               <input type="text" id="lastname" placeholder="lastname" required></input>
               <label for="password"></label>
               <input type="password" id="password" placeholder="password" required></input>
             
               <button type="submit">Submit</button>
           </form>
          
        </>
    );
  };
  
  export default LoginForm;

