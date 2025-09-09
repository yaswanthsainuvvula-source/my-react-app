import { useEffect, useState } from "react";

function HooksEffect()
{
    const[count,setCount]=useState(0);

    useEffect(()=>
    {
        setTimeout(()=>
        {
            setCount(()=>count+1);
        },1000);
    });

    return (
<h1>Counting...{count} </h1>
    );
}
export default HooksEffect;