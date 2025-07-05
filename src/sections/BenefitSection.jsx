import React from "react";
import ClipPathTitle from "../components/ClipPathTitle";

const BenefitSection = () => {
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-28">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the key benefits of Choosing SPYLT
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
