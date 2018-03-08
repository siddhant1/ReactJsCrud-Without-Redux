import React from "react";
import { ItemFields } from "./InputFields";
import { Table } from "./table";

class Container extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.ProductsArray = [];
    this.state = { ProductsArray: this.ProductsArray };
  }
  change(item) {
    if (!(item.name == "" || item.name == undefined)) {
      var DupArr = this.state.ProductsArray;
      DupArr.push(item);
      this.setState({ ProductsArray: DupArr });
    }
  }

  toggleDelete(logicObj, event) { 
    logicObj.css = !logicObj.css;
    var editArr = this.state.ProductsArray;
    console.log(editArr);
    this.setState({ ProductsArray: editArr });
  }

  chooseSelect(event) {
    event.preventDefault();
    var editArr1 = this.state.ProductsArray;
    var editArr12= [];
    editArr1.forEach((element) => {
      if (element.css == false) { 
        editArr12.push(element);
      }
    });
    console.log(editArr12);
    this.setState({ ProductsArray: editArr12 });
  }

  render() {
    return (
      <div>
        <ItemFields change={this.change} ChooseSelect={this.chooseSelect.bind(this)}  />
        {this.state.ProductsArray.map(object => {
          if (!object.name) {
          return "";
          } else {
            return (
              <Table
                key={object.id}
                item={object}
                toggleDelete={this.toggleDelete}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default Container;
