import {useState}from "react";
import contact from "../assets/images/contact.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch,useSelector } from "react-redux";
import { createMessage } from "../redux/messageSlice";
import { useNavigate } from "react-router-dom";

import {
  faUser,
  faEnvelope,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const navigate=useNavigate()
const dispatch= useDispatch()


  const { loading, error, messages } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, content } = formData;
    
    dispatch(createMessage({name, email, phoneNumber, content}))
    .then((action) => {
      if (createMessage.fulfilled.match(action)) {
        navigate('/'); 
      };
    });
};

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
          <form  onSubmit={handleSubmit}>
            <div className="mb-4 items-center">
              <div className="flex items-center border-none bg-[#34495E]  rounded-md">
                <span className="px-3 text-white">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full bg-[#34495E] px-3 py-2 border-none text-white focus:outline-none"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
