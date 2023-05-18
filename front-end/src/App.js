import { useEffect, useState } from "react";
import { useRef } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/tests").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const [data, setData] = useState();
  const [testid, setTestid] = useState();

  let name = useRef();

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    axios
      .put("http://localhost:5000/update/" + _id, {
        name: inputValue,
      })
      .then((res) => {
        axios.get("http://localhost:5000/tests").then((res) => {
          setData(res.data);
        });
      })
      .catch((err) => console.log(err));
    //axios.patch()
  };

  const Add = () => {
    axios
      .post("http://localhost:5000" + "/test", {
        name: name.current.value,
      })
      .then((res) => {
        console.log(res.data);
        name.current.value = "";
        setData([...data, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(addTodo);
    // axios.post();
  };

  const deleteTest = (_id) => {
    setTestid(_id);
    axios
      .delete("http://localhost:5000/test/" + _id)
      .then(() => {
        axios.get("http://localhost:5000/tests").then((res) => {
          setData(res.data);
        });
      })
      .catch((err) => console.log(err));
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id);
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
        {data &&
          data.map((item, index) => (
            <div className="todo" key={index}>
              <div className="checkbox">
                <input
                  type={"checkbox"}
                  // defaultChecked={isDone}
                  onChange={() => {
                    toggleDone(item._id);
                  }}
                />
                <div>{item.name}</div>
              </div>
              <div className="actions">
                <div
                  onClick={() => {
                    Edit(item._id);
                  }}
                >
                  <EditIcon />
                </div>
                <div
                  onClick={() => {
                    deleteTest(item._id);
                  }}
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
          ref={name}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
