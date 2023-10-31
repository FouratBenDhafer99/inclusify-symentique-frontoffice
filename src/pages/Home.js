import React, { Fragment, useState, useEffect } from "react";

import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

import Friends from "../components/Friends";
import Contacts from "../components/Contacts";
import Group from "../components/Group";
import Events from "../components/Events";
import Createpost from "../components/Createpost";
import Memberslider from "../components/Memberslider";
import Friendsilder from "../components/Friendsilder";
import Storyslider from "../components/Storyslider";
import Postview from "../components/Postview";
import Load from "../components/Load";
import Profilephoto from "../components/Profilephoto";
import Layout from "../components/Layout";
import postApi from "../api/postApi";
import Pagetitle from "../components/Pagetitle";
import PostPagetitle from "../components/PostPageTitle";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [PostType, setPostType] = useState(null);
  const [regexParam, setRegexParam] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [orderBy, setOrderBy] = useState("");
  async function fetchPosts(
    PostType = "",
    regexParam = "",
    orderBy = "",
    orderType = ""
  ) {
    setIsLoading(true);
    const allPosts = await postApi.getPosts(
      PostType,
      regexParam,
      orderBy,
      orderType
    );
    console.log(allPosts);
    setPosts(allPosts);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPosts().then(() => {
      console.log("all posts fetched");
    });
  }, []);
  const PostTypes = ["Complaint", "Announcement"];

  const handleSearchByName = async (e) => {
    setRegexParam(e.target.value);
    fetchPosts(PostType, e.target.value, orderBy, orderType);
  };

  const handleSearchByPostType = async (e) => {
    setPostType(e.target.value);
    fetchPosts(e.target.value, regexParam, orderBy, orderType);
  };

  return (
    <Fragment>
      <Layout />

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row feed-body">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <PostPagetitle
                  title="Pots"
                  searchByInputFunction={handleSearchByName}
                  searchBySelectOptions={PostTypes}
                  searchBySelectFunction={handleSearchByPostType}
                />
                {posts?.length > 0 ? (
                  posts.map((post, index) => (
                    <div className="post-view" key={index}>
                      <Postview post={post} />
                    </div>
                  ))
                ) : (
                  <p>No posts available</p>
                )}
                {/* <Friendsilder /> */}
                <Load />
              </div>
              {/* <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                <Friends />
                <Contacts />
                <Group />
                <Events />
                <Profilephoto />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Popupchat />
      <Appfooter />
    </Fragment>
  );
};

export default Home;
