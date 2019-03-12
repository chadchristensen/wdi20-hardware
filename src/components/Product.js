import React, { Component } from 'react'

class Product extends Component {
    render() {
        const { productName, description, price } = this.props

        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                {/* Conditionally display Delete button if it is not SHOP view */}
                {
                    this.props.view === 'SHOP'
                        ? <button>
                            Buy
                        </button>
                        : <button
                            onClick={() => this.props.removeProductFromProductList(this.props.index)}
                        >
                            Delete
                        </button>
                }
                
            </div>
        )
    }
}

export default Product