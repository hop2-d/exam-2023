import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState();
  const [create, setCreate] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/tests").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        create,
        setCreate,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
