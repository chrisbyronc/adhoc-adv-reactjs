import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, selectList } from './toDoSlice';


export function ToDo() {
  const dispatch = useDispatch()
  const toDos = useSelector(selectList);
  const [item, setItem] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(add(item))
    setItem('')
  }
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {toDos.map((val, i) => {
          return (
            <div key={i} >
              <li>{val}</li>
              <button onClick={() => dispatch(remove(i))}>X</button>
            </div>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => { setItem(e.target.value) }} 
          placeholder="New ToDo Item" 
          value={item}
        />
        <button>Add new</button>
      </form>
    </div>
  );
}
