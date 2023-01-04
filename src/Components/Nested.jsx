import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import {useParams, Link} from 'react-router-dom'
import Loading from './Loading'
import { motion } from "framer-motion";
import ErrorPage from '../Routes/ErrorPage'




function Nested() {
  const params = useParams() //Params for nested repositories
  const [repo, setRepo] = useState({}) // state to hold the datas of each repository
  const [loading, setLoading] = useState(false); //Loading state to await api call
  const [errorPage,setErrorPage] = useState(false)
  // const [notFound, setNotFound] = useState([]); //




useEffect(() => {
    const repoLinkUrl = `https://api.github.com/repos/DjPatbern/${params.reponame}`
    

    
    
      axios.get(repoLinkUrl).then((response) =>  {
        setLoading(true)
        setRepo(response.data)
      }) .catch(function (error) {
     
        if(error.response.status === 404){

          return(
            
            setLoading(true),
            setErrorPage(true)
          ) 
        }
    
      });
    

      
},[params])

 

 

  return (
    <>
      <Helmet>
        <title>{`${repo.name} - GitHub API App`}</title>
        <meta name="description" content={`This is the repository showing ${repo.name} datas`} />
        <link rel="canonical" href={`/repos/${repo.name}`} />
      </Helmet>

      
      {
        errorPage ? <ErrorPage /> : <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }} className='nested'>
    
           {loading ?<div key={repo.id} className='repo-datas' data-aos="fade-up" data-aos-delay="100">
            <img src='https://avatars.githubusercontent.com/u/99277508?v=4' alt='Owners Profile Picture' className='repo-avatar' />
    <div className='details-grid'>
    <p><b>Name:</b> {repo.name}</p>
    
            
            <p><b>id:</b> {repo.id}</p>
            <p><b>Description:</b> {repo.description}</p>
            <p><b>Forks:</b> {repo.forks}</p>
            <p><b>Language:</b> {repo.language}</p>
            <p><b>Watchers:</b> {repo.watchers}</p>
            <p><b>Visibility:</b> {repo.visibility}</p>
            <p><b>Push At:</b> {repo.pushed_at}</p>
            <p><b>Created At:</b> {repo.created_at}</p>
            <p><b>Updated At:</b> {repo.updated_at}</p>
    <Link className='btn btn-primary back-link' to='/repos'>Back</Link>
            <b><a href={repo.svn_url} target='_blank'>➡ Go To Repo Here</a></b>
    </div>
    
    
         </div>
     : <Loading />}
    
     {/* {
      notFound[0]
     } */}
    
    
            
    
    
    
        </motion.div>
      }
      
    </>

  );  
}

export default Nested


// RETURN BLOCK CODE EXPLANATIONS...
//1.) Helmet block carries my SEO implementation codes.
//2.) Motive.Div is used to implement React Framer Motion for page changing animations.
//3.) data-aos is an implemented tools for components animations on the page
//4.) Imported Loading from my Component folder and used it ternary Operation to implement it