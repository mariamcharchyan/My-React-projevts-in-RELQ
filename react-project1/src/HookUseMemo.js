//     import {useState,useMemo} from 'react'
    
//     function factorial(n) {
//         if (n <= 1) return 1;
//         return n * factorial(n - 1);
//     }
  
//   export default function HookUseMemoe() {
//     const [count, setCount] = useState(0);
//     const factorialMemoized = useMemo(() => factorial(count), [count]);
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <p>Factorial: {factorialMemoized}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   }

import {useState, useMemo} from 'react'
import Child from './Child'

export default function HookUseMemoe(){
    const [count, setCount] = useState(0);
    const value = useMemo(()=>{
        return(
            <Child />
        )
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>

        {value}
        </>
    )
}