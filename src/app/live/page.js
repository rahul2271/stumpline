// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');

//   useEffect(() => {
//     fetch('https://api.cricapi.com/v1/currentMatches?apikey=bb294ef3-66a8-437a-9688-c7738a2af26e&offset=0')
//       .then(response => response.json())
//       .then(data => {
//         setMatchData(data.data);
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   }, []);

//   if (matchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const matchesToShow = showAll ? matchData : matchData.slice(0, 1);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         {/* <h1 className="text-4xl font-bold mb-8">Cricket Matches</h1> */}
//         <div className="flex  mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={` py-3 px-6  shadow-md font-bold transition ${
//               activeSection === 'live'
//                 ? 'bg-[#FF5E36] text-white'
//                 : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6  shadow-md font-bold transition ${
//               activeSection === 'upcoming'
//                 ? 'bg-[#FF5E36] text-white'
//                 : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//         </div>
//         <div className="w-full">
//           {activeSection === 'live' && (
//             <div className=" p-4 rounded-lg shadow-md">
//               {/* <h2 className="text-2xl font-bold mb-4">Live Score</h2> */}
//               {matchesToShow.map((match, index) => (
//                 <div key={index} className="rounded-[20px] p-[20px] max-w-2xl md:max-w-5xl bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t1img} alt={match.t1} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t2img} alt={match.t2} className="h-xl w-xl rounded-full mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left p-4">
//                     <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                       {match.t1} vs {match.t2}
//                     </h1>
//                     <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                     <div className="mt-4">
//                       <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                         {match.series}
//                       </span>
//                       <Link href="/more" passHref>
//                         <button onClick={() => setShowAll(true)} className="border-1 w-[120px] h-[40px] bg-gray-800 font-light text-lg shadow-sm shadow-black rounded-[40px] text-white hover:bg-white/70">Show More</button>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[150px] md:w-[150px]">
//                     <img src={match.t2img} alt={match.t2} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
//               {matchData.slice(0, 2).map((match, index) => (
//                 <div key={index} className="rounded-[50px] p-[20px]  flex max-w-2xl flex-col items-center rounded-md border md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[200px] md:w-[300px]">
//                       <img src={match.t1img} alt={match.t1} className="h-2xl w-xl mx-auto w-auto rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[200px] md:w-auto">
//                       <img src={match.t2img} alt={match.t2} className="h-2xl w-2xl rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[200px] md:w-auto">
//                     <img src={match.t2img} alt={match.t2} className="h-2xl rounded-full w-2xl object-cover min-h-[100px] min-w-[100px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=bb294ef3-66a8-437a-9688-c7738a2af26e&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//   }, []);

//   if (matchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const matchesToShow = showAll ? matchData : matchData.slice(0, 1);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//         </div>
//         <div className="w-full">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md">
//               {matchesToShow.map((match, index) => (
//                 <div key={index} className="rounded-[20px] p-[20px] max-w-2xl md:max-w-5xl bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t1img} alt={match.t1} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t2img} alt={match.t2} className="h-xl w-xl rounded-full mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left p-4">
//                     <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                       {match.t1} vs {match.t2}
//                     </h1>
//                     <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                     <div className="mt-4">
//                       <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                         {match.series}
//                       </span>
//                       <button onClick={handleShowMore} className="border-1 w-[120px] h-[40px] bg-gray-800 font-light text-lg shadow-sm shadow-black rounded-[40px] text-white hover:bg-white/70">Show More</button>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[150px] md:w-[150px]">
//                     <img src={match.t2img} alt={match.t2} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
//               {matchData.slice(0, 2).map((match, index) => (
//                 <div key={index} className="rounded-[50px] p-[20px] flex max-w-2xl flex-col items-center rounded-md border md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[200px] md:w-[300px]">
//                       <img src={match.t1img} alt={match.t1} className="h-2xl w-xl mx-auto w-auto rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[200px] md:w-auto">
//                       <img src={match.t2img} alt={match.t2} className="h-2xl w-2xl rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[200px] md:w-auto">
//                     <img src={match.t2img} alt={match.t2} className="h-2xl rounded-full w-2xl object-cover min-h-[100px] min-w-[100px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=bb294ef3-66a8-437a-9688-c7738a2af26e&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//   }, []);

