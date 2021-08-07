import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { TableData } from "./components/TableData";
import TableComponent from "./components/TableComponent";
import "./app.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    TableData().then((res) => {
      setData(res);
    });
  }, []);


  return (
    <div>
      <Header />
      <div>
        <h1>Usuarios</h1>
        <TableComponent data={data}/>
        <hr></hr>
        <h1>Componente Usuarios con direccion,foto y nombre de compañia</h1>
      </div>
    </div>
  );
}

export default App;
