import Header from "../../components/Header";
import header_bg from "../../assets/images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

import "./contact.css"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={header_bg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wraper">
          <a href="mailto:uzzal6905@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+880191611841" target="_blank" rel="noreferrer noopener"><FaSquareWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact