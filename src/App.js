import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Repos from "./Routes/Repos";
import Nested from "./Components/Nested";
import Bomb from "./Routes/Bomb";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import ErrorPage from "./Routes/ErrorPage";
import {AiOutlineHome} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BiErrorCircle} from 'react-icons/bi'
import {TbError404Off} from 'react-icons/tb'
import { Divide as Hamburger } from 'hamburger-react'




function App() {
const [showIconText, setShowIconText] = useState(false)
const [isOpen, setOpen] = useState(false)


  return (
    <div className="container 	">

      <header className="header bg-primary"> <a href='/' className='logo' ><AiFillGithub />Repo App </a> 
      <div className="dropdown">
        <Hamburger toggle={() => setOpen(prevOpen => !prevOpen)} 
        rounded toggled={isOpen}/>
          <div className={isOpen ? "dropdown-content" : "setOpen"}>
            <a href="/">HOME</a>
            <a href="/repos">REPOS</a>
            <a href="/bomb">ERROR</a>
            <a href="/undefined">404</a>
          </div>
        </div></header>

      <main className="main .bg-primary	">
      <ErrorBoundary>
        <Router>
          <div className="main-flex">
<div className={showIconText ? "sidebar1" : "sidebar"} >
<ul>
 <div className="hamburger" onClick={() => setShowIconText(!showIconText)}>
   <Hamburger />
 </div>
 <li>
 <Link to="/" className="Link">
           <AiOutlineHome className="icon" />
           {showIconText ? ''  : <h2>Home</h2>}
         </Link>
         <Link to="/repos" className="Link">
         <AiFillGithub className="icon" />
           {showIconText ? ''  : <h2>Repos</h2>}
         </Link>
         <Link to="/bomb" className="Link">
         <BiErrorCircle className="icon" />
           {showIconText ? ''  : <h2>Error</h2>}
         </Link>
         <Link to="/undefined" className="Link">
         <TbError404Off className="icon" />
           {showIconText ? ''  : <h2>404</h2>}
         </Link>
 </li>
</ul>




</div>
<Routes>
         
         <Route path="/" element={<Home />} />
           <Route path="repos" element={<Repos />} />
           <Route path="repos/:reponame" element={<Nested />} />
           <Route path="/bomb" element={<Bomb />} />
           <Route path="*" element={<ErrorPage />} />
    
         </Routes>
          </div>
        </Router>
       
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
