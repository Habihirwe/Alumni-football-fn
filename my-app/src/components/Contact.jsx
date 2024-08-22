import React from "react";
import contact from "../assets/images/contact.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
        <h1 className="font-bold text-black italic text-center text-3xl pt-8">
        CONTACT US
      </h1>
      <div className="flex md:flex-row md:justify-between flex-col  space-y-6 mr-6 px-4 py-10 z-40 ml-0 space-x-8">
        <div className="w-full h-full flex justify-center ">
          <img src={contact} alt="" />
        </div>
        <div >
          <h2 className="text-xl font-semibold text-center mb-4 mr-2 -mt-6">
            We’d love to hear from you! If you have any suggestions, comments,
            or questions, feel free to connect with us using the contact form
            below.
          </h2>
          <form >
            <div className="mb-4 items-center">
              <div className="flex items-center border-none bg-[#34495E]  rounded-md">
                <span className="px-3 text-white">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 bg-[#34495E] border-none text-white focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border-none bg-[#34495E] rounded-md">
                <span className="px-3 text-white">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-[#34495E] border-none text-white focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border-none bg-[#34495E] rounded-md">
                <span className="px-3 text-white">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border-none text-white bg-[#34495E] focus:outline-none"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-start border-none bg-[#34495E] rounded-md">
                <span className="px-3 pt-2 text-white">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <textarea
                  id="message"
                  className="w-full bg-[#34495E] px-3 py-2 border-none text-white focus:outline-none"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
