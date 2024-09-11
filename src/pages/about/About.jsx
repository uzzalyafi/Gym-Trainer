import Header from "../../components/Header";
import image from "../../assets/images/header_bg_1.jpg";
import "./about.css";
import aboutStoryImg from "../../assets/images/about1.jpg";
import vitonImg from "../../assets/images/about2.jpg";
import missionImg from "../../assets/images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        quia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi, quia.
      </Header>
      {/* about story */}
      <section className="about_story">
        <div className="container about_story_container">
          <div className="about_sec_image">
            <img src={aboutStoryImg} alt="about image" />
          </div>
          <div className="about_sec_content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, suscipit dolor quod neque eos veniam, temporibus
              dolorem assumenda amet sapiente nihil nemo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              minus rem, nisi repudiandae ut hic! Exercitationem suscipit optio
              itaque voluptatum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              dolorum?
            </p>
          </div>
        </div>
      </section>
      {/* about vision */}
      <section className="about_vition">
        <div className="container about_vition_container">
          <div className="about_sec_content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, suscipit dolor quod neque eos veniam, temporibus
              dolorem assumenda amet sapiente nihil nemo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              minus rem, nisi repudiandae ut hic! Exercitationem suscipit optio
              itaque voluptatum?
            </p>
          </div>
          <div className="about_sec_image mid">
            <img src={vitonImg} alt="vition image" />
          </div>
        </div>
      </section>
      {/* about mission */}
      <section className="about_mission">
        <div className="container about_mission_container">
          <div className="about_sec_image">
            <img src={missionImg} alt="mission image" />
          </div>
          <div className="about_sec_content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, suscipit dolor quod neque eos veniam, temporibus
              dolorem assumenda amet sapiente nihil nemo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              minus rem, nisi repudiandae ut hic! Exercitationem suscipit optio
              itaque voluptatum?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
