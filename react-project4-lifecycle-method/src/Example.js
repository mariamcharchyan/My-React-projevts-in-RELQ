import {useEffect, useState} from 'react'

function Example() {
    const [name, setName] = useState("");

    useEffect(() => {
        console.log('Exsample mounted');
        return () => {
            console.log('Unmounted Exsample');
        };
    },[]);

    useEffect(() => {
        console.log('updated name');
        return () =>{
            console.log({name});
        };
    },[name]);

    return(
        <div>
            <input
            type = "text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default Example;