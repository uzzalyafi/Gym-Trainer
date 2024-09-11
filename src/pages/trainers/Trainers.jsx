import "./trainers.css";
import trains_bg from "../../assets/images/header_bg_5.jpg";
import Header from "../../components/Header";
import { trainers } from "../../data";
import Traner from "../../components/Traner";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={trains_bg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas
        vitae soluta?
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Traner
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  {
                    icon: <FaInstagramSquare />,
                    link: socials[0],
                  },
                  {
                    icon: <FaTwitter />,
                    link: socials[1],
                  },
                  {
                    icon: <FaFacebookSquare />,
                    link: socials[2],
                  },
                  {
                    icon: <FaLinkedin />,
                    link: socials[3],
                  },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
