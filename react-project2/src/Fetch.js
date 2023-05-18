// import { useState, useEffect } from 'react';

// const Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(response => response.json())
//       .then(result => setData(result));
//   }, [data]);

//   return (
//     <div>
//         <h3>Aragadranq-fetch:</h3>
//         {data ? data.map((item)=>(
//             <div key={item.id}>{item.title}</div>
//       ))
//        : <p> Loading...</p>
//         }
//     </div>
//   );
// };
// export default Fetch;

//-------------2----------------
// import { useState, useEffect } from 'react';

// const Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://catfact.ninja/fact")
//       .then(response => response.json())
//       .then(result => setData(result));
//   }, [data]);
//   return (
//     <div>
//         <h3>Aragadranq-fetch:</h3>
//       {data ? <div>{data.fact}</div>
//         : <p> Loading...</p>}
//     </div>
//   );

// };

// export default Fetch;

//----------3----------------------
// import {useEffect, useState} from "react"


// export default function Fetch(){
//     const [data, setData] = useState();
//     useEffect(function(){

//         fetch('https://date.nager.at/api/v2/publicholidays/2020/US%27)
//             .then(response=>response.json())
//             .then(result=>setData(result));
//     },[]);

//     return(
//         <div>
//             {data?.map((val,i)=><div key={i}>{val.date} {val.name}</div>)}
//         </div>
//     )
// }



//----------------4---------------------

// import React, { useState, useEffect } from 'react';

// function Fetch() {
//   const [fact, setFact] = useState('');

//   useEffect(() => {
//     fetch('https://catfact.ninja/fact')
//       .then(response => response.json())
//       .then(data => setFact(data.fact))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h3>Aragadranq-fetch: https://catfact.ninja/fact - ից ստանալ տվյալներ</h3>
//       <p>{fact}</p>
//     </div>
//   );
// }
// export default Fetch;


//----------//4.1-------------
import  {useState, useEffect } from 'react';

function Fetch() {
const [fact, setFact] = useState('');
const [length, setLength] = useState('');
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((response)=>{
        console.log(response);
        setFact(response.fact)
        setLength(response.length)

      })
  },[]);

  return (
    <div>
      <h3>Aragadranq-fetch: https://catfact.ninja/fact - ից ստանալ տվյալներ</h3>
      <p>fact:{fact}</p>
      <p>length:{length}</p>
    </div>
  );
}
export default Fetch;