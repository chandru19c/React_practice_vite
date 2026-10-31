import { useState } from "react";

const ToDoList = () => {
  const [inputText, setInputText] = useState("");

  const [todoList, setTodoList] = useState([
    // {
    //   id: 0,
    //   text: "reading",
    //   completed: false,
    // },
    // {
    //   id: 1,
    //   text: "writing",
    //   completed: false,
    // },
  ]);

  const handleOnClick = () => {
    if (inputText == "") return;
    const items = {
      id: todoList.length + 1,
      text: inputText.trim(),
      completed: false,
    };
    setTodoList((prevState) => [...prevState, items]);
    setInputText("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id == id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      }),
    );
  };

  const handleDelete = (id) => {
    console.log(id);
    setTodoList(todoList.filter((t) => t.id !== id));
  };
  //console.log(todoList);
  return (
    <>
      <h1>To Do List</h1>
      <input
        className="inputText"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button className="addBtn" onClick={handleOnClick}>
        Add
      </button>
      {todoList.map((todo) => (
        <div className="todo-container" key={todo.id}>
          <input
            className="todo-input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
          />
          <span className={todo.completed ? "strike-through" : ""}>
            {todo.text}
          </span>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default ToDoList;
