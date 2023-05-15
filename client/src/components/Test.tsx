import React, { useEffect, useState } from "react";

interface BackendData {
  users: string[];
}

const Test = () => {
  const [backendData, setBackendData] = useState<BackendData>({
    users: [],
  });

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data: BackendData) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user: string, i: number) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
};

export default Test;

// const Test = () => {
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/api")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, []);

//   return (
//     <div>
//       {typeof backendData.users === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((user, i) => {
//           <p key={i}> {user}</p>;
//         })
//       )}
//     </div>
//   );
// };
