/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GlobalContext } from "../../Context/GlobalContext";
const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: initialBlog, ispending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const [formData, setFormData] = useState({});
  const { Updateblog} = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...initialBlog,
        ...formData
      };

      const Response = await fetch("http://localhost:8000/blogs/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });
      // console.log(updatedData);
      const updateBlog = await Response.json();
      Updateblog(updateBlog);
      // console.log(updateBlog);
      navigate('/');
    } catch (err) {
      console.error("Error updating the blog:", err.message);
    }
  }

  return (
    <div className='update-details bg-red-500 text-white p-4 border border-gray-200'>
      {ispending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {initialBlog &&
        <form onSubmit={handleUpdate}>
          <table className="w-full">
            <tbody>
              <tr>
                <td>Title:</td>
                <td><input type="text" name="title"
                  defaultValue={initialBlog.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2" /></td>
              </tr>
              <tr>
                <td>Author:</td>
                <td><input type="text" name="author"
                  defaultValue={initialBlog.author}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2" /></td>
              </tr>
              <tr>
                <td>Body:</td>
                <td><textarea name="body"
                  defaultValue={initialBlog.body}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2" /></td>
              </tr>
            </tbody>
          </table>
          <button className='update-btn bg-blue-500 text-white px-4 py-2 rounded'>Update</button>
          {/* <Delete/> */}
        

        </form>
      }
    </div>
  );
}

export default Update;
