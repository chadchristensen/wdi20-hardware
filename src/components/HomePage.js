import React, { Component } from "react";
import AdminView from "./AdminView.js";
// import the ShopView component
import ShopView from './ShopView.js';

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: "A Hammer",
    editSaleItem: true,
    productList: [
      {
        productName: "Hammer",
        description: "Itsa hammer",
        price: 12.3
      },
      {
        productName: "Nail",
        description: "Itsa nail",
        price: 0.12
      }
    ],
  };

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({ editSaleItem });
    // this.setState({editSaleItem: editSaleItem})
  };

  handleItemCurrentlyOnSaleChange = evt => {
    // console.log(evt.target.value)
    const itemCurrentlyOnSale = evt.target.value;
    this.setState({ itemCurrentlyOnSale });
  };

  addNewProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)

    this.setState({productList: newProductList})
  }

  removeProductFromProductList = (productIndex) => {
    const productList = [...this.state.productList]
    const filteredProductList = productList.filter((product, index) => {
        return index !== productIndex
    })

    this.setState({productList: filteredProductList})
  }

  // Add a method to toggle between AdminView/ShopView

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>Currently on sale: {this.state.itemCurrentlyOnSale}!</div>
        <button onClick={this.toggleEditSaleItem}>
          {this.state.editSaleItem ? "Hide" : "Edit Sale Item"}
        </button>
        <div>
          {this.state.editSaleItem ? (
            <input
              onChange={this.handleItemCurrentlyOnSaleChange}
              type="text"
              value={this.state.itemCurrentlyOnSale}
            />
          ) : null}
        </div>
        <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            removeProductFromProductList={this.removeProductFromProductList}
        />
        {/* Mount the ShopView component */}
        <ShopView
            productList={this.state.productList}
        />
      </div>
    );
  }
}

export default HomePage;
