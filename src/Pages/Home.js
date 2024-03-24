/* eslint-disable no-unused-vars */
import useFetch from "../hooks/useFetch";

import Read from "../Components/Read/Read";
const Home = () => {
  // Custom Hooks Make Component Resuable and More Concise
  const {data:blog,ispending,error}=useFetch("http://localhost:8000/blogs/");
      
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* Functions as Props */}
      {ispending && <div>Loading...</div>}
      {blog && <Read blogs={blog}  />}
    </div>
  );
};

export default Home;
