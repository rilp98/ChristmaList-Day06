import React,{useState} from 'react';

import './List.css'

const List = () => {

 const [data,setData] = useState('');
 const [todos, setTodo] = useState (['PlayStation 5','DS']);

 const handleData = (e) => {
  setData(e.target.value);
 }

 const addItem = (e) => { 
  e.preventDefault(); 
  setTodo([...todos,data]);
  setData("");
}
 
 const deleteItem = (item) => {

  const deleteTodo= todos.filter((currentItem) => currentItem !== item );
  setTodo(deleteTodo);
}

const deleteAll = (e) => {
  e.preventDefault();
  setTodo([]);
}

 return(

   <div className="background">

    <main>

   <h1>Christma List</h1>
   
    <div className='list'>

   <form>

    <input type='text' placeholder='Add a gift to the list' onChange={handleData} value={data}  />
    <button className='buttonlist' onClick={addItem}>+</button>
    
   </form>

   <ol>
    {todos.map((todo) =><li key={todo}> {todo}  <button onClick={()=>deleteItem(todo)}  className='buttonlist'> x </button> </li> )}
   </ol>

   <button className='buttonDeleteAll' onClick={deleteAll}>Delete All</button>


    </div>

    </main>
  
   </div>

 );
}

export default List;