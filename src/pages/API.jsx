//with usestate and useeffect

import React, { useEffect, useState } from 'react';

function API() {
  const [users, setUsers] = useState([]);
  const [inputData, setInput] = useState('');

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data); 
        console.log("Data fetched successfully");
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Art Institute Artworks</h1>
      
      <input
        className="border border-gray-400 rounded px-3 py-2 w-full max-w-md mb-6 mx-auto block"
        type="text"
        placeholder="Search title..."
        value={inputData}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users
          .filter((user) =>
            user.title.toLowerCase().includes(inputData.toLowerCase())
          )
          .map((user) => (
            <li
              key={user.id}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{user.title}</h2>
              <p className="text-sm text-gray-600">{user.artist_display}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default API;





//  With Usestate

// import React, { useState } from 'react';

// function API() {
//   const [data, setApidata] = useState([]);

//   const fetchUsers = () => {
//     fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
//       .then((res) => res.json())
//       .then((data) => setApidata(data.data)) 
//       .catch((err) => console.log(err));
//   };

//   console.log(data);

//   return (
//     <div>
//       <button
//         onClick={fetchUsers}
//         className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-3"
//       >
//         Fetch Data
//       </button>

//       <div className="flex justify-center">
//         <div className="flex flex-wrap justify-center gap-10 mt-6">
//           {Array.isArray(data) && data.map((user) => (
//             <div
//               key={user.id}
//               className="w-80 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-md transition"
//             >
//               <img
//                 src={user.thumbnail?.lqip}
//                 alt={user.thumbnail?.alt_text || 'Thumbnail'}
//                 className="w-full h-48 rounded-xl object-cover mb-4"
//               />
//               <p className="text-lg font-semibold mb-1">
//                 <span className="font-medium">Id:</span> {user.id}
//               </p>
//               <p>
//                 <span className="font-medium">Model:</span> {user.api_model}
//               </p>
//               <p>
//                 <span className="font-medium">Title:</span> {user.title}
//               </p>
//               <p>
//                 <span className="font-medium">Text:</span> {user.thumbnail?.alt_text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default API;