//   if (matchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const matchesToShow = showAll ? matchData : matchData.slice(0, 1);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//         </div>
//         <div className="w-full">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md">
//               {matchesToShow.map((match, index) => (
//                 <div key={index} className="rounded-[20px] p-[20px] max-w-2xl md:max-w-5xl bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t1img} alt={match.t1} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t2img} alt={match.t2} className="h-xl w-xl rounded-full mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left p-4">
//                     <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                       {match.t1} vs {match.t2}
//                     </h1>
//                     <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                     <div className="mt-4">
//                       <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                         {match.series}
//                       </span>
//                       <button onClick={handleShowMore} className="border-1 w-[120px] h-[40px] bg-gray-800 font-light text-lg shadow-sm shadow-black rounded-[40px] text-white hover:bg-white/70">Show More</button>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[150px] md:w-[150px]">
//                     <img src={match.t2img} alt={match.t2} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//               <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
//               {matchData.slice(0, 2).map((match, index) => (
//                 <div key={index} className="rounded-[50px] p-[20px] flex max-w-2xl flex-col items-center rounded-md border md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[200px] md:w-[300px]">
//                       <img src={match.t1img} alt={match.t1} className="h-2xl w-xl mx-auto w-auto rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[200px] md:w-auto">
//                       <img src={match.t2img} alt={match.t2} className="h-2xl w-2xl rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[200px] md:w-auto">
//                     <img src={match.t2img} alt={match.t2} className="h-2xl rounded-full w-2xl object-cover min-h-[100px] min-w-[100px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=bb294ef3-66a8-437a-9688-c7738a2af26e&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//   }, []);

//   if (matchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const matchesToShow = showAll ? matchData : matchData.slice(0, 1);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//         </div>
//         <div className="w-full">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md">
//               {matchesToShow.map((match, index) => (
//                 <div key={index} className="rounded-[20px] p-[20px] max-w-2xl md:max-w-5xl bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t1img} alt={match.t1} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[150px] md:w-[150px]">
//                       <img src={match.t2img} alt={match.t2} className="h-xl w-xl rounded-full mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                     </div>
//                   </div>
//                   <div className="text-center md:text-left p-4">
//                     <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                       {match.t1} vs {match.t2}
//                     </h1>
//                     <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                     <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                     <div className="mt-4">
//                       <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                         {match.series}
//                       </span>
//                       {/* <button onClick={handleShowMore} className="border-1 w-[120px] h-[40px] bg-gray-800 font-light text-lg shadow-sm shadow-black rounded-[40px] text-white hover:bg-white/70">Show More</button> */}
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[150px] md:w-[150px]">
//                     <img src={match.t2img} alt={match.t2} className="h-xl w-xl mx-auto w-auto rounded-full object-cover min-h-[80px] min-w-[80px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
//               {/* <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2> */}
//               {matchData.map((match, index) => (
//                 <div key={index} className="bg-white rounded-[20px] p-[20px] flex max-w-2xl flex-col items-center  border md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[200px] md:w-[300px]">
//                       <img src={match.t1img} alt={match.t1} className="h-2xl w-xl mx-auto w-auto rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[200px] md:w-auto">
//                       <img src={match.t2img} alt={match.t2} className="h-2xl w-2xl rounded-full object-cover min-h-[100px] min-w-[100px]" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[200px] md:w-auto">
//                     <img src={match.t2img} alt={match.t2} className="h-2xl rounded-full w-2xl object-cover min-h-[100px] min-w-[100px]" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=bb294ef3-66a8-437a-9688-c7738a2af26e&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//   }, []);

