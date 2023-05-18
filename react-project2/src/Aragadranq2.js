
export default function Aragadranq2(){
    const data = [
        {name: 'John', age: 12},
        {name: 'Jane', age: 40} ,
        {name: 'Peter', age: 60}];
    return(
        <>
            <h3>
                Aragadranq2: Ստեղծեք list , որը կտպի 
                const data  զանգվածը  հետևյալ օբյեկտներով 1-ին`name: 'John', age: 12, 2-րդ` name: 'Jane', age: 40 , 3-րդ` name: 'Peter', age: 60
            </h3>
            <ul>
                {data.map((person, index) => (
                    <li key={index}>
                        Name: {person.name}, Age: {person.age}
                    </li>
                ))}
            </ul>

        </>
    )
}