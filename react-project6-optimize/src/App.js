//----------optimize-1--------------------------------------------------
// import Button from './Button';
// import './App.css';
// import React, { useState, useMemo } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const memory = useMemo(() => <Button />, []);
//   console.log(count);
//   return (
//     <div  className="App">
//       <button onClick={() => setCount(count + 1)}>Click1</button>
//       {memory}
//       {memory}
//     </div>
//   );
// }


//----------optimize-2--------------------------------------------------
import Button from './Button';
import './App.css';
import React, {useState, useCallback} from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log(count1);
  console.log(count2);

  const memorizedValue1 = useCallback(() => setCount1(count1 + 1), [count1])
  console.log(typeof memorizedValue1);
  const memorizedValue2 = useCallback(() => setCount2(count2 + 1), [count2])
  console.log(typeof memorizedValue2);
  
  return (
    <div className="App">
      <Button name = "button1" handleClick = {memorizedValue1}/>
      {count1}
      <Button name = "button2" handleClick = {memorizedValue2}/>
      {count2}
    </div>
  );
}
