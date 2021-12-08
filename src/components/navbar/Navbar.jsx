import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
            alt=""
          />
          <span className="left__span">
            <Link to="/">Homepage</Link>
          </span>
          <span className="left__span">
            <Link to="/post">Create a Post</Link>
          </span>
          {/* <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span> */}
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Bloggs</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
