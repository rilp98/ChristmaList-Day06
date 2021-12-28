import React,{useState} from 'react';


const List = () => {

 const [data,setData] = useState('');
 const [todo, setTodo] = useState (['PlayStation 5','DS']);

 const handleData = (e) => {
  setData(e.target.value);
 }

 const add = (e) => { 
  e.preventDefault(); 
  setTodo([...todo,data]);
  setData("")
}
 
 const rest = () => {
 }

 return(
  <>

   <h1>Christma List</h1>

   <form>

    <input type='text' placeholder='Add a gift to the list' onChange={handleData} value={data}  />
    <button onClick={add}>+</button>

   </form>

   <ol>
    {todo.map((item) =><li key={item}> {item}  <button onClick={rest(item)}> x </button> </li> )}
   </ol>

  </>
 );
}

export default List;