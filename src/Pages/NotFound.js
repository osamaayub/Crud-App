import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="notfound-details">
      <p>The Page Cannot Be Found</p>
      <Link to={'/'}>
      Back to HomePage
      </Link>
    </div>
  )
}

export default NotFound;