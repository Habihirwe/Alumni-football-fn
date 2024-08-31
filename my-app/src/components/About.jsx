import React from "react";
import Button from "./Button";
import team from "../assets/images/ss.jpeg";
import Mission from "./Mission";

function About() {
  return (
    
     <div className=" bg-white ml-6 mr-6 px-4 py-10  rounded-t-lg"> 
       <h1 className="font-bold text-black text-center text-3xl pb-6"> ABOUT US</h1>
      <div className="flex md:justify-between flex-col-reverse items-center md:flex-row mt-6  pb-6">
        <div className="px-6">
          <p className="text-black mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Doloremque repellat consectetur incidunt. In, nihil debitis.
            <br />
            Recusandae delectus laborum repudiandae incidunt eius voluptatem{" "}
            <br />
            dolorem blanditiis. Hic ex ipsum nam, laboriosam possimus eveniet{" "}
            <br />
            dolor optio cumque! Eligendi cum officiis itaque, cupiditate
            <br />
            dolorem aperiam eaque voluptatum, et id expedita ipsam tempore
            <br />
            excepturi aut beatae dolore molestias mollitia repellendus, impedit
            <br />
            facere? Velit, molestias voluptatem delectus culpa corporis
          </p>
          <p className="text-black mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Doloremque repellat consectetur incidunt. In, nihil debitis.
            <br />
            Recusandae delectus laborum repudiandae incidunt eius voluptatem{" "}
            <br />
            dolorem blanditiis. Hic ex ipsum nam, laboriosam possimus eveniet{" "}
            <br />
            dolor optio cumque! Eligendi cum officiis itaque, cupiditate
            <br />
            dolorem aperiam eaque voluptatum, et id expedita ipsam tempore
            <br />
            excepturi aut beatae dolore molestias mollitia repellendus, impedit
            <br />
            facere? Velit, molestias voluptatem delectus culpa corporis
          </p>
        </div>

        <img src={team} alt="" className=" md:w-1/2 rounded-3xl object-cover w-full md:h-auto h-full" />
      </div>
      <Mission></Mission>
     </div>
  );
}

export default About;
