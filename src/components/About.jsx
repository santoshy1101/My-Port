import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="text-white py-9 w-4/4 md:min-h-full bg-gradient-to-b from-gray-800 to-black" >
      <div
        className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p
            className="inline text-4xl font-bold border-b-4 border-gray-500 " >
            About
          </p>
        </div>

        <p className="mt-20 text-xl">
        Hello! My name is Santosh Yadav and I like to build websites/application
        that serves the world and always want to enhance my knowledge & adpot
        new technologies that make impact on people. My interest in web
        development started when I joined Masai School to learn full stack
        Web-Development — taught me alot about HTML, CSS, Javascript, React and more others Things.
        </p>

        <br />

        <p className="text-xl">
        Fast Forwarding to
        today, I built a number of web applications and major projects.
        Learned a great deal about teamwork, leadership, and communication.
        After months of rigorous training, here I am looking for an
        opportunity as a full stack web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
