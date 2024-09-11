import FAQs from "../../components/FAQs"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Testimonials from "../../components/Testimonials"
import Value from "../../components/Value"
import "./home.css"

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Value/>
      <FAQs/>
      <Testimonials/>
    </>
  )
}

export default Home