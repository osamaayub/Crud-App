/* eslint-disable no-undef */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [body, setBody] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [author, setAuthor] = useState("mario");
  // eslint-disable-next-line no-unused-vars
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // Create a New Data using Post Request
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      // console.log("new Blog added");
      navigate("/");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          placeholder="Enter Blog Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}>
          required
        </textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="loius">Louis</option>
          <option value="yoshi">Yoshi</option>
          <option value="Pedro">Pedro</option>
        </select>
        {!isPending && <button className="button"> New Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
