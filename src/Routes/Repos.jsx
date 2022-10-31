import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ReactPaginate from "react-paginate";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";


function Repos() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const reposPerPage = 6;
  const pagesVisited = pageNumber * reposPerPage;

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/DjPatbern/repos`)
      .then((response) => {
        setRepos(response.data);
        setLoading(true);
      });
  }, []);

  // const displayRepo = repos.map((repo) => (
  //   <div>
  //     {repo.name}
  //     {repo.id}
  //     {repo.html_url}
  //   </div>
  // ))

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
                    <div key={repo.id} className="each-repo">
                      <Link to={`/repos/${repo.name}`} className="repo-links">
                        {repo.name}
                      </Link>
                    </div>
                  );
                })
            : <Loading />
            }
        </div>

        <div className="pagination" data-aos="fade-up" data-aos-delay="100">{
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
