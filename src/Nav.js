import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <div>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/profile">
                <li>Profile</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
      </div>
    );
  };
  
  export default Nav;