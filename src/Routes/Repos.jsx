import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ReactPaginate from "react-paginate";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";


function Repos() {
  const [loading, setLoading] = useState(false); //for Loading state while awaiting api call
  const [repos, setRepos] = useState([]); // State to hold repositories
  const [pageNumber, setPageNumber] = useState(0); // Pagination state
  const reposPerPage = 6; // Repositories to be displayed per page
  const pagesVisited = pageNumber * reposPerPage;

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/DjPatbern/repos`)
      .then((response) => {
        setRepos(response.data);
        setLoading(true);
      })
  }, []);



  const pageCount = Math.ceil(repos.length / reposPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <>
      <Helmet>
        <title>Repositories - GitHub API App</title>
        <meta
          name="description"
          content="This is the page showing all my GitHub Repositories"
        />
        <link rel="canonical" href="/repos" />
      </Helmet> 

      <motion.div 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }} className="reposflex">
        <div className="reposlist" data-aos="fade-down" data-aos-delay="100">
          {loading
            ? repos
                .slice(pagesVisited, pagesVisited + reposPerPage)
                .map((repo) => {
                  return (
                    <Link to={`/repos/${repo.name}`} key={repo.id} className="repo-links">
                    <div  className="each-repo">
                      
                        {repo.name}
                      
                    </div>
                    </Link>
                  );
                })
            : <Loading />
            }
        </div>

        <div className="pagination">{
          loading ? <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        /> : ''
        }
          
        </div>
      </motion.div>
    </>
  );
}

export default Repos;

// RETURN BLOCK CODE EXPLANATIONS...
//1.) Helmet block carries my SEO implementation codes.
//2.) Motive.Div is used to implement React Framer Motion for page changing animations.
//3.) data-aos is an implemented tools for components animations on the page
//4.) Imported Loading from my Component folder and used it ternary Operation to implement it
