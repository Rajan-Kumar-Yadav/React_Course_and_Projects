import { useContext } from "react";
import Post from "./Post";
import { PostListCreateContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListCreateContext);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
