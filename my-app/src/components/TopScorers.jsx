import React from "react";

const TopScorers = () => {
  const topScorers = [
    { id: 1, name: "Pinja ", team: "Jaune", score: 20 },
    { id: 2, name: "William", team: "Rouge", score: 14 },
    { id: 3, name: "Eric Haba ", team: "Rouge", score: 9 },
    { id: 4, name: "Simon ", team: "Rouge", score: 9 },
    { id: 5, name: "Darling ", team: "Jaune", score: 6 },
    { id: 6, name: "Aimable", team: "Rouge", score: 5 },
    { id: 7, name: "Bosco  ", team: "Jaune", score: 5 },
    { id: 8, name: "Feston ", team: "Rouge", score: 5 },
    { id: 9, name: "Kassim   ", team: "Jaune", score: 4 },
    { id: 10, name: "Mugisha", team: "Jaune", score: 4 },
    { id: 10, name: "Ignance", team: "Jaune", score: 4 },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 text-center">
        <h2 className="text-xl font-semibold">Match Results</h2>
        <p className="text-gray-700 mb-4">
          Total Games Played: <span className="font-bold">35</span>
        </p>
        <div className="flex justify-center space-x-8 mt-4">
          <div className="text-red-600">
            <h3 className="text-lg font-bold">Rouge</h3>
            <p className="text-2xl font-extrabold">11 Wins</p>
          </div>
          <div className="text-yellow-600">
            <h3 className="text-lg font-bold">Jaune</h3>
            <p className="text-2xl font-extrabold">12 Wins</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">
        KIST Alumni Club Top Scorers
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {topScorers.map((scorer, index) => (
              <tr key={scorer.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{scorer.name}</td>
                <td className="px-4 py-2">{scorer.team}</td>
                <td className="px-4 py-2">{scorer.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopScorers;
