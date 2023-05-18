function List(props) {

    
const myListMap=props.myList.map((names, index) => 
    <li key={index}>{names}</li>
    
    );
    
    return (
        <ul>
            {myListMap}
        </ul>
    );
}
export default List