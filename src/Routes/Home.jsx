import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - GitHub API App</title>
        <meta name="description" content="This is the home page of the GitHub API Fetch Web Application" />
        <link rel="canonical" href="/" />
      </Helmet>
      <motion.div 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }} className="home">
          <img src="https://myoctocat.com/assets/images/base-octocat.svg"  data-aos="fade-right" data-aos-delay="100"/>
        <div className="home-message" data-aos="fade-down" data-aos-delay="200">
          <h2>HELLO 👋</h2>
          <br></br>
          <p>My name is Victor Bernard and you are welcome to
            my Github repositories web application. This app will 
            keep you updated with all my Github Portfolio. Kindly 
            Navigate to repos and click on any Repository of your choice
            to see my repository datas.
            Thank You🥰
          </p>
          <Link to="/repos" className="btn btn-primary">Repos</Link>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
