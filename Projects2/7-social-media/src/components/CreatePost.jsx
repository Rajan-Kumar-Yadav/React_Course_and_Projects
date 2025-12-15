import { useContext, useRef } from "react";
import { PostListCreateContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListCreateContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const onSubmithandle = () => {
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    console.log(userId, postTitle, postBody, reactions, tags);
    console.log("on sumbmit button click");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          type="email"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="email"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="email"
          className="form-control"
          id="body"
          rows="4"
          placeholder="Tell us more about it "
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="email"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="email"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using today"
          ref={tagsElement}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onSubmithandle}
      >
        Post
      </button>
    </form>
  );
};
export default CreatePost;
