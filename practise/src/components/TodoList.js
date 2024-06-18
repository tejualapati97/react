import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
  };

  return (
    <>
    <h1>TodoList application</h1>
      <div>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        &nbsp;
        <button onClick={HandleSubmit}>Add</button>
      </div>

      <div>
        <ul style={{listStyleType:"none"}}>
          {list.length > 0
            ? list.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                );
              })
            : " no data is  available"}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
