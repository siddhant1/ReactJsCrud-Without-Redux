import React from "react";

export const Table = props => {
  return (
    <div>
      <table className="table table-dark table-hover">
        <tbody>
          <tr>
            <td>{props.item.name}</td>
            <td>{props.item.product}</td>
            <td>{props.item.description}</td>
            <td><i className="far fa-trash-alt"></i></td>
            <td><i class="far fa-edit"></i></td>          
          </tr>
        </tbody>
      </table>
    </div>
  );
};
