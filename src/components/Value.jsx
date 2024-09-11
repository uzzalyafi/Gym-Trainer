import image from "../assets/images/values.jpg"
import  {values} from "../data.js"
import SectionHead from "./SectionHead"
import { LuCrown } from "react-icons/lu";
import { SiOpenaigym } from "react-icons/si";




const Value = () => {
  return (
    <section className="values">
      <div className="container values_container">
      {/* values left */}
        <div className="values_left">
          <div className="value_image">
            <img src={image} alt="values image" />
          </div>
        </div>
        {/* values right */}
        <div className="values_right">
          <SectionHead icon={<LuCrown />} title="Values"/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam consequatur ducimus voluptate.</p>
          <div className="values_wraper">
            {values.map(({id, icon, title, desc}) => {
            {
              icon = <SiOpenaigym />
            }
              return (
                <div className="card values_value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Value