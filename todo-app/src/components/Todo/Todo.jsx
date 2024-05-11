import { useEffect, useRef, useState } from "react";
import "./Todo.css";
import TodoItems from "../TodoItems/TodoItems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTask = () => {
    setTodos([
      ...todos,
      { number: count++, text: inputRef.current.value, display: " " },
    ]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);
  return (
    <div className="todo">
      <div className="todo-header">TO DO LIST</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Task..."
          className="todo-input"
        />
        <div
          onClick={() => {
            addTask();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              number={item.number}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
