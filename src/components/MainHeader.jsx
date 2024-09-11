import { Link } from "react-router-dom";
import header_img from "../assets/images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        {/* main header left */}
        <div className="main_header_left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends of Fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            officia qui error!
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        {/* main header right */}
        <div className="main_header_right">
          
            <div className="main_header_circle"></div>
            <div className="main_header_image">
              <img src={header_img} alt="people" />
            </div>
         
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
