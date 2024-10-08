import React from "react";
import bk from "../assets/images/bk.jpeg";

function Activities() {
  const latestActivities = [
    {
      image: bk,
      topic: "Sunday Matches",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque...",
    },
    {
      image: bk,
      topic: "Sunday Matches",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque...",
    },
    {
      image: bk,
      topic: "Sunday Matches",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque...",
    },
  ];
  return (
    <div className=" bg-white ml-6 mr-6 px-4 py-10 z-40 ">
      <h1 className="font-bold text-black text-center text-3xl pb-4">
        ACTIVITIES
      </h1>
      <div>
        <div className=" flex md:space-x-8 md:justify-center  md:flex-row  flex-col pt-4 space-y-4 py-8 items-center ">
          {latestActivities.map((activity, index) => (
            <div
              key={index}
              class="max-w-sm overflow-hidden shadow-2xl bg-[#34495E] ml-6 mr-6 px-4 py-10 z-40  mb-6 rounded-lg  "
            >
              <img
                src={activity.image}
                alt="Sunset in the mountains"
                className="object-cover w-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-1000"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-white">
                  {activity.topic}{" "}
                </div>
                <p class="text-white text-base  overflow-hidden">
                  <a href="" className="hover:underline">
                    {activity.description}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;
