import React, { Component } from 'react'
import ProductList from './ProductList'

class ShopView extends Component {
  render() {
    return (
      <div>
          <ProductList
            productList={this.props.productList}
            // Passing down prop of view to determine whether to show delete or buy button
            view='SHOP'
          />
      </div>
    )
  }
}

export default ShopView
