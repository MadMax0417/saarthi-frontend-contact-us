import React from "react";
import contact from "../assets/contact-us.webp";
import Form from "../components/Form.jsx";

const Hero = () => {
  return (
    <section className="w-[80vw] h-[fit-content] mx-auto mt-5 bg-[rgb(226, 223, 210)] flex flex-col lg:flex-row">
      <div className="lg:h-[50%] lg:w-[50%]">
        <img
          src={contact}
          alt="contact us banner"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>

      <div className="flex flex-col items-center w-[100%] lg:w-[50%]">
        <h1 className="mt-10 text-3xl font-bold"> Contact Us </h1>

        <p className="mt-5">Send a Message</p>
        <p>We usually get back in 2-3 days</p>
        <Form />
      </div>
    </section>
  );
};

export default Hero;
