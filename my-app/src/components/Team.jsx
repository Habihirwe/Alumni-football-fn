import React from "react";
import bk from "../assets/images/bk.jpeg";

function Team() {
    const teamMembers = [
        {
          name: "John Doe",
          position: "President",
          image: bk, 
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        },
        {
          name: "Frank Kenneth",
          position: "Vice President",
          image: bk, 
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        },
        {
          name: "Mark Anthony",
          position: "Accountant",
          image: bk,
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        },
        
      ];

  return (
    <div className=" bg-white ml-6 mr-6 px-4 py-10 z-40  ">
         <h1 className="font-bold text-black text-center text-3xl pb-4">
         OUR TEAM
      </h1>
       <div className=" flex md:space-x-8  justify-center space-x-6 relative  md:justify-center  md:flex-row  flex-col pt-4 space-y-4 py-8 items-center mt-8">
       <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {
            teamMembers.map((member,index)=>(
            <div key={index} className="max-w-sm bg-[#6B7280] rounded-2xl shadow-lg p-6 space-x-8 ml-16 mt-8 relative mx-4">
                <div className="flex justify-center -mt-16">
                  <img
                    className="w-24 h-24 rounded-full border-8 border-[#797E88]"
                    src={member.image}
                    alt="Profile Image"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-4xl font-semibold text-yellow-400">"</h2>
                  <p className=" text-white text-xl italic">
                   { member.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <h1 className="ml-10 font-semibold italic text-yellow-400">
                      
                      {member.name}
                    </h1>
                    <h4 className="mr-10 font-semibold"> {member.position}</h4>
                  </div>
                </div>
              </div>))
        }
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
      </div>
    </div>
  );
}

export default Team;
