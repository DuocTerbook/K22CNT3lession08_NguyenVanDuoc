import React, { Component } from 'react'
import NvdProductAddOrEdit from './components/NvdProductAddOrEdit';
import NvdProductList from './components/NvdProductList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Cabbage', id: 1, Active: true },
        { title: 'Garlic', id: 2, Active: false },
        { title: 'Apple', id: 3, Active: true },
      ],
      product: "",
      flag: true
    }
  }
  NvdHandleSubmit = (param) => {
    console.log("Param:", param);
    let { products } = this.state;
    if (param.flag === true) {
      products.push(param);
      this.setState({
        products: products
      })
    } else {
      for (let index = 0; index < products.length; index++) {
        if (products[index].id === param.id) {
          let product = {
            id: param.id,
            title: param.title,
            active: param.active,
          }
          product[index] = product;
        }
        this.setState({
          products: products
        })
      }
    }
  }
  nvdHandleEdit = (product) => {
    console.log("App-edit:", product);
    this.setState({
      product: product
    })
  }
  render() {
    return (
      <div>
        <h1>Event - Form - Render</h1>
        <hr />
        <h2>Danh sách sản phẩm</h2>
        <hr />
        <NvdProductList renderProducts={this.state.products} nvdOnEdit={this.nvdHandleEdit} />
        <hr />
        <NvdProductAddOrEdit onSummit={this.NvdHandleSubmit} renderProduct={this.state.product} renderFlag={this.state.flag} />
      </div>
    )
  }
}