import React from "react";
import { ItemFields } from "./InputFields";
import { Table } from "./table";

class Container extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.ProductsArray = [];
    this.state = { ProductsArray: this.ProductsArray };
  }
  change(item) {
    if (!(item.name == "" || item.name == undefined)) {
      this.ProductsArray.push(item);
      this.setState({ ProductsArray: this.ProductsArray });
    }  
  }

  render() {
    return (
      <div>
        <ItemFields change={this.change} />
        {this.ProductsArray.map((object) => { 
          if (!object.name) {
            return "";
          }
          else { 
            return <Table key={object.id} item={object}/>
          }
        })}
      </div>
    );
  }
}

export default Container;
