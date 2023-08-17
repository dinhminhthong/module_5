import React, {useContext} from "react";
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';
import  {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import * as CartService from "../../service/CartService";
import * as UserService from "../../service/userService";
import {useNavigate, useParams} from 'react-router';
import {QuantityContext} from "../home/QuantityContext";



const Cart = () => {
    const [userId, setUserId] = useState(0);
    const [cart, setCart] = useState([]);
    const username = sessionStorage.getItem('USERNAME');
    const navigate = useNavigate();
    const param = useParams();
    const { iconQuantity, setIconQuantity } = useContext(QuantityContext)

    const [productQuantities, setProductQuantities] = useState({});
    const calculateTotalSum = () => {
        let totalSum = 0;
        for (const item of cart) {
            const productQuantity = productQuantities[item.productId] || item.amount;
            totalSum += item.price * productQuantity;
        }
        return totalSum;
    };
    const handleQuantityChange = (productId, newQuantity) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };
    const increaseQuantity = (productId) => {
        const newQuantity = (productQuantities[productId] || 0) + 1;
        handleQuantityChange(productId, newQuantity);
    };
    const decreaseQuantity = (productId) => {
        if (productQuantities[productId] > 1) {
            const newQuantity = productQuantities[productId] - 1;
            handleQuantityChange(productId, newQuantity);
        }
    };

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);

            setUserId(rs)
        }
        getUserName();
    }, []);



    useEffect(() => {
        const listCard = async () => {
            const rs = await CartService.getAllCart(param.username);

            setCart(rs)

        }
        listCard();
    }, []);
    console.log(cart);

    // if (!sessionStorage.getItem("roles")) {
    //
    //     Swal.fire({
    //         title: 'Notification!',
    //         text: `You must login to see your cart`,
    //         icon: 'error',
    //         confirmButtonText: 'OK',
    //     });
    //     navigate("/login")
    //     return null
    //
    // }

    const deleteCartDetail = (cartId, productId, productName, cartDetailId) => {
        // Call the API to delete the cart detail
        CartService.deleteCartDetail(cartId, productId).then(() => {
            // Update the cart state to remove the deleted item
            setCart((prevCart) => prevCart.filter((item) => item.cartDetailId !== cartDetailId));
            setIconQuantity();
            Swal.fire({
                title: 'Thông báo!',
                text: `Bạn vừa xoá mặt hàng ${productName}`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
        });
    };

    return (
        <>
            <div>
             {/*<Topbar/>*/}

             <br/>
                <h1 className='text-center'>Cowfarm Cart</h1>
                <section className="ftco-section ftco-cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                {cart.length === 0 ? (
                                    <div className="text-center m-5">
                                        <img
                                            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                                            alt="Empty Cart"
                                            height="210"
                                            width="300"
                                        />
                                        <h1 style={{ textAlign: "center" }}>EMPTY CART</h1>
                                    </div>
                                ) : (

                                    <div className="cart-list">
                                        <table className="table">
                                            <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {cart?.map((item, index) => (
                                                <tr className="text-center" key={index}>
                                                    <td className="product-remove">
                                                        <a href="#" onClick={() => deleteCartDetail(item.cartId, item.productId, item.productName, item.cartDetailId)}>
                                                            <i style={{ fontSize: '24px', color:"red"}} className='fas'>&#xf1f8;</i>
                                                        </a>
                                                    </td>
                                                    <td className="image-prod">

                                                        <div >
                                                            <img style={{ width: 140 }} src={item.image}></img>
                                                        </div>

                                                    </td>
                                                    <td className="product-name">
                                                        <h3>{item.productName}</h3>

                                                    </td>


                                                    <td className="price">
                                                        <span style={{ fontFamily: "Cabin" }}> {new Intl.NumberFormat().format(item.price)} VND</span>
                                                    </td>
                                                    <td>
                                                        <div style={{ marginTop: 8,marginLeft:160 }}><div style={{ display: "flex",  }}>
                                                                <button style={{ width: 62 }} onClick={() => decreaseQuantity(item.productId)}>
                                                                         -
                                                                </button>
                                                                <input
                                                                    style={{ width: '40px', textAlign: 'center' }}
                                                                    type="text"
                                                                    name="quantity"
                                                                    className="quantity form-control input-number"
                                                                    defaultValue={item.amount}
                                                                    min={1}
                                                                    max={100}
                                                                    value={productQuantities[item.productId] || 1}
                                                                    readOnly
                                                                />
                                                                <button style={{ width: 62 }} onClick={() => increaseQuantity(item.productId)}>
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="total">
                                                        {Intl.NumberFormat().format(item.price * (productQuantities[item.productId] || item.amount))} VND
                                                    </td>
                                                </tr>

                                            ))}


                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row justify-content-start">
                            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
                                <div className="cart-total mb-3">
                                    <h1>Cart Totals</h1>
                                    <p className="d-flex">
                                        <h5>Subtotal: </h5>
                                        <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum())} VND</span>
                                    </p>

                                    <p className="d-flex">
                                        <h5>Ship:</h5>
                                        <span className="text-end">30.000 VND</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex total-price">
                                        <h5>Total: </h5>
                                        <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum() + 30000)} VND</span>
                                    </p>
                                </div>
                                <PayPalScriptProvider>
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: calculateTotalSum(),
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then(function () {
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Payment success',
                                                    showConfirmButton: false,
                                                    timer: 1000,
                                                });
                                                navigate('/history')
                                                const totalAmount = calculateTotalSum() + 30000;
                                                CartService.saveHistory(userId, totalAmount).then(() => {
                                                    // Clear the cart after successful payment and saving the history
                                                    CartService.setCart(userId).then((updatedCartData) => {
                                                        setCart(updatedCartData);
                                                    });
                                                });
                                            });
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>
                </section >

            </div>
        </>
    );
};

export default Cart;
