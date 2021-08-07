import React from "react";
import { Table } from "react-bootstrap";

function TableComponent({ data }) {
  return (
    <>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CORREO ELECTRONICO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;
