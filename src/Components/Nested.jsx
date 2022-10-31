import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import {useParams, Link} from 'react-router-dom'
import Loading from './Loading'
import { motion } from "framer-motion";




function Nested() {
  const params = useParams()
  const [repo, setRepo] = useState({})
  const [loading, setLoading] = useState(false);




useEffect(() => {
    const repoLinkUrl = `https://api.github.com/repos/DjPatbern/${params.reponame}`
    
    axios.get(repoLinkUrl).then((response) =>  {
      setRepo(response.data)
      setLoading(true)
    })
    console.log('params ',repo)
},[params])


 

  return (
    <>
      <Helmet>
        <title>{repo.name}</title>
        <meta name="description" content="This is the home page of the GitHub API Fetch Web Application" />
       
      </Helmet>

      

      <motion.div 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }} className='nested'> {loading ?<div key={repo.id} className='repo-datas' data-aos="fade-up" data-aos-delay="100">
        <img src='https://avatars.githubusercontent.com/u/99277508?v=4' alt='' className='repo-avatar' />
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


        



    </motion.div>
    </>

  );  
}

export default Nested
