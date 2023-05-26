import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

const baseUrl = "http://localhost:5000";

function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);

  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;
    console.log(inputValue);
    axios
      .patch(baseUrl + "/update/" + _id, { text: inputValue })
      .then((res) => {
        console.log(res.data);
        //Collecting the updated data from db
        axios
          .get(baseUrl + "/list")
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

  const Delete = (_id, props1) => {
    console.log(_id);
    axios
      .delete(baseUrl + "/delete/" + _id)
      .then((res) => {
        console.log("Deleted", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const arr = [...list];
    arr.splice(props1, 1);
    setList(arr);
  };

  const Add = (e) => {
    console.log(addTodo);
    if (addTodo) {
      axios
        .post(baseUrl + "/add", {
          text : addTodo,
        })
        .then((res) => {
          console.log(res.data);
          const arr = [...list];
          arr.push(res.data);
          setList(arr);
        });
    } else console.log("something else");
  };

  const toggleDone = (_id, isDone) => {
    axios
    .patch(baseUrl + "/checked/" + _id)
    .then((res) => {
      console.log(res.data);
      //Collecting the updated data from db
      axios
        .get(baseUrl + "/list")
        // .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setList(data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      //
      axios
        .get(baseUrl + "/count")
        // .then((response) => response.json())
        .then((data) => {
          console.log(data, 'asd');
          setCheckedCounter(data.data);
        });
    })
    .catch((err) => {
      console.log(err);
    });



  };

  useEffect(() => {
    axios
      .get(baseUrl + "/list")
      .then((res) => {
        setList(res.data);
        console.log("/list", res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(baseUrl + "/count")
      // .then((response) => response.json())
      .then((data) => {
        console.log(data, 'asd');
        setCheckedCounter(data.data);
      });
      
  }, []);

  console.log(checkedCounter)

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
        <button className="button" onClick={() => Add()}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default App;
