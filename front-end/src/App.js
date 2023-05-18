import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const ref = useRef();

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

              
      .patch("update", {
        id: _id,
        text: inputValue,
      })
  };

  const Delete = (_id) => {
    console.log(_id);
              
      .delete("delete", {
        headers: {
          id: _id,
        },
      })
  };

  const Add = async () => {
    const addedLists = await           .post("add", { text: addTodo });
    console.log(addedLists.data);
    setList(addedLists.data);
    ref.current.value = "";
  };

  const toggleDone = (_id, isDone) => {
              .patch("checked/" + _id).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
              .get("list").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
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
