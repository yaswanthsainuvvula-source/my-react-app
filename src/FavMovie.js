import { useState } from "react";

function FavMovie()
{
    const[favmv,setFavMv]=useState({
        name:'ASVR',
        hero:'NTR',
        dir:'Trivikram'
    });

    const updateMv=()=>
    {
        setFavMv(chng=>
            {
        return{...chng,name:'BB-2',hero:'Prabhas',dir:'SSR'}
        })
    }

    return(
<>
<p>{favmv.name} is my fav movie starring {favmv.hero} directed by {favmv.dir} </p>
<button onClick={updateMv}>Click</button>
</>
        
    );
}
export default FavMovie;