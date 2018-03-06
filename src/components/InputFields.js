import React from 'react';
import "../styles.css"
import Item from "../item"

export class ItemFields extends React.Component{ 
    constructor(props) {
        super(props);
        this.createProduct = this.createProduct.bind(this);
        this.id = 0;
    }
    createProduct() { 
        var item = new Item(this.name.value, this.product.value, this.desc.value, this.id);
        this.props.change(item);
        this.id++;
   }
    render() { 
        return (
        <form className="form-group area" >
        <h2>Enter Name</h2>
        <input  ref={(input) => this.name = input} required className="form-control" type="text" placeholder="Enter Name" />
        <h2>Enter Product Name</h2>
        <input ref={(input) => this.product = input} className="form-control" type="text" placeholder="Enter productName" />
        <h2>Enter Product Description </h2>
        <input ref={(input) => this.desc = input} className="form-control" type="text" placeholder="Enter description" />
        <br />
        <button onClick={this.createProduct} type="button" className="btn btn-primary">Save</button>
    </form>
        );
    }
}