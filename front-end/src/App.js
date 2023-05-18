import { useEffect, useRef, useState } from "react";
import "./App.css";
import { EditIcon, DeleteIcon } from "./icons/icons";
import { instance } from "./instance/instance";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");
  const ref = useRef();

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    instance
      .patch("update", {
        id: _id,
        text: inputValue,
      })
      .then((res) => {
        setList(res.data);
        Count();
      });
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    instance
      .delete("delete", {
        headers: {
          id: _id,
        },
      })
      .then((res) => {
        Count();

        setList(res.data);
      });
  };

  const Add = async () => {
    // setList([...list, { text: addTodo, isDone: false, _id: null }]);
    const addedLists = await instance.post("add", { text: addTodo });
    console.log(addedLists.data);
    setList(addedLists.data);
    ref.current.value = "";
    Count();
    // axios.post();
  };
  const Count = async () => {
    const count = await instance.get("count");
    setCheckedCounter(count.data.num);
    console.log(count.data.num);
  };

  const toggleDone = (_id, isDone) => {
    instance.patch("checked/" + _id).then((res) => {
      setList(res.data);
      Count();
    });
  };

  useEffect(() => {
    instance.get("list").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
    Count();
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
          ref={ref}
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
