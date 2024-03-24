import { Link } from 'react-router-dom';

const Read = ({ blogs }) => {
  return (
    <div className="blog-list max-w-xl bg-white shadow-md rounded px-8 py-6 mb-4">
      {blogs.map(blog => (
        <div className="blog-preview bg-pink-400" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className=" text-gray-700 text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 text-xl font-semibold mb-2">Written by:{blog.author}</p>
            {/* <p className="text-gray-700 text-xl font-semibold mb-2">{blog.body}</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Read;