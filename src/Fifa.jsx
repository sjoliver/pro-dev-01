import React from 'react';

const Fifa = () => {


  return (
    <p>Hello, World!</p>
  )
}

export default Fifa;






// import axios from "axios";
// import React from "react";

// const baseURL = "http://api.cup2022.ir/api/v1/team";
// const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhhNjg5M2YyODA5NGFhM2E5ZDY2ODEiLCJpYXQiOjE2NzAwMTY2NjYsImV4cCI6MTY3MDEwMzA2Nn0.6_XeL3v3N_JTeBjbjWG5xIe3IJG45ivb-rfc5A5Hc2k";
// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}`, {
//       headers: {
//         'Authorization': `token ${access_token}`,
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         // 'Access-Control-Allow-Methods': ('POST', 'GET'),
//         'Access-Control-Allow-Credentials': 'true',
//       }
//     }).then((response) => {
//       setPost(response.data);
//     });
//     // debugger;
//   }, []);

//   React.useEffect(() => {
//     const test = post;
//     // debugger;
//   }, [post]);


//   return (<>
//     {post && (<div>
//       <h1>{post.name_en}</h1>
//       <p>{post.name_fa}</p>
//     </div>)}</>
//   );
// }

