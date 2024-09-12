import {testimonials} from "../data.js"
import { FaQuoteLeft } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import SectionHead from "./SectionHead"
import Card from "../ui/Card.jsx"
import { useState } from "react"




const Testimonials = () => {

  const [index, setIndex] = useState(0)
  const { avatar, name, quote, job } = testimonials[index]
  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead icon={<FaQuoteLeft />} title="Testimonials" />
        <Card className="testimonials_card">
          <div className="testiomnials_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testiomnials_quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small>{job}</small>
        </Card>

        <div className="testimonials_btn_container">
          <button
            className="testimonials_btn"
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
          >
            <HiChevronLeft />
          </button>
          <button
            className="testimonials_btn"
            onClick={() => setIndex(index + 1)}
            disabled={index === testimonials.length - 1}
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials