import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";



function Bomb() {
    const[bombMessage, setBombMessage] = useState('')

    function ErrorBoundaryTest(event){
      event.preventDefault()
      setBombMessage(event.target.value)
    }
  
    function BombError(){  
        throw new Error('Something Went Wrong!!! Contact Our Team For Help')
    }

  return (
    <>
          <Helmet>
        <title>Error Boundary - GitHub API App</title>
        <meta
          name="description"
          content="This is the page showing all my 404 Page Experiment"
        />
      </Helmet>

      <motion.div 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }} className='bomb'>
     <div className='bomb-div'>
     <code>Type 'bomb' To See Error Boundary</code>
        <input className="form-control" type='text' placeholder="bomb" onChange={ErrorBoundaryTest} value={bombMessage} autoFocus />
        {bombMessage === 'bomb' ? <BombError /> : ''}
     </div>
    </motion.div>

    </>
    
  )
}

export default Bomb
