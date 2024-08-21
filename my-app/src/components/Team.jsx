import React from "react";
import bk from "../assets/images/bk.jpeg";

function Team() {
  return (
    <div className=" bg-white ml-6 mr-6 px-4 py-10 z-40  ">
         <h1 className="font-bold text-black text-center text-3xl pb-4">
         OUR TEAM
      </h1>
       <div className=" flex md:space-x-8 md:justify-center  md:flex-row  flex-col pt-4 space-y-4 py-8 items-center mt-8">
        <div className="max-w-sm bg-[#6B7280] rounded-2xl shadow-lg p-6 space-x-8 ml-16 mt-8">
          <div className="flex justify-center -mt-16">
            <img
              className="w-24 h-24 rounded-full border-8 border-[#797E88]"
              src={bk}
              alt="Profile Image"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold text-yellow-400">"</h2>
            <p className=" text-white text-xl italic">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="flex justify-between items-center mt-4">
              <h1 className="ml-10 font-semibold italic text-yellow-400">
                {" "}
                John Doe
              </h1>
              <h4 className="mr-10 font-semibold"> president</h4>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-[#6B7280] rounded-2xl shadow-lg p-6 mt-8 ml-16">
          <div className="flex justify-center -mt-16">
            <img
              className="w-24 h-24 rounded-full border-8 border-[#797E88]"
              src={bk}
              alt="Profile Image"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold text-yellow-400">"</h2>
            <p className=" text-white text-xl italic">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="flex justify-between items-center mt-4">
              <h1 className="ml-10 font-semibold italic text-yellow-400">
                {" "}
                John Doe
              </h1>
              <h4 className="mr-10 font-semibold"> president</h4>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-[#6B7280] rounded-2xl shadow-lg p-6 ml-16">
          <div className="flex justify-center -mt-16">
            <img
              className="w-24 h-24 rounded-full border-8 border-[#797E88]"
              src={bk}
              alt="Profile Image"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold text-yellow-400">"</h2>
            <p className=" text-white text-xl italic">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="flex justify-between items-center mt-4">
              <h1 className="ml-10 font-semibold italic text-yellow-400">
                {" "}
                John Doe
              </h1>
              <h4 className="mr-10 font-semibold"> president</h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Team;
