import { LuCrown } from "react-icons/lu";
import SectionHead from "./SectionHead";
import { programs } from "../data.js";
import { Link } from "react-router-dom";
import { SiOpenaigym } from "react-icons/si";
import { AiFillCaretRight } from "react-icons/ai";

import Card from "../ui/card.jsx";

const Programs = () => {
  return (
    <section className="container programs">
      <div className=" programs_container">
        {/* programs head */}
        <SectionHead
          icon={<LuCrown />}
          title="Programs"
          className="programs_head"
        />
      </div>
      <div className="program_wraper">
        {programs.map(({ id, icon, title, info, path }) => {
          {
            icon = <SiOpenaigym />;
          }
          return (
            <Card key={id} className="program">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
