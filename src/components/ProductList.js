import React, { Component } from 'react'
import Product from './Product.js'

class ProductList extends Component {
    
    render() {
        const { productList } = this.props

        const productComponents = productList.map((product, index) => {
            return <Product
                        productName={product.productName}
                        description={product.description}
                        price={product.price}
                        key={index}
                        index={index}
                        removeProductFromProductList={this.props.removeProductFromProductList}
                        // Added prop for the view to determine whether to show/hide delete button
                        view={this.props.view}
                    />
        })

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}

export default ProductList