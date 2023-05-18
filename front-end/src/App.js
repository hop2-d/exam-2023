import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, title) => {
    const inputValue = window.prompt("Edit", title);
    const id = _id;
    if (!inputValue) return;

    console.log(inputValue);

    axios
      .patch(`http://localhost:5000/update/${id}`, {
        title: inputValue,
      })
      .then((res) => console.log(res));
    window.location.reload();
  };

  const Delete = (_id) => {
    const id = _id;
    console.log(id, "lala");
    axios.delete(`http://localhost:5000/delete/${id}`);
    window.location.reload();
  };

  const Add = () => {
    console.log(addTodo);
    if (!addTodo) {
      console.log("lal");
    } else {
      axios.post("http://localhost:5000/add", {
        title: addTodo,
      });
    }
    window.location.reload();
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    const state = isDone
    if (state == true ) { 
      axios.patch(`http://localhost:5000/update/${_id}`, { 
        isDone: state
      })
    }
    else { 
      axios.patch(`http://localhost:5000/update/${_id}`, { 
        isDone: !state
      })
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      .then((data) => {
        console.log(data);
        setList(data.data);
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
        {list.map(({ title, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                Checked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{title}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, title)}>
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
