// import {useState} from "react"
// export default function ButtonState() {
//     const [text,changeText]=useState('Hello world')
//     function change(){
//         changeText('Good bye')
//     }
//     console.log(text)
//     return <div> 
//         <input/>
//     <button onClick= {change}>{text}</button></div>
//  }


// reaqt-ում գրել կոդ, որը կունենա input, button և p։ Ամեն անգամ input-ում տեքստ գրելուց եթե սեղմենք button-ի վրա p-ում տպի input- արժեքը
// write a code in reaqt that will have input, button and p. Every time after writing a text in input, if we click on the button, it will print the value of input in p
//-----------1------------- 
// import { useState } from 'react';

// export default function ButtonState() {
//   const [message, setMessage] = useState('');

//   const [updated, setUpdated] = useState(message);

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleClick = () => {
//     // "message" stores input field value
//     setUpdated(message);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={message}
//       />

//       <h2>Message: {message}</h2>

//       <h2>Updated: {updated}</h2>

//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

//-----------2.1---------------------------
// import React, { useState } from 'react';

// export default function ButtonState() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = event => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(inputValue);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Print Value</button>
//       <p>{inputValue}</p>
//     </div>
//   );
// }

//-----------------------2.2------------------------------
// import { useRef, useState } from 'react';

// export default function ButtonState() {
//   const inputRef = useRef(null);

//   const [updated, setUpdated] = useState('');

//   const handleClick = () => {
//     // "inputRef.current.value" is input value
//     setUpdated(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         id="message"
//         name="message"
//       />

//       <h2>Updated: {updated}</h2>

//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }



//-----------3-------------------------
import React, { useState } from 'react';

export default function ButtonState() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <p>//Այս օրինակում input-ում գրված տեքստը տպվում է p-ում</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>{inputValue}</p>
    </div>
  );
}

//---------------------------------------
// import React, { useState } from 'react';

// export default function ButtonState() {
//   const [count, setSount] = useState(0);

//   return (
//     <div>
//         <p>Այս օրինակում button-ին ամեն անգամ սեղելիս p-ում արժեքը կավելանա 1-ով</p>
//         <p>You clicked {count} times</p>
//         <button onClick={()=>setSount(count+1)}>
//             Click me
//         </button>
//     </div>
//   );
// }