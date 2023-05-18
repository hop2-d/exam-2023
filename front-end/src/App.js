import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    console.log(_id);
    axios
      .patch(
        "http://localhost:5000/update",

        { id: _id, text: inputValue }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Delete = (_id) => {
    console.log(_id);
    axios.delete("http://localhost:5000/delete", {
      headers: { id: _id },
    });
  };

  const Add = () => {
    console.log(addTodo);
    axios.post("http://localhost:5000/add", { text: addTodo }).then((res) => {
      console.log(res.data);
    });
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    axios
      .patch("http://localhost:5000/checked", {
        id: _id,
      })
      .then((res) => {
        console.log(res);
        
        setCheckedCounter((checkedCounter += 1));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/list").then((data) => {
      // console.log(data);
      setList(data.data);
    });

    axios.get("http://localhost:5000/count").then((res) => {
      console.log(res.data)
      setCheckedCounter(res.data)
    })
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
