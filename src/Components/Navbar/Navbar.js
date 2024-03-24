import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 py-4 max7xl">
        <h1 className="text-white font-bold text-2xl" >The Blog WebPage</h1>
        <div className="links flex justify-between items-center">
          <Link to='/' className="text-white hover:text-pink-500">Home</Link>
          <Link to='/create' className="text-blue-400 hover:text-blue-500">New Blog</Link>
        </div>
    </nav>
  );
}

export default Navbar