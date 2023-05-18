import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [count, setCount] = useState()
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };
  
  const Count = () => {
    axios
    .get("http://localhost:5000/count")
    .then((res) => {
      console.log(res.data);
      setCount(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const Delete = (_id) => {
    console.log(_id);
    axios.delete('http://localhost:5000/delete')
    .then((res) => {
      console.log(res.data);
      setList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const Add = () => {
    console.log(addTodo);
    axios
    .post("http://localhost:5000/add")
    .then((res) => {
      console.log(res.data);
      setList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
    // axios
    //   .get("Your backend URL")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
