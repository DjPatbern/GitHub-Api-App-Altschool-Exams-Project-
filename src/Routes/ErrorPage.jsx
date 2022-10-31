import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>404 Page - GitHub API App</title>
        <meta
          name="description"
          content="This is the page showing all my 404 page implementation"
        />
        <link rel="canonical" href="/undefined" />
      </Helmet>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="error-page"
      >
        <img src="https://www.pngitem.com/pimgs/m/162-1622413_4chan-404-pages-hd-png-download.png" alt="404 page display image" />
      </motion.div>
    </>
  );
}

export default ErrorPage;

// RETURN BLOCK CODE EXPLANATIONS...
//1.) Helmet block carries my SEO implementation codes.
//2.) Motive.Div is used to implement React Framer Motion for page changing animations.

