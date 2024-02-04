// import React from 'react'

import { useState } from "react";

// import React from 'react'

function Cards() {
  const [val, setVal] = useState({ name: "Kunal", isBanned: false });
  return (
    <div className="w-full h-screen flex bg-slate-900 text-white items-center justify-center flex-col">
      <h1>name: {val.name}</h1>
      <h1>Banned: {val.isBanned.toString()}</h1>
      <button
        onClick={() => {
          //   setScore(i+score); instead of doing this
          setVal({ ...val, isBanned: !val.isBanned });
        }}
        className={`${
          val.isBanned ? "bg-blue-600" : "bg-red-600"
        } px-3 py-3 text-xl font-extrabold text-black w-40`}
      >
        {val.isBanned ? "Check" : "Banned"}
      </button>
    </div>
  );
}

export default Cards;

// import { useState } from "react";

// // import React from 'react'

// function Cards() {
//     let i = 2;
//   const [score, setScore] = useState(1);
//   return (
//     <div className="w-full h-screen flex bg-slate-900 text-white items-center justify-center flex-col" >
//       <h1>{score}</h1>
//       <button
//         onMouseMove={() => {
//         //   setScore(i+score); instead of doing this
//         setScore(prev => prev + 1);
//         }}
//         className="bg-yellow-300 px-3 py-3 text-xl font-extrabold text-black"
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// export default Cards;

// function Cards() {
//   const data = [
//     {
//       description: "Kunal hey to dhammal hai",
//       name: "Drippy",
//       check: "Download now",
//     },
//     {
//       description: "dhamaal hey to Kunal hai",
//       name: "King Shit",
//       check: "Download now",
//     },
//   ];
// //   const /
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 flex items-center justify-center flex-col gap-10">
//         {data.map((val, index) => (
//           <div className="w-80 h-fit bg-white px-3 py-2" key={index}>
//             <h1 className=" font-semibold text-xl mb-5">{data[index].name}</h1>
//             <p>{data[index].description}</p>
//             <button
//               onMouseOver={() => alert("Your song is downloading...")}
//               className="px-3 py-1 bg-sky-600 text-white rounded-md font-semibold mt-3"
//             >
//               {data[index].check}
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cards;

// function Cards() {
//   let dta = [
//     {
//       image:
//         "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/51nZVUtGqOL._SL1500_.jpg",
//       name: "Iphone 15 pro max",
//       description:
//         "Kunal is a highly analytical and detail-oriented individual.",
//       instock: true,
//     },
//     {
//       image:
//         "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/618d5bS2lUL._SX679_.jpg",
//       name: "MacBook Pro",
//       description:
//         "Sarah is a vibrant personality known for her YouTube channel.",
//       instock: true,
//     },
//     {
//       image: "https://m.media-amazon.com/images/I/61NKGdlO36L._SX522_.jpg",
//       name: " Mechanical Keyboard",
//       description: "Marcus is a skilled athlete and dedicated sports player.",
//       instock: false,
//     },
//   ];
//   return (
//     <div className="w-full h-screen bg-zinc-100 flex items-center justify-center gap-10">
//       {dta.map((val, index) => (
//         <div
//           className="w-52 bg-zinc-200 rounded-md overflow-hidden shadow-zinc-400 shadow h-64"
//           key={index}
//         >
//           <div className="w-full h-32 bg-zinc-300">
//             <img
//               className="w-full h-full object-cover"
//               src={dta[index].image}
//               alt=""
//             />
//           </div>
//           <div className="w-full px-3 py-4">
//             <h2 className="font-bold ">{dta[index].name}</h2>
//             <p className="text-xs mt-0">{dta[index].description}</p>
//           </div>
//           <div className="px-3 py-1 -mt-1">
//             <button
//               className={`px-3 py-1 ${
//                 dta[index].instock ? "bg-yellow-600" : "bg-red-600"
//               } text-white rounded`}
//             >
//               {dta[index].instock ? "Buy" : "Sold"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cards;
