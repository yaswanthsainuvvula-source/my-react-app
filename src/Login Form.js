import { useState } from "react";


function LoginForm()
{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");


    const handleSubmit=(e)=>
    {
        e.preventDefault(); //stop refreshing the page

        if(username==="" || password==="")
        {
            alert("Enter valid details");
        }
        else{
            alert(`Welcome, ${username}`);
        }
    }
    return(
        <div style={{margin:"10px 20px"}}>
<h1>Login Form</h1>
<form onSubmit={handleSubmit}>
username: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
<br></br>
password: <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
<br></br>
<button type="submit">Login</button>
</form>
</div>
    );
    
}
export default LoginForm;