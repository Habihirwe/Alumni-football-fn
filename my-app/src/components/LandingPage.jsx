import React from 'react';
import { useNavigate } from 'react-router-dom';
import alumniImage from '../assets/images/alumni.jpeg';
function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div
    className=" bg-fixed bg-cover bg-center h-screen w-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${alumniImage})`,
      filter: 'brightness(0.45) contrast(1.25)',
    }}>
      <div className="p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Play with KIST Football Alumni</h1>
        <p className="text-lg text-white mb-6 ">
        We’re constantly trying to express ourselves and actualize our dreams. If you have <br/> the
        opportunity to play this game.
        </p>
        <button   onClick={handleButtonClick} className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
        CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
