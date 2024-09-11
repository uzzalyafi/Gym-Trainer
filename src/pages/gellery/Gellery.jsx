import "./gellery.css";
import gellery_bg from "../../assets/images/header_bg_3.jpg";
import Header from "../../components/Header";

import gImage1 from "../../assets/images/gallery1.jpg";
import gImage2 from "../../assets/images/gallery2.jpg";
import gImage3 from "../../assets/images/gallery3.jpg";
import gImage4 from "../../assets/images/gallery4.jpg";
import gImage5 from "../../assets/images/gallery5.jpg";
import gImage6 from "../../assets/images/gallery6.jpg";
import gImage7 from "../../assets/images/gallery7.jpg";
import gImage8 from "../../assets/images/gallery8.jpg";
import gImage9 from "../../assets/images/gallery9.jpg";
import gImage10 from "../../assets/images/gallery10.jpg";
import gImage11 from "../../assets/images/gallery11.jpg";
import gImage12 from "../../assets/images/gallery12.jpg";
import gImage13 from "../../assets/images/gallery13.jpg";
import gImage14 from "../../assets/images/gallery14.jpg";
import gImage15 from "../../assets/images/gallery15.jpg";

const images =[
  gImage1, gImage2, gImage3, gImage4, gImage5, gImage6, gImage7, gImage8, gImage9, gImage10, gImage11, gImage12, gImage13, gImage14, gImage15]

const Gellery = () => {

  return (
    <>
      <Header title="Our Gellery" image={gellery_bg}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </Header>

      <section className="gellery">
        <div className="container gellery_container">
            {
              images.map((imgae, index) => {
                return (
                  <div className="gellery_img" key={index}>
                    <img src={imgae} alt={`gellery image ${index+1}`} />
                  </div>
                )
              })
            }
        </div>
      </section>
    </>
  );
};

export default Gellery;
