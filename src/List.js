import React,{useState} from 'react';


const List = () => {

 const [data,setData] = useState('');
 const [todos, setTodo] = useState (['PlayStation 5','DS']);

 const handleData = (e) => {
  setData(e.target.value);
 }

 const add = (e) => { 
  e.preventDefault(); 
  setTodo([...todos,data]);
  setData("");
}
 
 const rest = (i) => {
  const deleteTodo= todos.filter((currentItem) => currentItem !== i );
  setTodo(deleteTodo);
}

 return(
  <>

   <h1>Christma List</h1>

   <form>

    <input type='text' placeholder='Add a gift to the list' onChange={handleData} value={data}  />
    <button onClick={add}>+</button>

   </form>

   <ol>
    {todos.map((todo) =><li key={todo}> {todo}  <button onClick={()=>rest(todo)}> x </button> </li> )}
   </ol>

  </>
 );
}

export default List;