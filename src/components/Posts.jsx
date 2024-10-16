import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/Posts/PostsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  console.log("content", content);

  if (isLoading) {
    content = <h1>Loading.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts?.length === 0) {
    content = <h1>Post not found !</h1>;
  }
  if (!isLoading && !isError && posts?.length > 0) {
    console.log("Lool");
    content = (
      <ul>
        {posts?.map((post) => (
          <li
            className="p-3 border my-2 rounded bg-gray-100 mb-4 shadow-md"
            key={post?.id}
          >
            <h1 className="font-semibold text-lg mb-2">{post?.title}</h1>
            <p>{post?.body}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Posts;
