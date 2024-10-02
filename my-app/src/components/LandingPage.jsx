import React from "react";
import { useNavigate } from "react-router-dom";
import alumniImage from "../assets/images/alumni.jpeg";

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
  };

  const topScorers = [
    { id: 1, name: "Pinja ", team: "Jaune", score: 20 },
    { id: 2, name: "William", team: "Rouge", score: 16 },
    { id: 3, name: "Eric Haba ", team: "Rouge", score: 10 },
    { id: 4, name: "Simon ", team: "Rouge", score: 9 },
    { id: 5, name: "Ignance", team: "Jaune", score: 7 },
    { id: 6, name: "Darling ", team: "Jaune", score: 6 },
    { id: 7, name: "Feston ", team: "Rouge", score: 6 },
    { id: 8, name: "Aimable", team: "Rouge", score: 5 },
    { id: 9, name: "Bosco  ", team: "Jaune", score: 5 },
    { id: 10, name: "Kassim   ", team: "Jaune", score: 5 },
    { id: 11, name: "Mugisha", team: "Jaune", score: 4 },
   
  ];

  const totalMatches = 38;
  const rougeWins = 12;
  const jauneWins = 13;

  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center justify-between"
      style={{
        backgroundImage: `url(${alumniImage})`,
        filter: "brightness(0.45) contrast(1.25)",
      }}
    >
      <div className="p-10 rounded-lg text-center w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-white mb-4">
          Play with KIST Alumni Football Club
        </h1>
        <p className="text-xl text-white mb-6">
          We’re constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play this game.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          CREATE ACCOUNT
        </button>
      </div>

      <div className="w-full md:w-1/3 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg h-auto md:h-screen overflow-auto mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Match Statistics</h2>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-blue-800">
            Total Matches:
            <span className="text-black font-bold">{totalMatches}</span>
          </p>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-red-500">Rouge Wins</p>
              <p className="text-3xl font-bold text-red-500">{rougeWins}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-yellow-500">
                Jaune Wins
              </p>
              <p className="text-3xl font-bold text-yellow-500">{jauneWins}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Top 10 Scorers</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200">#</th>
                <th className="px-4 py-2 bg-gray-200">Player Name</th>
                <th className="px-4 py-2 bg-gray-200">Goals</th>
                <th className="px-4 py-2 bg-gray-200">Team</th>
              </tr>
            </thead>
            <tbody>
              {topScorers.map((scorer, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{scorer.name}</td>
                  <td className="px-4 py-2">{scorer.score}</td>
                  <td className="px-4 py-2">
                    <span>{scorer.team}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
