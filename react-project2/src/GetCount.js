import React, {useState, useMemo} from 'react'

function GetCount() {
    const[state, setState] = useState([]);
    const[count, setCount] = useState(0);

    const number = useMemo(() => getCount(count), [count]);

    return (
        <div>
            <h3>GetCount: </h3>
            <div>
                <button onClick={() => setState([...state, "New ToDo"])}> Add ToDo</button>
                
                {state.map((element, index) => { return <p key={index}> {element} </p>})}
                
                <div>
                    <button onClick={() => setCount(count + 1)}> +1 </button>
                    <p>{count}</p>
                </div>
            </div>
        </div>
    )
}

const getCount = (count) =>  {
        console.log(count)
    }
export default GetCount