import React, { useState, useEffect } from "react";
import postApi from "../api/postApi";

const Postview = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const [isActive, setActive] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const toggleActive = () => setActive(!isActive);

  const menuClass = `${isOpen ? " show" : ""}`;
  async function fetchComments() {
    const allComments = await postApi.getComments();
    console.log(allComments);
    setComments(allComments);
  }

  useEffect(() => {
    fetchComments().then(() => {
      console.log("all comments fetched");
    });
  }, []);

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
      <div className="card-body p-0 d-flex">
        {/* <figure className="avatar me-3">
            <img
              src={`assets/images/${avater}`}
              alt="avater"
              className="shadow-sm rounded-circle w45"
            />
          </figure> */}
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-gold">
            <strong> {"Date: "}</strong>
            {post.date}
          </span>
        </h4>
        <div className="ms-auto pointer">
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
        </div>
      </div>
      <div className="card-body p-0 me-lg-5">
        <p className="fw-500 text-black lh-26 font-xssss w-100 mb-2">
          <strong>{"Post: "}</strong>
          {post.description}{" "}
          <a href="/defaultvideo" className="fw-600 text-primary ms-2">
            See more
          </a>
        </p>
      </div>
      <div className="card-body d-flex p-0">
        <div
          className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
          onClick={toggleActive}
        >
          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>{" "}
          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
          2.8K Like
        </div>
        <a
          href="/defaultvideo"
          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
          <span className="d-none-xss">22 Comment</span>
        </a>
        <div
          className={`pointer ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss ${menuClass}`}
          id={`dropdownMenu`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
          <span className="d-none-xs">Share</span>
        </div>
        <div
          className={`dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg right-0 ${menuClass}`}
          aria-labelledby={`dropdownMenu`}
        >
          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
            Share{" "}
            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
          </h4>
          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
            Copy Link
          </h4>
          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
          <input
            type="text"
            placeholder="https://socia.be/1rGxjoJKVF0"
            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
          />
        </div>
      </div>
      {/* Comment section: */}
      {comments.map((comment, index) =>
        comment.postDescription === post.description ? (
          <div
            key={index}
            className="card w-100 shadow-xss rounded-xxl border-0 mt-4 p-4 mb-3 bg-grey"
          >
            <h4 className="fw-700 text-grey-900 font-xssss mt-1">
              <span className="d-block font-xssss fw-500 mt-1 lh-3 text-back">
                {comment.description}
              </span>
            </h4>
          </div>
        ) : null
      )}
      {/* end comment section: */}
    </div>
  );
};

export default Postview;
