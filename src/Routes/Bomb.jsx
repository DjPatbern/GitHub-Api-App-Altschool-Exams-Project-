import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function Bomb() {
  const [bombMessage, setBombMessage] = useState(""); //State to hold the bomb message

  function ErrorBoundaryTest(event) {
    event.preventDefault();
    setBombMessage(event.target.value);
  }

  function BombError() {
    throw new Error("Something Went Wrong!!! Contact Our Team For Help");
  }

  return (
    <>
      <Helmet>
        <title>Error Boundary - GitHub API App</title>
        <meta
          name="description"
          content="This is the page showing all my Error Boundary implementation"
        />
        <link rel="canonical" href="/bomb" />
      </Helmet>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="bomb"
      >
        <div className="bomb-div">
          <code>Type 'bomb' To See Error Boundary</code>
          <input
            className="form-control"
            type="text"
            placeholder="bomb"
            onChange={ErrorBoundaryTest}
            value={bombMessage}
            autoFocus
          />
          {bombMessage === "bomb" ? <BombError /> : ""}
        </div>
      </motion.div>
    </>
  );
}

export default Bomb;

// RETURN BLOCK CODE EXPLANATIONS...
//1.) Helmet block carries my SEO implementation codes.
//2.) Motive.Div is used to implement React Framer Motion for page changing animations.
