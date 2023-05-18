import "./App.css";
import { useEffect, useState } from "react";
import { EditIcon, DeleteIcon } from "./icons/icons";
import { instance } from "./Client/Instance";

function App() {
  const [list, setList] = useState([{ text: "", isDone: false, _id: "" }]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    instance
      .patch(`update/${_id}`, { text: inputValue })
      .then((_res) => {
        getRequest();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = (_id) => {
    instance
      .delete(`delete/${_id}`)
      .then((_res) => {
        getRequest();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Add = () => {
    instance
      .post("add", {
        text: addTodo,
      })
      .then((res) => {
        setList([...list, res.data]);
      });
  };

  const toggleDone = (_id) => {
    instance
      .patch(`checked/${_id}`)
      .then((_res) => {
        getRequest();
        getChecked();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRequest = () => {
    instance.get("list").then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getRequest();
    getChecked();
  }, []);

  const getChecked = () => {
    instance
      .get("count")
      .then((res) => {
        setCheckedCounter(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                checked={isDone}
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
