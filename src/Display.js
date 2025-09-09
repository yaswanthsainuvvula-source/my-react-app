import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './disp.css';
import Sample from "./Sample";
import Home from "./Home";
import Props from "./Props";
import InlineCSS from "./InlineCSS";


function Display()
{

    return(
<div>
       {/*<a href='/home'>Home</a> &nbsp;&nbsp;
        <a href='/pro'>Props</a> &nbsp;&nbsp;
        <a href='/Sam'>Sample</a>&nbsp;&nbsp;
        <a href='/inl'>Inline</a>*/}

        {/*  When You use anchor tag page gets refreshed but reacts nature is not to refresh so we will use <Link to>  */}

        <BrowserRouter>

        <Link to='/home' className='nav'>Home</Link>
        <Link to='/Pro' className='nav'>Props</Link>
        <Link to='/Sam' className='nav'>Sample</Link>
        <Link to='/Inl'className='nav'>Inline</Link>

        <Routes>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/Pro' element={<Props></Props>}></Route>
            <Route path='/Sam' element={<Sample></Sample>}></Route>
            <Route path='/Inl' element={<InlineCSS></InlineCSS>}></Route>
        </Routes>
        
        
        </BrowserRouter>



        </div>

    );
}
export default Display;   


