import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          {/* footer logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* footer socials */}
          <div className="footer_socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </div>
        </article>
          {/* footer links */}
        <article className="footer_links">
          <h4>premalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article className="footer_links">
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainers">Events</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQ</Link>
        </article>
        <article className="footer_links">
          <h4>get in touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/S">Support</Link>
        </article>   
      </div>
       {/* footer copyright */}
       <article className="footer_copyright">
          <small>
            Copyright &copy;2022 HNG Internship. All rights reserved
          </small>
        </article>
    </footer>
  );
};

export default Footer;
