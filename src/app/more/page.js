'use client';

import React, { useState, useEffect } from 'react';

export default function MoreMatches() {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    fetch('https://api.cricapi.com/v1/cricScore?apikey=f37bb1da-5baf-41df-9faf-4c77b4c0857a')
      .then(response => response.json())
      .then(data => {
        const currentDate = new Date();
        const filteredMatches = data.data
          .filter(match => match.series === "ICC Mens T20 World Cup 2024")
          .filter(match => new Date(match.dateTimeGMT) >= currentDate)
          .sort((a, b) => new Date(a.dateTimeGMT) - new Date(b.dateTimeGMT));
        setMatchData(filteredMatches);
      })
      .catch(error => console.error('Error fetching match data:', error));
  }, []);

  if (matchData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gradient-to-l from-black via-gray-700 to-black">
        {matchData.map((match, index) => (
          <div key={index} className="bg-white bg-opacity-10 flex w-full place-content-center mx-auto h-auto flex-col items-center rounded-md border md:flex-row mb-4">
            <div className="h-full w-full md:h-[150px] md:w-[150px]">
              <img
                src={match.t1img}
                alt={match.t1}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="text-center md:text-left p-4">
              <h1 className="inline-flex text-[#FF5E36] items-center text-2xl font-extrabold">
                {match.t1} vs {match.t2}
              </h1>
              <p className="mt-3 text-sm text-gray-200">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
              <p className="mt-3 text-sm text-gray-200">{match.status}</p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  {match.series}
                </span>
              </div>
            </div>
            <div className="h-full w-full md:h-[150px] md:w-[150px]">
              <img
                src={match.t2img}
                alt={match.t2}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        ))}
        <iframe className="w-full h-[250px]" src="https://bwidget.crictimes.org/" frameBorder="0" scrolling="yes"></iframe>
      </div>
    </>
  );
}
