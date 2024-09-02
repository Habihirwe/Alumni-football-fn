import React from "react";
import Button from "./Button";
import team from "../assets/images/ss.jpeg";
import Mission from "./Mission";

function About() {
  return (
    <div className=" bg-white ml-6 mr-6 px-4 py-10  rounded-t-lg">
      <h1 className="font-bold text-black text-center text-3xl pb-6">
        {" "}
        ABOUT US
      </h1>
      <div className="flex md:justify-between flex-col-reverse items-center md:flex-row mt-6  pb-6">
        <div className="px-6">
          <p className="text-black mt-10">
            In publishing and graphic design, Loram ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Loram ipsum may be
            used as a placeholder before the final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpage or publicati
          </p>
          <p className="text-black mt-10">
            In publishing and graphic design, Loram ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Loram ipsum may be
            used as a placeholder before the final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpage or publicati
          </p>
        </div>

        <img
          src={team}
          alt=""
          className=" md:w-1/2 rounded-3xl object-cover w-full md:h-auto h-full"
        />
      </div>
      <Mission></Mission>
    </div>
  );
}

export default About;
