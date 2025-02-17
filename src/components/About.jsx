import React from "react";

const About = () => {
  return (
    <div className="w-full bg-secondary h-screen py-12">
      <div className="max-w-6xl mx-auto p-4  flex items-center justify-between">
        <div className="w-[480px] h-[480px]">
          <img
            src="https://cdn.dribbble.com/users/1750819/screenshots/15532561/media/9c5fe12605e76372079817d3202c1f0f.png"
            alt=""
          />
        </div>
        <div className="w-[480px]">
          <h1 className="text-3xl">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quae, quidem, quos dolorum quas quibusdam doloremque
            voluptatem quia quae, quidem, quos dolorum quas quibusdam doloremque
            voluptatem quia
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
