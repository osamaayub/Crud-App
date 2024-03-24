/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import { useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";




// eslint-disable-next-line no-unused-vars


const Create = () => {
  const navigate = useNavigate();
  const { Addblog} = useContext(GlobalContext);
  const [title,setTitle]=useState("");
  const[author,setAuthor]=useState("mario");
  const[body,setBody]=useState("");
  const[ispending,setPending]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const blog = { title, body, author };
    try {
       await fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
      })
      setPending(true);
      // const data = await response.json();
      Addblog(blog);
        navigate("/");
        // console.log("blog added",data);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          name="body"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select name="author" 
        value={author} 
        onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="loius">Louis</option>
          <option value="yoshi">Yoshi</option>
          <option value="Pedro">Pedro</option>
        </select>
        {!ispending && <button type="submit" className="button">New Blog</button>}
        {ispending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
