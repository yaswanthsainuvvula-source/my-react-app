import { useState } from "react";


function StateChange()
{
    const[brand,setBrand]=useState("BMW");
     const[model,setModel]=useState("X4");
      const[year,setYear]=useState("2021");
       const[color,setColor]=useState("blue");


       return(
        <>
<p>{brand} &nbsp;  launched &nbsp;  {model} &nbsp; in &nbsp; {year}  &nbsp; with &nbsp;  {color}  &nbsp; finish.</p>

<button onClick=
{()=> setBrand("Benz")}>Click</button>  

<button onClick=
{()=> setModel("CLI")}>Click</button> 

<button onClick=
{()=> setYear("2019")}>Click</button>

<button onClick=
{()=> setColor("Black")}>Click</button>
</>


       );

}
export default StateChange;