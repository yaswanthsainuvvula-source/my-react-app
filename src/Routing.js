import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import FavMovie from "./FavMovie";
import PropsArr from "./PropsArr";
import PropsObj from "./PropsObj";
import PropsVar from "./PropsVar";

function Routing()
{
  return(

<BrowserRouter>
<Link to='/fvmv'>FavMovie</Link> &nbsp; &nbsp;
<Link to='/prps'>PropsArr</Link>

<Routes>
    <Route path='/fvmv' element={<FavMovie/>}></Route>
    <Route path='/prps' element={<PropsArr/>}>
    <Route path='prp' element={<PropsObj/>}></Route>
    <Route path='prpvar' element={<PropsVar/>}></Route>
    </Route>

    
</Routes>


</BrowserRouter>

  );
}
export default Routing;
{/*page inside another page */}