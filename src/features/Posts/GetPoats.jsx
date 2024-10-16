const GetPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = response.json();
  return data;
};

export default GetPosts;
