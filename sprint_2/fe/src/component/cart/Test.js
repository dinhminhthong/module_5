import React, { useState, useEffect } from 'react';
import Navbar from "../home/Navbar";
import {CartProvider} from "../../context/CartContext";

const Test = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
        const existingProduct = cartItems.find(item => item.id === product.id);

        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            const updatedCart = cartItems.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCart);
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        // Xóa sản phẩm khỏi giỏ hàng
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Tính tổng giá trị của giỏ hàng
    useEffect(() => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalPrice(totalPrice);
    }, [cartItems]);

    return (
        <CartProvider>
            <Navbar/>
            <h2>Giỏ hàng</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng rỗng</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.name} - {item.price} đồng x {item.quantity}</span>
                            <button onClick={() => addToCart(item)}>Thêm</button>
                            <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Tổng giá trị: {totalPrice} đồng</p>
        </CartProvider>
    );
};

export default Test;
