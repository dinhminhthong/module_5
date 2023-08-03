import React from "react";

const Cart = () => {
    return (
        <div className="shopping-cart">
            {/* Container */}
            <div className="container container--type-2">
                {/* Second container */}
                <div className="container">
                    {/* Title */}
                    <h1 className="shopping-cart__title">CowFarm Cart</h1>
                    {/* End title */}
                    {/* Row */}
                    <div className="row">
                        {/* Left */}
                        <div className="col-lg-7 col-xl-8">
                            {/* Cart container */}
                            <div className="shopping-cart__container">
                                {/*- Table responsive */}
                                <div className="table-responsive">
                                    {/* Table */}
                                    <table className="shopping-cart__table">
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th />
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* Cart product item */}
                                        <tr>
                                            <td>
                                                <div className="shopping-cart__product">
                                                    <div className="cart-product__image">
                                                        <a href="product.html">
                                                            <img
                                                                alt="Image"
                                                                data-sizes="auto"
                                                                data-srcset="http://demo2.ninethemes.net/durotan20/html/assets/products/1/10a.jpg 800w"
                                                                src="https://tse3.mm.bing.net/th?id=OIP.lANdFxxSh5ZjA9wnWhKj6QHaE7&pid=Api&P=0&h=180"
                                                                className="lazyload"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product__title-and-variant">
                                                        <h3 className="cart-product__title">
                                                            <a href="product.html">
                                                                Slim fit modal cotton shirt
                                                            </a>
                                                        </h3>
                                                        <div className="cart-product__variant">
                                                            Grey, M
                                                        </div>
                                                        <div className="cart-product__action">
                                                            <a href="#">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$56.99</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__quantity-field">
                                                    <div className="quantity-field__minus">
                                                        <a href="#">-</a>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        defaultValue={2}
                                                        className="quantity-field__input"
                                                    />
                                                    <div className="quantity-field__plus">
                                                        <a href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$113.98</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__delete">
                                                    <a href="#">
                                                        <i className="lnil lnil-close" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* End cart product item */}
                                        {/* Cart product item */}
                                        <tr>
                                            <td>
                                                <div className="shopping-cart__product">
                                                    <div className="cart-product__image">
                                                        <a href="product.html">
                                                            <img
                                                                alt="Image"
                                                                data-sizes="auto"
                                                                data-srcset="http://demo2.ninethemes.net/durotan20/html/assets/products/1/11a.jpg 800w"
                                                                src="https://tse1.mm.bing.net/th?id=OIP.9OGEAY-E-NeuW-n7mf5DJgHaEo&pid=Api&P=0&h=180"
                                                                className="lazyload"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product__title-and-variant">
                                                        <h3 className="cart-product__title">
                                                            <a href="product.html">Suede sport shoes</a>
                                                        </h3>
                                                        <div className="cart-product__variant">
                                                            Bold Brown, 40
                                                        </div>
                                                        <div className="cart-product__action">
                                                            <a href="#">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$45.5</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__quantity-field">
                                                    <div className="quantity-field__minus">
                                                        <a href="#">-</a>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        defaultValue={1}
                                                        className="quantity-field__input"
                                                    />
                                                    <div className="quantity-field__plus">
                                                        <a href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$45.5</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__delete">
                                                    <a href="#">
                                                        <i className="lnil lnil-close" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* End cart product item */}
                                        {/* Cart product item */}
                                        <tr>
                                            <td>
                                                <div className="shopping-cart__product">
                                                    <div className="cart-product__image">
                                                        <a href="product.html">
                                                            <img
                                                                alt="Image"
                                                                data-sizes="auto"
                                                                data-srcset="http://demo2.ninethemes.net/durotan20/html/assets/products/1/12a.jpg 800w"
                                                                src="https://tse3.mm.bing.net/th?id=OIP.woCdR52wxbpRUF1pckjz6AHaHa&pid=Api&P=0&h=180"
                                                                className="lazyload"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product__title-and-variant">
                                                        <h3 className="cart-product__title">
                                                            <a href="product.html">
                                                                Pebbled crossbody belt bag
                                                            </a>
                                                        </h3>
                                                        <div className="cart-product__action">
                                                            <a href="#">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$72.99</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__quantity-field">
                                                    <div className="quantity-field__minus">
                                                        <a href="#">-</a>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        defaultValue={1}
                                                        className="quantity-field__input"
                                                    />
                                                    <div className="quantity-field__plus">
                                                        <a href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product__price">$72.99</div>
                                            </td>
                                            <td>
                                                <div className="cart-product__delete">
                                                    <a href="#">
                                                        <i className="lnil lnil-close" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* End cart product item */}
                                        </tbody>
                                    </table>
                                    {/* End table */}
                                </div>
                                {/* End table responsive */}
                            </div>
                            {/* End cart container */}
                        </div>
                        {/* End left */}
                        {/* Right */}
                        <div className="col-lg-5 col-xl-4">
                            {/* Order summary */}
                            <div className="shopping-cart__order-summary">
                                {/* Background */}
                                <div className="order-summary__background">
                                    {/* Title */}
                                    <h3 className="order-summary__title">Order Summary</h3>
                                    {/* End title */}
                                    {/* Subtotal */}
                                    <div className="order-summary__subtotal">
                                        <div className="summary-subtotal__title">Subtotal</div>
                                        <div className="summary-subtotal__price">$252.47</div>
                                    </div>
                                    {/* End subtotal */}
                                    {/* Delivery method */}
                                    <div className="order-summary__delivery-method">
                                        <select>
                                            <option>Standard Shipping ($20)</option>
                                            <option>Fast Shipping ($40)</option>
                                        </select>
                                    </div>
                                    {/* End delivery method */}
                                    {/* Total */}
                                    <div className="order-summary__total">
                                        <div className="summary-total__title">Total</div>
                                        <div className="summary-total__price">$272.47</div>
                                    </div>
                                    {/* End total */}
                                    {/* Proceed to checkout */}
                                    <div className="order-summary__proceed-to-checkout">
                                        <a href="checkout.html" className="second-button">
                                            Proceed to checkout
                                        </a>
                                    </div>
                                    {/* End proceed to checkout */}
                                </div>
                                {/* End background */}
                                {/* Action */}
                                <div className="order-summary__action">
                                    <a href="shop.html">Continue shopping</a>
                                </div>
                                {/* End action */}
                            </div>
                            {/* End order summary */}
                        </div>
                        {/* End right */}
                    </div>
                    {/* End row */}
                </div>
                {/* End second container */}
            </div>
            {/* End container */}
        </div>
    );
};

export default Cart;
