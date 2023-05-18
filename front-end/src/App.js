import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";
import { client } from "./Client/Instance";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, textt) => {
    const inputValue = window.prompt("Edit", textt);
    if (!inputValue) return;
    console.log(inputValue);
    //axios.patch()
    client
      .patch("/update/" + _id, { text: inputValue })
      .then((res) => {
        console.log(res.data);
        //Collecting the updated data from db
        client
          .get("/list")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setList(data.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = (_id) => {
    console.log(_id);
    // axios.delete();
    client
      .delete("/delete/", { headers: { id: _id } })
      .then((res) => {
        console.log(res.data);
        //Collecting the updated data from db
        client
          .get("/list")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setList(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
        client
          .get("/count")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setCheckedCounter(data.data.count);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Add = (e) => {
    // e.preventDefault();
    console.log(addTodo);
    // axios.post();
    client
      .post("/add", { text: addTodo })
      .then((res) => {
        console.log(res.data);
        setAddTodo("");
        //Collecting the updated data from db
        client
          .get("/list")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setList(data.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
    client
      .patch("/checked/" + _id)
      .then((res) => {
        console.log(res.data);
        //Collecting the updated data from db
        client
          .get("/list")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setList(data.data);
          })
          .catch((err) => {
            console.log(err);
          });

        //
        client
          .get("/count")
          // .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setCheckedCounter(data.data.count);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    client
      .get("/list")
      // .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setList(data.data);
      });
    client
      .get("/count")
      // .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCheckedCounter(data.data.count);
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
        {list &&
          list.map(({ text, _id, isDone }, index) => (
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
          value={addTodo}
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
