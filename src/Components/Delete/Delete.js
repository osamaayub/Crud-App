import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const Delete = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const { DeleteBlog} = useContext(GlobalContext);
  // eslint-disable-next-line no-unused-vars
  const {data:blogs, ispending, error } = useFetch(`http://localhost:8000/blogs/${id}`);




  const handleDelete = async () => {
    try {
      // Delete the blog entry from the server
      await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE"
      });
      // Update state by removing the deleted blog
      DeleteBlog(id);
      // Navigate back to the home page
      Navigate("/");
    } catch (err) {
      // Handle any errors that occur during deletion

    }
  };

  return (
    <>
      <div className="blog-details">
        {ispending && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {blogs && (
          <>
            <article>
              <h2 className="blog-title">{blogs.title}</h2>
              <p className="blog-author">Written By: {blogs.author}</p>
              <p className="blog-body">{blogs.body}</p>
            </article>
            <button
              type="button"
              onClick={handleDelete}
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Delete;
