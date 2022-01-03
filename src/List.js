import React,{useState,useEffect} from 'react';

import './List.css'

const List = () => {

 const [data,setData] = useState('');

 const [quantities ,setQuantities] = useState('');

 const [todos, setTodo] = useState ( JSON.parse(window.localStorage.getItem('todos') ));

 const handleData = (e) => {
  setData(e.target.value);
 }

 const handleQuantities = (e) => {
  setQuantities(e.target.value);
 }

 const addItem = (e) => { 

  e.preventDefault(); 
  
  if (data.trim() !== '' && quantities.trim() !== '' && quantities>0){

    const wholeList = data+' x'+quantities;

    setTodo([...todos,wholeList]);
    setData('');
    setQuantities('');

  }
}
 
 const deleteItem = (item) => {

  const deleteTodo= todos.filter((currentItem) => currentItem !== item );

  setTodo(deleteTodo);
}

 const deleteAll = (e) => {

  e.preventDefault();
  setTodo([]);

}

 useEffect(() => {

  localStorage.setItem('todos',JSON.stringify(todos));

}, [todos]);


 return(
  <>
   <div className='background'>

    <main>

   <h1>Christma List</h1>
   
    <div className='list'>

   <form>

    <input className='form_input-gift' type='text' placeholder='Add a gift to the list' onChange={handleData} value={data}  />

    <input className='form_input-quantities' type='number' placeholder='0' onChange={handleQuantities} value={quantities} />

    <button className='buttonlist' onClick={addItem}>+</button>
    
   </form>

   <ol>

    {todos.map((todo) =><li key={todo}> {todo}  <button onClick={()=>deleteItem(todo)}  className='buttonlist'> x </button> </li> )}

   </ol>
  
   { todos.length === 0 && <p className='emptyMessage'>Empty list. Santa needs gifts.</p> }
  
   <button className='buttonDeleteAll' onClick={deleteAll}>Delete All</button>
  

    </div>

    </main>
  
   </div>
</>
 );
}


export default List;