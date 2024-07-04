'use client';
import header from '../header/page';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CardFour() {
  const [matchData, setMatchData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('https://api.cricapi.com/v1/cricScore?apikey=f37bb1da-5baf-41df-9faf-4c77b4c0857a')
      .then(response => response.json())
      .then(data => {
        const currentDate = new Date();
        const todayMatches = data.data
          .filter(match => match.series.includes("ICC Mens T20 World Cup 2024"))
          .filter(match => new Date(match.dateTimeGMT).toDateString() === currentDate.toDateString());
        setMatchData(todayMatches);
      })
      .catch(error => console.error('Error fetching match data:', error));
  }, []);

  if (matchData.length === 0) {
    return <div>Loading...</div>;
  }

  const matchesToShow = showAll ? matchData : matchData.slice(0, 1);
  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <>
    <header/>
      <div className="bg-gradient-to-l from-black via-gray-700 to-black">
        {matchesToShow.map((match, index) => (
          <div key={index} className=" bg-[#FF5E36] bg-opacity-90 flex w-full place-content-center mx-auto h-auto flex-col items-center rounded-md border md:flex-row mb-4">
            <div className="h-full w-full md:h-[150px] md:w-[150px]">
              <img
                src={match.t1img}
                alt={match.t1}
                className="h-xl w-xl rounded-md object-cover min-h-[80px] min-w-[80px]"
              />
            </div>
            <div className="text-center md:text-left p-4">
              <h1 className="inline-flex text-black items-center text-3xl  font-extrabold">
                {match.t1} vs {match.t2}
              </h1>
              <p className="mt-1 text-sm text-gray-200">Scores: {match.t1s} - {match.t2s}</p>
              <p className="mt-3 text-sm text-gray-200">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
              <p className="mt-3 text-sm text-gray-200">{match.status}</p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  {match.series}
                </span>
                <Link href="/more" passHref>
                  <button onClick={() => setShowAll(true)} className="border-1 w-[120px] h-[40px] bg-white font-extrabold text-lg shadow-sm shadow-black rounded-[40px] text-black hover:bg-white/70">Show More</button>
                </Link>
              </div>
            </div>
            <div className="h-full w-full md:h-[150px] md:w-[150px]">
              <img
                src={match.t2img}
                alt={match.t2}
                className="h-xl w-xl rounded-md object-cover min-h-[80px] min-w-[80px]"
              />
            </div>
          </div>
        ))}
        
        <div className="mt-[50px] md:flex justify-evenly bg-gradient-to-l from-black via-gray-700 to-black">
          {matchData.slice(0, 3).map((match, index) => (
            <div key={index} className="bg-black bg-opacity-90 flex max-w-2xl flex-col items-center rounded-md border md:flex-row mb-4">
              <div className="h-full w-full md:h-[200px] md:w-[300px]">
                <img
                  src={match.t1img}
                  alt={match.t1}
                  className="h-2xl w-2xl rounded-md object-cover min-h-[100px] min-w-[100px]"
                />
              </div>
              <div>
                <div className="text-center md:text-left p-4">
                  <h1 className="inline-flex text-[#FF5E36] items-center text-2xl font-extrabold">
                    {match.t1} vs {match.t2}
                  </h1>
                  <p className="mt-1 text-sm text-gray-200">Scores: {match.t1s} - {match.t2s}</p>
                  <p className="mt-3 text-sm text-gray-200">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
                  <p className="mt-3 text-sm text-gray-200">{match.status}</p>
                  <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      {match.series}
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-full w-full md:h-[200px] md:w-auto">
                <img
                  src={match.t2img}
                  alt={match.t2}
                  className="h-2xl w-2xl rounded-md object-cover min-h-[100px] min-w-[100px]"
                />
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="place-content-center w-max mx-auto mt-[30px]">
            <Link href="/allseries/page.js" passHref>
              <button onClick={handleShowAllClick} className="border-1 w-[120px] h-[40px] bg-[#FF5E36] font-extrabold text-lg rounded-[40px] text-black hover:bg-[#FF5E36]/70">Show More</button>
            </Link>
          </div>
        )}
        {/* <iframe className="w-full h-[250px]" src="https://bwidget.crictimes.org/" frameBorder="0" scrolling="yes"></iframe> */}
      </div>
    </>
  );
}
