import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const baseurl = "http://localhost:5000/";

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;
    const body = {
      text: inputValue,
    };
    axios
      .patch(baseurl + "update", body, {
        headers: {
          id: _id,
        },
      })
      .then((res) => console.log(res));
  };

  const Delete = (_id) => {
    console.log(_id);
    axios
      .delete(baseurl + "delete", {
        headers: {
          id: _id,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const Add = () => {
    console.log(addTodo);
    const body = {
      text: addTodo,
      isDone: false,
      createdDate: Date.now(),
    };
    axios.post("http://localhost:5000/add", body).then((res) => {
      console.log(res.data);
      setList((prev) => [...prev, res.data]);
    });
  };

  const toggleDone = (_id, isDone) => {
    console.log(isDone);
    const body = {
      isDone: isDone,
    };
    axios
      .patch(baseurl + "checked", body, {
        headers: {
          id: _id,
        },
      })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios.get(baseurl + "list").then((data) => {
      console.log(data);
      setList(data.data);
    });
  }, []);
  useEffect(() => {
    axios.get(baseurl + "count").then((data) => {
      setCheckedCounter(data.data);
    });
  });

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
