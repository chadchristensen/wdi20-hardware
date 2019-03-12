import React, { Component } from 'react'

class ProductForm extends Component {
  state = {
    newProduct: {
        productName: '',
        description: '',
        price: ''
    }
  }

  handleNewProductChange = (event) => {
      const attributeName = event.target.name
      const attributeValue = event.target.value

    // make the copy of state
    const newProduct = {...this.state.newProduct}

    // modify our copy of state
    newProduct[attributeName] = attributeValue;

    // update our actual state
    this.setState({newProduct})

  }

  addNewProduct = (event) => {
    event.preventDefault();
    this.props.addNewProductToProductList(this.state.newProduct);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewProduct}>
            <div>
                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    value={this.state.newProduct.productName}
                    onChange={this.handleNewProductChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.newProduct.description}
                    onChange={this.handleNewProductChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={this.state.newProduct.price}
                    onChange={this.handleNewProductChange}
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Create a New Product"
                />
            </div>
        </form>
      </div>
    )
  }
}

export default ProductForm