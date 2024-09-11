import "./plan.css";
import plan_bg from "../../assets/images/header_bg_4.jpg";
import { plans } from "../../data.js";
import Header from "./../../components/Header";
import Card from "./../../ui/Card";

const Plan = () => {
  return (
    <>
      <Header title="Membership Plans" image={plan_bg}>
        Choose your membership plan
      </Header>

      <section className="plans">
        <div className="container plans_container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <div>
                  <h1>{`$${price}`}</h1>
                  <h2>/mo</h2>
                </div>
                <h4>Features</h4>
                {features.map(({ feature, available, index }) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plan;
