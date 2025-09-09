import { useState } from "react";



function Count()
{

    const[count,setCount]=useState(0);


    const inCount=()=>
    {
        setCount(count+1);
    };
    const dCount=()=>
    {
       setCount(count-1);
    };




    return(

<>
<p>Count:{count}</p>
<button onClick={inCount}>Increment</button> &nbsp; &nbsp;
<button onClick={dCount}>Decrement</button>
</>

    );
}
export default Count;