import React, { Component, createContext } from "react";
export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product) {
        console.log(product);
        console.log(this.state.cartItems);
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }

    deleteCart() {

    }



    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                deleteCart: this.deleteCart,
            }} >
                {this.props.children}
            </CartContext.Provider>
        )
    }
}