import {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Delete from '../Delete/Delete';


const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: initialBlog, isPending, error } = useFetch(`http://localhost:8000/blogs/ ${id}`);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Merge changes with initial data
      const updatedData = {
        ...initialBlog,
        ...formData
      };

      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });

      const updatedBlog = await response.json();
      console.log(updatedBlog); // Log the updated blog data// Update the blog state with the updated data
      navigate('/');
    } catch (err) {
      console.error("Error updating the blog:", err.message);
    }
  }
  return (
    <div className='update-details'>
      {isPending&&<div>Loading...</div> }
      {error && <div>{error}</div>}
      {initialBlog &&
        <form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>Title:</td>
                <td><input type="text" name="title" defaultValue={initialBlog.title} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Author:</td>
                <td><input type="text" name="author" defaultValue={initialBlog.author} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Body:</td>
                <td><textarea name="body" defaultValue={initialBlog.body} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
          <button  className='update-btn'>Update</button>
        </form>
      }
      <Delete blogId={id} />
    </div>
  );
}

export default Update;