//   if (matchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const liveMatches = matchData.filter(match => match.status == "Match started");
//   const matchesToShow = showAll ? liveMatches : liveMatches.slice(0, 1);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//         </div>
//         <div className="w-full">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md">
//               {matchesToShow.length === 0 ? (
//                 <div className='text-white font-2xl text-center'>No match found<br/>Check Upcoming Section for more...</div>
//               ) : (
//                 matchesToShow.map((match, index) => (
//                   <div key={index} className="rounded-[20px] p-[20px] max-w-2xl md:max-w-5xl bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                     <div className='flex gap-5'>
//                       <div className="h-full w-full md:h-[50px] md:w-[50px]">
//                         <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                       </div>
//                       <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                         <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full mx-auto object-cover" />
//                       </div>
//                     </div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
//               {matchData.map((match, index) => (
//                 <div key={index} className="bg-white rounded-[20px] p-[20px] flex max-w-2xl flex-col items-center  border md:flex-row mb-4">
//                   <div className='flex gap-5'>
//                     <div className="h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                     <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [recentMatchData, setRecentMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=6e3bce1d-291b-4b91-b084-2cb52afdbdf0&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

//   const fetchRecentMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/currentMatches?apikey=6e3bce1d-291b-4b91-b084-2cb52afdbdf0&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setRecentMatchData(prevData => [...prevData, ...data.data]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching recent match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//     fetchRecentMatchData();
//   }, []);

//   if (matchData.length === 0 && recentMatchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const liveMatches = matchData.filter(match => match.status == "Match started");
//   const matchesToShow = showAll ? liveMatches : liveMatches.slice(0, 1);
//   const recentMatches = recentMatchData.filter(match => match.matchEnded === true);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//           <button
//             onClick={() => setActiveSection('recent')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'recent' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Recent Matches
//           </button>
//         </div>
//         <div className="w-full max-w-7xl mx-auto">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md">
//               {matchesToShow.length === 0 ? (
//                 <div className='text-white font-2xl text-center'>No match found<br/>Check Upcoming Section for more...</div>
//               ) : (
//                 matchesToShow.map((match, index) => (
//                   <div key={index} className="rounded-[20px] p-[20px] bg-white flex w-full place-content-center mx-auto h-auto flex-col items-center md:flex-row mb-4">
//                     <div className='flex justify-center gap-5'>
//                       <div className="h-full w-full md:h-[50px] md:w-[50px]">
//                         <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                       </div>
//                       <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                         <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full mx-auto object-cover" />
//                       </div>
//                     </div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-xl md:text-2xl font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-900">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-900">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className="p-4 rounded-lg shadow-md flex flex-col w-7xl items-center">
//               {matchData.map((match, index) => (
//                 <div key={index} className="mx-auto  place-content-center bg-white rounded-[20px] p-[20px] flex w-full max-w-7xl flex-col items-center border md:flex-row mb-4 mx-auto">
//                   <div className='flex justify-center gap-5'>
//                     <div className="h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                       <div className="mt-4">
//                         <span className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                     <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'recent' && (
//             <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
//               {recentMatches.map((match, index) => (
//                 <div key={index} className="mx-auto  place-content-center bg-white rounded-[20px] p-[20px] flex w-full max-w-7xl flex-col items-center border md:flex-row mb-4 mx-auto">
//                   <div className='flex justify-center gap-5'>
//                     <div className="h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.teamInfo[0].img} alt={match.teams[0]} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                     <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.teamInfo[1].img} alt={match.teams[1]} className="h-[50px] w-[50px] rounded-full mx-auto object-cover" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-center md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[50x] font-bold">
//                         {match.teams[0]} vs {match.teams[1]}
//                       </h1>
//                       <p className="mt-1 text-sm font-medium text-gray-800">Scores: {match.score[0]?.r}-{match.score[0]?.w} ({match.score[0]?.o}) - {match.score[1]?.r}-{match.score[1]?.w} ({match.score[1]?.o})</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-3 text-sm font-medium text-gray-800">{match.status}</p>
//                     </div>
//                   </div>
//                   <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                     <img src={match.teamInfo[1].img} alt={match.teams[1]} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }



