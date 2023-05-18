import { useEffect, useState } from "react";
import "./App.css";

import { EditIcon, DeleteIcon } from "./icons/icons";

import { client } from "./client/client";

import axios from "axios"

function App() {
  const [list, setList] = useState([
    // { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const [render,setRender]=useState();

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    client.patch("/update/"+_id , {updateText:inputValue})
      .then(async(res)=>{
        // console.log(res.data)
        setRender(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    client.delete("/delete/"+_id)
      .then(async(res)=>{
        // console.log(res.data);
        setRender(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  };

  // console.log(addTodo)

   const Add = () => {
    if(addTodo!=""){
      client.post("/add" , { text:addTodo })
      .then(async(res)=>{
        // console.log(res.data);
        setRender(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  };

  const toggleDone = (_id, isDone) => {
    client.patch("/checked/"+_id)
      .then(async(res)=>{
        // console.log(res.data)
        setRender(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  };

  useEffect(() => {
    client.get("/list")
      .then(async(res)=>{
        // console.log(res.data);
        setList(res.data);
      }).catch((err)=>{
        console.log(err)
      })

    client.get("/count")
      .then(async(res)=>{
        // console.log(res.data);
        setCheckedCounter(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  }, [Add , Delete , toggleDone ]);


  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone,createdAt }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
              {/* <div>Created at: {createdAt}</div> */}
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
        <div className="button" onClick={Add}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
