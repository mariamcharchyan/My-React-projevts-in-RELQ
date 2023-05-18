//----------optimize-1--------------------------------------------------
// import {useState} from "react";
// const Button = () => {
//     const [count, setCount] = useState(0);
//     console.log({count})
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick = {() => setCount(count+1)}>Click</button>
//         </div>
//     );
// }
// export default Button;


//----------optimize-2--------------------------------------------------
import { memo } from 'react';

const Button = memo(({handleClick, name}) => {

  console.log(name);
  return (
    <div>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
});

export default Button;
