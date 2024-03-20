
import { useNavigate } from 'react-router-dom';

const Delete = ({ blogId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blogs/ ${blogId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
      navigate('/');
    } catch (err) {
      console.error("Error deleting the blog:", err.message);
    }
  }

  return (
    <button type="button" onClick={handleDelete} className='delete-btn'>Delete</button>
  );
}

export default Delete;