// 'use client'
// import React, { useState, useEffect } from 'react';

// export default function CardFour() {
//   const [matchData, setMatchData] = useState([]);
//   const [recentMatchData, setRecentMatchData] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [activeSection, setActiveSection] = useState('live');
//   const [offset, setOffset] = useState(0);

//   const fetchMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/cricScore?apikey=6e3bce1d-291b-4b91-b084-2cb52afdbdf0&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           // Transforming data to include venue information
//           const transformedData = data.data.map(match => ({
//             ...match,
//             venue: match.venue || 'Venue not available'
//           }));
//           setMatchData(prevData => [...prevData, ...transformedData]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching match data:', error));
//   };

  

//   const fetchRecentMatchData = (offset = 0) => {
//     fetch(`https://api.cricapi.com/v1/currentMatches?apikey=6e3bce1d-291b-4b91-b084-2cb52afdbdf0&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           // Transforming data to include venue information
//           const transformedData = data.data.map(match => ({
//             ...match,
//             venue: match.venue || 'Venue not available'
//           }));
//           setRecentMatchData(prevData => [...prevData, ...transformedData]);
//         } else {
//           console.error('Invalid data format:', data);
//         }
//       })
//       .catch(error => console.error('Error fetching recent match data:', error));
//   };

//   useEffect(() => {
//     fetchMatchData();
//     fetchRecentMatchData();
//   }, []);

//   if (matchData.length === 0 && recentMatchData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const handleShowMore = () => {
//     setOffset(prevOffset => prevOffset + 1);
//     fetchMatchData(offset + 1);
//     setShowAll(true);
//   };

//   const liveMatches = matchData.filter(match => match.ms === "live");
//   const matchesToShow = showAll ? liveMatches : liveMatches.slice(0, 1);
//   const recentMatches = recentMatchData.filter(match => match.matchEnded === true);

//   return (
//     <>
//       <header />

//       <div className="flex flex-col items-center justify-center p-4">
//         <div className="flex mb-8">
//           <button
//             onClick={() => setActiveSection('live')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'live' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Live Score
//           </button>
//           <button
//             onClick={() => setActiveSection('upcoming')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'upcoming' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Upcoming Matches
//           </button>
//           <button
//             onClick={() => setActiveSection('recent')}
//             className={`py-3 px-6 shadow-md font-bold transition ${
//               activeSection === 'recent' ? 'bg-[#FF5E36] text-white' : 'bg-white text-gray-800'
//             }`}
//           >
//             Recent Matches
//           </button>
//         </div>
//         <div className="w-full max-w-7xl mx-auto">
//           {activeSection === 'live' && (
//             <div className="p-4 rounded-lg shadow-md flex flex-col w-7xl items-center">
//               {matchesToShow.length === 0 ? (
//                 <div className='text-white font-2xl text-center'>No match found<br/>Check Upcoming Section for more...</div>
//               ) : (
//                 matchesToShow.map((match, index) => (
//                   <div key={index} className="mx-auto place-content-center bg-white rounded-[20px] p-[9px] flex w-full max-w-7xl flex-col items-center border mb-4 md:flex-row min-[300px]:flex-row">
//                     <div className='flex flex-col justify-center gap-5 mb-4 md:mb-0 md:mr-4'>
//                       <div className="h-[50px] w-[50px]">
//                         <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                       </div>
//                       <div className="md:hidden block h-full w-full md:h-[50px] md:w-[50px]">
//                         <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full mx-auto object-cover" />
//                       </div>
//                     </div>
//                     <div className="text-left md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[15px] md:text-2xl font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
//                       <p className="mt-3 text-[12px] font-bold text-gray-900">Scores: {match.t1s} - {match.t2s}</p>
//                       <p className="mt-1 text-[10px] font-medium text-[#2775f2] animate-pulse">{match.status}</p>

