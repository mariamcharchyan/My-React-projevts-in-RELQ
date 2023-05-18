import { useState } from "react";

export default function Aragadranq3(){
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <h3>
                Aragadranq3: Ստեղծեք input և p էլեմենտներ, Input-ի մեջ գրած ցանկացած արժեք տպեք է գրվի նաև p-ի մեջ: օգտագործեք onChange և useState
            </h3>
            <input type="text" value={inputValue} onChange={(evt) =>{
                setInputValue(evt.target.value);
            }} />
            <p>{inputValue}</p>
        </>
    );
}