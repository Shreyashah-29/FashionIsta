// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const VerifyMail = () => {
//   const [validUrl, setValidUrl] = useState(false);
//   const params = useParams();
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const verifyEmail = async () => {
//   //     try {
//   //       const response = await axios.get(`http://192.168.2.61:8080/api/users/verify/${params.userId}/${params.token}`);
//   //       console.log(response.data);
//   //       setValidUrl(true);
//   //     } catch (error) {
//   //       console.error(error);
//   //       setValidUrl(false);
//   //     }
//   //   };

//   //   verifyEmail();
//   // }, [params]);

//   return (
//     <>
//       {/* {validUrl ? (
//         <>
//           <h2>Email verified successfully</h2>
//           <Link to="/signIn">
//             <button>Login</button>
//           </Link>
//         </>
//       ) : (
//         <h1>Verification failed</h1>
//       )} */}

//       <h1 className="text-center mx-auto">Please verify mail first</h1>
//     </>
//   );
// };

// export default VerifyMail;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VerifyMail = () => {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://192.168.2.61:8080/api/users/verify/${params.userId}/${params.token}`);
        console.log(response.data);
        
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false);
      }
    };

    verifyEmail();
  }, [params]);

  return (
    <>
      {validUrl ? (
        <>
          <h2>Email verified successfully</h2>
          <Link to="/signIn">
            <button>Login</button>
          </Link>
        </>
      ) : (
        <h1>Verification failed</h1>
      )}
    </>
  );
};

export default VerifyMail;