//                       <p className="mt-5  inline-block rounded-full bg-gray-800 px-3 py-1 text-[8px] font-semibold text-gray-100">Venue: {match.venue}</p>

//                       <div className="mt-1">
//                         <span className=" mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="md:block hidden h-full w-full md:h-[50px] md:w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//           {activeSection === 'upcoming' && (
//             <div className="p-4 rounded-lg shadow-md flex flex-col w-7xl items-center">
//               {matchData.map((match, index) => (
//                 <div key={index} className="md:mx-auto md:place-content-center bg-white rounded-[20px] p-[9px] flex w-full max-w-7xl flex-col items-center border mb-4 md:flex-row min-[300px]:flex-row">
//                   <div className="flex flex-col justify-center gap-5 mb-4 md:mb-0 md:mr-4">
//                     <div className="h-[50px] w-[50px]">
//                       <img src={match.t1img} alt={match.t1} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                     <div className="h-[50px] w-[50px]">
//                       <img src={match.t2img} alt={match.t2} className="h-[50px] w-[50px] rounded-full object-cover mx-auto" />
//                     </div>
//                   </div>
//                   <div className="flex-grow pl-0 md:pl-4 min-[300px]:pl-4">
//                     <div className="text-left">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-[15px] font-bold">
//                         {match.t1} vs {match.t2}
//                       </h1>
        
//                       <p className="mt-1 text-[10px] font-bold text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-1 text-[10px] font-medium text-gray-800">{match.status}</p>
//                       <p className="mt-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[8px] font-semibold text-gray-100">Venue: {match.venue}</p>

//                       <div className="mt-1">
//                         <span className="mt-1 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-[10px] font-semibold text-gray-100">
//                           {match.series}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {activeSection === 'recent' && (
//             <div className="p-4 rounded-lg shadow-md flex flex-col items-center">
//               {recentMatches.map((match, index) => (
//                 <div key={index} className="mx-auto place-content-center bg-white rounded-[20px] p-[9px] flex w-full max-w-7xl flex-col items-center border mb-4 md:flex-row min-[300px]:flex-row">
//                   <div className='flex flex-col justify-center gap-5 mb-4 md:mb-0 md:mr-4'>
//                     <div className="h-[50px] w-[50px]">
//                       <img src={match.teamInfo[0].img} alt={match.teams[0]} className="h-[50px] w-[50px] mx-auto rounded-full object-cover" />
//                     </div>
//                     <div className="h-[50px] w-[50px]">
//                       <img src={match.teamInfo[1].img} alt={match.teams[1]} className="h-[50px] w-[50px] rounded-full mx-auto object-cover" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-left md:text-left p-4">
//                       <h1 className="inline-flex text-[#FF5E36] items-center text-sm font-bold">
//                         {match.teams[0]} vs {match.teams[1]}
//                       </h1>
//                       <p className="mt-1 text-[10px] font-bold text-gray-800">Scores: {match.score[0]?.r}-{match.score[0]?.w} ({match.score[0]?.o}) - {match.score[1]?.r}-{match.score[1]?.w} ({match.score[1]?.o})</p>
//                       <p className="mt-1 text-[10px] font-bold text-[#2775f2] animate-pulse">{match.status}</p>
//                       <p className="mt-1 text-[10px] font-medium text-gray-800">Date and Time: {new Date(match.dateTimeGMT).toLocaleString()}</p>
//                       <p className="mt-2  inline-block rounded-full bg-gray-800 px-3 py-1 text-[8px] font-semibold text-gray-100">Venue: {match.venue}</p>
//                     </div>
//                   </div>
   
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import Head from "next/head";

export default function LiveScore() {
  return (
    <>
      <Head>
        <title>Live Score</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center items-center h-screen bg-black">
        <iframe
          src="https://stumpline.cricketliv.com/"
          className="w-full h-full"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

