import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

function Profile() {
  const [loading, setLoading] = useState(false); //for Loading state while awaiting api call
  const [profileDatas, setProfileDatas] = useState([]); // State to hold Profile Datas

  useEffect(() => {
    axios.get(`https://api.github.com/users/DjPatbern`).then((response) => {
      setProfileDatas(response.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile Page - GitHub API App</title>
        <meta
          name="description"
          content="This is the page showing my Github Profile"
        />
        <link rel="canonical" href="/profile" />
      </Helmet>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="error-page"
      >
        {loading ?  <div style={{ color: "white" }}>
          <div className="profile-flex">
            <div>
            
          <img src={profileDatas.avatar_url} style={{ borderRadius: "10%" }} className="pro-img" />
         
            </div>
            <div>
            <h1>{profileDatas.name}</h1>
          <p>{profileDatas.login}</p>
          <p>{profileDatas.bio}</p>
          <a href={profileDatas.followers_url} target="_blank" style={{marginRight: "20px"}}>
            Followers: {profileDatas.followers}
          </a>
          <a href={profileDatas.following_url} target="_blank">
            Following: {profileDatas.following}
          </a>
          <p>◉ {profileDatas.location}</p>
          <a href={`https://${profileDatas.blog}`} target="_blank">🔗 {profileDatas.blog}</a>
          <p>Public Repos: {profileDatas.public_repos}</p>
          <a href={profileDatas.repos_url} target="_blank">See Repos</a>
          <p>Joined On: {profileDatas.created_at}</p>
          <p>Last Update: {profileDatas.updated_at}</p>
          <a href={profileDatas.html_url} target="_blank">Live Profile</a>
            </div>
          </div>
        </div> : <Loading />}

      </motion.div>
    </>
  );
}

export default Profile;

// RETURN BLOCK CODE EXPLANATIONS...
//1.) Helmet block carries my SEO implementation codes.
//2.) Motive.Div is used to implement React Framer Motion for page changing animations.
