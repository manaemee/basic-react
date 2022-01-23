import { useState } from 'react';
import './App.css';
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(localStorage.getItem("TODOS") ? JSON.parse(localStorage.getItem("TODOS")): []);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
    const onClick = (event) =>{
     setToDos( toDos.filter((toDo) => event.target.id !== toDo));
    }
    localStorage.setItem("TODOS", JSON.stringify(toDos));
  return (
    <div className={styles.todobox}>
      <h1 className={styles.title}>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input className={styles.insert} onChange={onChange}  value={toDo} type="text" maxlength="57" placeholder="Write your to do..."/>
        <button className={styles.formbutton}>ADD</button>
      </form>
      <hr/>
  <div className={styles.content}>
    {toDos.map((todo, index)=>
    <div className={styles.todo} key={index}>
      <span id={todo}>{todo}</span>
      <span id={todo} onClick={onClick} className={styles.button}>🗑</span>
    </div>
    )}
  </div>
     </div>
  );
}


export default App;
