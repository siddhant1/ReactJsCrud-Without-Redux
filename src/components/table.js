import React from "react";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    
  }
  toogle(event) { 
    this.props.toggleDelete(this.props.item);
  }
  render() {
    return (
      <div>
        <table className="table table-bordered table-primary table-hover">
          <tbody className={this.props.item.css?"red":"white"} >
            <tr>
              <td>{this.props.item.name}</td>
              <td>{this.props.item.product}</td>
              <td>{this.props.item.description}</td>
              <td onClick={this.toogle.bind(this)} ><i className="far fa-trash-alt"></i></td>
              <td><i className="far fa-edit"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
