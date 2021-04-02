import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="text-center">
      <header className="header">
        <h1 className="header-title">Alays Choose Good</h1>
        <p className="header-description container">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage. Our Menu
        </p>
        <button className="btn btn-danger header-btn">Spicy Magic</button>
      </header>
      <div className="row container w-100 m-auto">
        <div className="col-md-6 col-lg-6 col-sm-12 second-sendtion">
          <h2 className="second-sendtion-title">About Us</h2>
          <p className="second-sendtion-desc container">
            Pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using a
            wood-fired oven heated to a very high temperature—and served hot The
            main importance of pizza is simply to satisfy a person's hunger.
            Pizza is a meal that anyone can enjoy, with its many options of
            crust flavors and toppings. Also, it can easily be served to a large
            group of people.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 second-section-img">
          <img src="https://i.ibb.co/dJgQ6cC/img1.jpg" alt="" />
        </div>
      </div>
      <div className="third-section text-center mt-5">
        <h2 className="third-section-title ">
          Out Kitchen{" "}
          <span style={{ fontSize: "200%", color: "#ec1354" }}>E</span>xpert
        </h2>
        <p className="third-section-desc mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          ullam.
        </p>
      </div>
      <div className="row container w-100 m-auto expert-section">
        <div className="col-md-6 col-lg-3 col-sm-12 expert">
          <img src="https://i.ibb.co/1bywbdw/expert1.jpg" alt="" />
          <h5 className="mt-2">Pasta specialist</h5>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert">
          <img src="https://i.ibb.co/c349RKs/expert2.jpg" alt="" />
          <h5 className="mt-2">Noodle specialist</h5>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert">
          <img src="https://i.ibb.co/khHpDtn/expert3.jpg" alt="" />
          <h5 className="mt-2">Pizza specialist</h5>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert">
          <img src="https://i.ibb.co/5FMgy2H/expert4.jpg" alt="" />
          <h5 className="mt-2">Soup specialist</h5>
        </div>
          </div>
          <div className="four-section">
              
          </div>
    </div>
  );
};

export default About;
