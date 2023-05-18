// import React from "react";
    // export default function Button(){
    //     return <button>Click</button>
    // }
    export default function Button(props) {
        return(
            <div>
                <button style={{
                    background:props.color,
                    background:'#FFFFFF',
                    borderRadius:'30px'
                    }}>Click</button>
            </div>
        ) 
    }