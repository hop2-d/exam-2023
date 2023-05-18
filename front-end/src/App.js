import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const BASE_URL = "http://localhost:3100"
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;
    console.log(inputValue);
    axios.patch(BASE_URL + "/update", { _id: _id, text: String(inputValue) })
      .then((res) => {
        axios
        .get(BASE_URL + "/list")
        .then((data) => {
          console.log(data);
          setList(data.data);
        });
      }).catch((err) => console.err(err))
  };

  const Delete = (_id) => {
    console.log({ _id: _id });
    axios.delete(BASE_URL + "/delete", { data: { _id: _id } })
      .then((res) => {
        axios
        .get(BASE_URL + "/list")
        .then((data) => {
          console.log(data);
          setList(data.data);
        });
      })
  };

  const Add = () => {
    console.log(addTodo);
    axios.post(BASE_URL + "/add", { text: String(addTodo) }).then(
      (res) => {
        const arr = [...list]
        arr.push(res.data)
        setList(arr)
      }
    );
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    axios.patch(BASE_URL + "/checked", { _id: _id, isDone: isDone })
      .then((res) => {
        console.log(res)
        axios
        .get(BASE_URL + "/count")
        .then((data) => {
          console.log(data);
          setCheckedCounter(data.data);
        });
      })
  };

  useEffect(() => {
    axios
      .get(BASE_URL + "/list")
      .then((data) => {
        console.log(data);
        setList(data.data);
      });
    axios
      .get(BASE_URL + "/count")
      .then((data) => {
        console.log(data);
        setCheckedCounter(data.data);
      });
  }, []);

  return (
    list && (


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
                  onChange={(props) => { toggleDone(_id, props.target.checked) }}
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
      </div>)
  );
}

export default App;
