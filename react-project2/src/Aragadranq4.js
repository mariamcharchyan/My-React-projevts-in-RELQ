//----tarberak1---------------------------------------------------------------
// import { useState } from "react";

// export default function Aragadranq4() {

//   const list = [
//     "Banana",
//     "Apple",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Watermelon"
//   ];

//   const [filterList, setFilterList] = useState(list);

//   const handleSearch = (event) => {

//     if (event.target.value === "") {
//       setFilterList(list);
//       return;
//     }
//     const filteredValues = list.filter(
//       (item) =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <>
//         <h3>Aragadranq4: list-ից  search անել և ֆիլտրել </h3>
//         <div>
//             Search: <input name="query" type="text" onChange={handleSearch} />
//         </div>
//         {filterList && filterList.map((item, index) => (
//             <div key={index}>{item}</div> //Display each item
//         ))}
//     </>
//   );
// }

//------tarberak2------------------------------------
import  { useState } from 'react';

const list = ['Armenia', 'Georgia', 'Germany', 'France', 'Russia', 'Italy'];

export default function Aragadranq4() {
  const [input, setInput] = useState('');
  return (
    <div>
        <h3>Aragadranq4: list-ից  search անել և ֆիլտրել </h3>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <ul>
            {list
                .filter((item) => item.toLowerCase().includes(input.toLowerCase()))
                .map((val, i) => {
                    return <li key={i}>{val}</li>;
                })
            }
        </ul>
    </div>
  );
}

