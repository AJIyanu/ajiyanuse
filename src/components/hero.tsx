"use client";

import React from "react";

// interface Props {
//   children?: React.ReactNode;
// }

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-pryBlue2 text-white text-center sm:text-left bg-[url('/circuit.jpg')]">
      <div className="flex flex-col justify-around items-center md:flex-row pt-4 relative bg-pryBlue2 w-full h-full opacity-90">
        <div>
          <h1 className="text-5xl font-bold sm:text-7xl lg:text-6xl">
            Got a Problem to <span className="text-tangerine">SOLVE?</span>
          </h1>
          <br />
          <h1 className="text-5xl font-bold sm:text-7xl lg:text-5xl">
            I have the{" "}
            <span className="text-tangerine lg:text-7xl">
              {"<ALGORITHM />"}
            </span>
          </h1>
          <h3>
            My name is Joseph Aderemi and I am Interested in creating wealth for
            you
          </h3>
          <h3>
            with my expertise in Software Engineering and Web App development,
          </h3>
          <h3>I can help you build your dream app and website</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/rubik cube.png"
            alt="rubik cube"
            height={600}
            width={600}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
