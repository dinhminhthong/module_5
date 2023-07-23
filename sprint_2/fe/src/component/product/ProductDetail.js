import React from "react";

const ProductDetail = () => {
    return (
        <div>
            {/* Product breadcrumb */}
            <div className="product-breadcrumb">
                {/* Container */}
                <div className="container container--type-2">
                    {/* D-flex */}
                    <div className="product-breadcrumb__d-flex d-flex align-items-center">
                        {/* Breadcrumb */}
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb__item">
                                <a href="index.html">home </a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="product.html">product</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a href="product.html">product layout</a>
                            </li>
                            <li className="breadcrumb__item active" aria-current="page">
                                default
                            </li>
                        </ol>
                        {/* End breadcrumb */}
                    </div>
                    {/* End d-flex */}
                </div>
                {/* End container */}
            </div>
            {/* End product breadcrumb */}
            {/* Product */}
            <div className="product">
                {/* Container */}
                <div className="container container--type-2">
                    {/* Product main */}
                    <div className="product__main d-flex">
                        {/* Product main image */}
                        <ul className="product__main-image">
                            <li className="active js-product-main-image">
                                <a href="#">
                                    <img
                                        alt="Image"
                                        src="http://demo2.ninethemes.net/durotan20/html/assets/products/1/2_1-a.jpg"
                                    />
                                </a>
                            </li>
                        </ul>
                        {/* End product main image */}
                        {/* Product right */}
                        <div className="product__right">
                            {/* Tag */}
                            <div className="product__tag">Washable</div>
                            {/* End tag */}
                            {/* Product title */}
                            <h1 className="product__title">Wool/Cashmere basic cardigan</h1>
                            {/* End product title */}
                            {/* Product price */}
                            <div className="product__price">
                                $49.5
                                {/* <span class="product-price__new">$49.5</span>
        <span class="product-price__old">$69.5</span> */}
                            </div>
                            {/* End product price */}
                            {/* Status */}
                            <div className="product__status">
                                <i className="lnir lnir-package" />
                                <span>Status:</span>
                                <span className="status__value status__value--in-stock">
                  In stock
                </span>
                            </div>
                            {/* End product status */}
                            {/* Options */}
                            <div className="product__options">
                                {/* Product colors */}
                                <div className="product__colors d-flex align-items-center">
                                    {/* Available colors */}
                                    <ul className="product__available-colors">
                                        <li className="active">
                                            <a
                                                href="#"
                                                style={{ background: "#af957c" }}
                                                className="open-tooltip"
                                            >
                                                <span className="custom-tooltip">Brown</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                style={{ background: "#144412" }}
                                                className="open-tooltip"
                                            >
                                                <span className="custom-tooltip">Green</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                style={{ background: "#1c1b20" }}
                                                className="open-tooltip"
                                            >
                                                <span className="custom-tooltip">Black</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                style={{ background: "#8c000d" }}
                                                className="open-tooltip"
                                            >
                                                <span className="custom-tooltip">Red</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End available colors */}
                                    {/* Current color */}
                                    <div className="product__current-color">
                                        Color: <span>Brown</span>
                                    </div>
                                    {/* End current color */}
                                </div>
                                {/* End product colors */}
                                {/* Product sizes */}
                                <div className="product__sizes">
                                    <select>
                                        <option>Choose your size</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                                {/* End product sizes */}
                            </div>
                            {/* End options */}
                            {/* Product action */}
                            <div className="product__action js-product-action">
                                {/* Product quantity and add to cart */}
                                <div className="product__quantity-and-add-to-cart d-flex">
                                    {/* Quantity */}
                                    <div className="product__quantity">
                                        <div className="product-quantity__minus js-quantity-down">
                                            <a href="#">
                                                <i className="lnil lnil-minus" />
                                            </a>
                                        </div>
                                        <input
                                            type="text"
                                            defaultValue={2}
                                            className="product-quantity__input js-quantity-field"
                                        />
                                        <div className="product-quantity__plus js-quantity-up">
                                            <a href="#">
                                                <i className="lnil lnil-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End quantity */}
                                    {/* Add to cart */}
                                    <div className="product__add-to-cart">
                                        <a href="#" className="eighth-button">
                                            Add to cart
                                        </a>
                                    </div>
                                    {/* End add to cart */}
                                </div>
                                {/* End product quantity and add to cart */}
                                {/* Buy now */}
                                <div className="product__buy-now">
                                    <a href="#" className="second-button">
                                        Buy now
                                    </a>
                                </div>
                                {/* End buy now */}
                            </div>
                            {/* End product action */}
                            {/* Product second action */}
                            <ul className="product__second-action d-flex">
                                <li>
                                    <a href="#">
                                        <i className="lnil lnil-heart" /> Add to wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="lnil lnil-reload" /> Compare
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="lnil lnil-tshirt" /> Size guide
                                    </a>
                                </li>
                            </ul>
                            {/* End product section action */}
                            {/* Product information */}
                            <ul className="product__information">
                                <li>
                                    <span>SKU</span>
                                    <p>SS-501</p>
                                </li>
                                <li>
                                    <span>Category</span>
                                    <p>Men’s Clothing</p>
                                </li>
                                <li>
                                    <span>Tags</span>
                                    <p>
                                        <a href="#">shirt</a>, <a href="#">men</a>,
                                        <a href="#">basic</a>, <a href="#">cotton</a>
                                    </p>
                                </li>
                            </ul>
                            {/* End product information */}
                            {/* Product social */}
                            <ul className="product__socials">
                                <li>
                                    <a href="https://twitter.com" target="_blank">
                                        <i className="lnil lnil-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" target="_blank">
                                        <i className="lnil lnil-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank">
                                        <i className="lnil lnil-Instagram" />
                                    </a>
                                </li>
                            </ul>
                            {/* End product social */}
                            {/* Mobile tabs */}
                            <div className="product__mobile-tabs">
                                {/* Accordion */}
                                <div className="accordion active js-accordion">
                                    {/* Title */}
                                    <div className="accordion__title js-accordion-title">
                                        Description
                                    </div>
                                    {/* End title */}
                                    {/* Content */}
                                    <div className="accordion__content js-accordion-content">
                                        <h3>Introduce</h3>
                                        <p>
                                            Tailored line. Wool mix fabric. Long design. Long buttoned
                                            sleeve. Lapel with notch. Back slit. Two pockets with
                                            flaps on the front. Button up. Inner lining. Inner pocket.
                                            Back length 95.0 cm.
                                        </p>
                                        <h3>Material &amp; Washing Instructions</h3>
                                        <p>
                                            Composition: 51% wool,45% polyester,2% acrylic,2% viscose.
                                            <br />
                                            Lining: 53% cotton,47% polyester.
                                            <br />
                                            Sleeve lining: 100% polyester
                                        </p>
                                        <ul className="tab__features">
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-washing.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>No Washing</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-bleach.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>do not bleach</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-ironing.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>ironing max 110 0 c / 230 0 f</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-dry-cleaning.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>dry cleaning perchloroethylene</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-tumble-dry.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>do not tumble dry</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End content */}
                                </div>
                                {/* End accordion */}
                                {/* Accordion */}
                                <div className="accordion js-accordion">
                                    {/* Title */}
                                    <div className="accordion__title js-accordion-title">
                                        Ship &amp; return
                                    </div>
                                    {/* End title */}
                                    {/* Content */}
                                    <div className="accordion__content js-accordion-content">
                                        <h3>Shipping</h3>
                                        <ul>
                                            <li>
                                                Complimentary ground shipping within 1 to 7 business
                                                days
                                            </li>
                                            <li>
                                                In-store collection available within 1 to 7 business
                                                days
                                            </li>
                                            <li>
                                                Next-day and Express delivery options also available
                                            </li>
                                            <li>
                                                Purchases are delivered in an orange box tied with a
                                                Bolduc ribbon.
                                            </li>
                                            <li>
                                                See the delivery FAQs for details on shipping methods,
                                                costs and delivery times
                                            </li>
                                        </ul>
                                        <h3>Returns &amp; Exchanges</h3>
                                        <ul>
                                            <li>Easy and complimentary, within 14 days</li>
                                            <li>See conditions and procedure in our return FAQs</li>
                                            <li>
                                                Customer is responsible for shipping charges when making
                                                returns and shipping/handling fees of original purchase
                                                is non-refundable.
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End content */}
                                </div>
                                {/* End accordion */}
                                {/* Accordion */}
                                <div className="accordion js-accordion">
                                    {/* Title */}
                                    <div className="accordion__title js-accordion-title">
                                        Review (3)
                                    </div>
                                    {/* End title */}
                                    {/* Content */}
                                    <div className="accordion__content js-accordion-content">
                                        <h3 className="review__title">Customer’s Review (2)</h3>
                                        {/* Review */}
                                        <div className="review d-flex">
                                            {/* Avatar */}
                                            <div className="review__avatar">
                                                <img
                                                    alt="Image"
                                                    data-sizes="auto"
                                                    data-srcset="assets/images/default/avatar_1.jpg 1560w,
                  assets/images/default/avatar_1.jpg 3120w"
                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                    className="lazyload"
                                                />
                                            </div>
                                            {/* End avatar */}
                                            {/* Details */}
                                            <div className="review__details">
                                                {/* Title and rating */}
                                                <div className="review__title-and-rating d-flex">
                                                    {/* Name */}
                                                    <div className="review__title">
                                                        Quality product &amp; very comfortable!
                                                    </div>
                                                    {/* End name */}
                                                    {/* Rating */}
                                                    <div className="review__rating">
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                    </div>
                                                    {/* End rating */}
                                                </div>
                                                {/* End title and rating */}
                                                {/* Content */}
                                                <div className="review__content">
                                                    Thanks to the precious advice of the store owner, I
                                                    choose this wonderful product. I absolutely love it!
                                                    Additionally, my order was sent very quickly. I'm a
                                                    happy customer and I'll order again!
                                                </div>
                                                {/* End content */}
                                                {/* Meta */}
                                                <div className="review__meta">
                                                    <span>andy robertson.</span> on 25 April, 2022
                                                </div>
                                                {/* End meta */}
                                            </div>
                                            {/* End details */}
                                        </div>
                                        {/* End review */}
                                        {/* Review */}
                                        <div className="review d-flex">
                                            {/* Avatar */}
                                            <div className="review__avatar">
                                                <img
                                                    alt="Image"
                                                    data-sizes="auto"
                                                    data-srcset="assets/images/default/avatar_2.jpg 1560w,
                  assets/images/default/avatar_2.jpg 3120w"
                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                    className="lazyload"
                                                />
                                            </div>
                                            {/* End avatar */}
                                            {/* Details */}
                                            <div className="review__details">
                                                {/* Title and rating */}
                                                <div className="review__title-and-rating d-flex align">
                                                    {/* Name */}
                                                    <div className="review__title">Awesome product</div>
                                                    {/* End name */}
                                                    {/* Rating */}
                                                    <div className="review__rating">
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                    </div>
                                                    {/* End rating */}
                                                </div>
                                                {/* End title and rating */}
                                                {/* Content */}
                                                <div className="review__content">
                                                    I love it &amp; certainly that i’ll buy it once again.
                                                    Perfection experience!
                                                </div>
                                                {/* End content */}
                                                {/* Meta */}
                                                <div className="review__meta">
                                                    <span>Alexander Arnold.</span> on 25 April, 2022
                                                </div>
                                                {/* End meta */}
                                            </div>
                                            {/* End details */}
                                        </div>
                                        {/* End review */}
                                        <h3>Add A Review</h3>
                                        {/* Form */}
                                        <form className="review__form">
                                            {/* Required fields */}
                                            <div className="form__required-fields">
                                                Your email address will not be published. Required
                                                fields are marked<span>*</span>
                                            </div>
                                            {/* End required fields */}
                                            {/* Your rating */}
                                            <div className="form__your-rating d-flex align-items-center">
                                                <div className="your-rating__title">Your rating</div>
                                                <div className="your-rating__content js-rating-content">
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={1}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={2}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={3}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={4}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={5}
                                                    />
                                                    <div className="d-none">
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={1}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={2}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={3}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={4}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={5}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End your rating */}
                                            {/* Form group */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-group__input"
                                                    placeholder="Give your review a tittle "
                                                />
                                            </div>
                                            {/* End form group */}
                                            {/* Form group */}
                                            <div className="form-group">
                        <textarea
                            placeholder="Write your review here"
                            className="form-group__textarea"
                            rows={3}
                            defaultValue={""}
                        />
                                            </div>
                                            {/* End form group */}
                                            {/* Row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-group__input"
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-group__input"
                                                            placeholder="Your E-mail*"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                            </div>
                                            {/* End row */}
                                            {/* Form checkbox */}
                                            <div className="form-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox1"
                                                    className="form-checkbox__input"
                                                />
                                                <label
                                                    className="form-checkbox__label"
                                                    htmlFor="checkbox1"
                                                >
                                                    Save my name &amp; email in this browser for next time
                                                    i comment
                                                </label>
                                            </div>
                                            {/* End form checkbox */}
                                            {/* Action */}
                                            <div className="form__action">
                                                <button type="submit" className="second-button">
                                                    Submit review
                                                </button>
                                            </div>
                                            {/* End action */}
                                        </form>
                                        {/* End form */}
                                    </div>
                                    {/* End content */}
                                </div>
                                {/* End accordion */}
                                {/* Accordion */}
                                <div className="accordion js-accordion">
                                    {/* Title */}
                                    <div className="accordion__title js-accordion-title">
                                        Ask a question
                                    </div>
                                    {/* End title */}
                                    {/* Content */}
                                    <div className="accordion__content js-accordion-content">
                                        {/* Form */}
                                        <form className="contact-page__form">
                                            {/* Form group */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-group__input"
                                                    placeholder="Subject (optional)"
                                                />
                                            </div>
                                            {/* End form group */}
                                            {/* Form group */}
                                            <div className="form-group">
                        <textarea
                            placeholder="Write your question here"
                            className="form-group__textarea"
                            rows={5}
                            defaultValue={""}
                        />
                                            </div>
                                            {/* End form group */}
                                            {/* Row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-group__input"
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-group__input"
                                                            placeholder="Your E-mail*"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                            </div>
                                            {/* End row */}
                                            {/* Action */}
                                            <div className="form__action">
                                                <button type="submit" className="second-button">
                                                    Ask a question
                                                </button>
                                            </div>
                                            {/* End action */}
                                        </form>
                                        {/* End form */}
                                    </div>
                                    {/* End content */}
                                </div>
                                {/* End accordion */}
                            </div>
                            {/* End mobile tabs */}
                            {/* Product tabs */}
                            <ul className="product__tabs d-flex">
                                <li>
                                    <a href="#" className="js-open-tab" data-id={1}>
                                        Description
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="js-open-tab" data-id={2}>
                                        Ship &amp; return
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="js-open-tab" data-id={3}>
                                        Review (3)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="js-open-tab" data-id={4}>
                                        Ask a question
                                    </a>
                                </li>
                            </ul>
                            {/* End product tabs */}
                            {/* Tab description */}
                            <div className="tab js-tab" data-id={1}>
                                <div className="tab__overlay js-close-tab" />
                                {/* Tab content */}
                                <div className="tab__content">
                                    {/* Heading */}
                                    <div className="tab__heading d-flex align-items-center">
                                        {/* H3 */}
                                        <h3 className="tab__h3">Description</h3>
                                        {/* End h3 */}
                                        {/* Close */}
                                        <div className="tab__close">
                                            <a href="#" className="js-close-tab">
                                                <i className="lnil lnil-close" />
                                            </a>
                                        </div>
                                        {/* End close */}
                                    </div>
                                    {/* End heading */}
                                    {/* Description */}
                                    <div className="tab__description">
                                        <h3>Introduce</h3>
                                        <p>
                                            Tailored line. Wool mix fabric. Long design. Long buttoned
                                            sleeve. Lapel with notch. Back slit. Two pockets with
                                            flaps on the front. Button up. Inner lining. Inner pocket.
                                            Back length 95.0 cm.
                                        </p>
                                        <h3>Material &amp; Washing Instructions</h3>
                                        <p>
                                            Composition: 51% wool,45% polyester,2% acrylic,2% viscose.
                                            <br />
                                            Lining: 53% cotton,47% polyester.
                                            <br />
                                            Sleeve lining: 100% polyester
                                        </p>
                                        <ul className="tab__features">
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-washing.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>No Washing</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-bleach.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>do not bleach</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-ironing.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>ironing max 110 0 c / 230 0 f</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-dry-cleaning.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>dry cleaning perchloroethylene</span>
                                            </li>
                                            <li>
                                                <p>
                                                    <img
                                                        src="assets/images/default/icon-tumble-dry.png"
                                                        alt="Icon"
                                                    />
                                                </p>
                                                <span>do not tumble dry</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End description */}
                                </div>
                                {/* End tab content */}
                            </div>
                            {/* End tab description */}
                            {/* Tab ship & return */}
                            <div className="tab js-tab" data-id={2}>
                                <div className="tab__overlay js-close-tab" />
                                {/* Tab content */}
                                <div className="tab__content">
                                    {/* Heading */}
                                    <div className="tab__heading d-flex align-items-center">
                                        {/* H3 */}
                                        <h3 className="tab__h3">Ship &amp; return</h3>
                                        {/* End h3 */}
                                        {/* Close */}
                                        <div className="tab__close">
                                            <a href="#" className="js-close-tab">
                                                <i className="lnil lnil-close" />
                                            </a>
                                        </div>
                                        {/* End close */}
                                    </div>
                                    {/* End heading */}
                                    {/* Description */}
                                    <div className="tab__description">
                                        <h3>Shipping</h3>
                                        <ul>
                                            <li>
                                                Complimentary ground shipping within 1 to 7 business
                                                days
                                            </li>
                                            <li>
                                                In-store collection available within 1 to 7 business
                                                days
                                            </li>
                                            <li>
                                                Next-day and Express delivery options also available
                                            </li>
                                            <li>
                                                Purchases are delivered in an orange box tied with a
                                                Bolduc ribbon.
                                            </li>
                                            <li>
                                                See the delivery FAQs for details on shipping methods,
                                                costs and delivery times
                                            </li>
                                        </ul>
                                        <h3>Returns &amp; Exchanges</h3>
                                        <ul>
                                            <li>Easy and complimentary, within 14 days</li>
                                            <li>See conditions and procedure in our return FAQs</li>
                                            <li>
                                                Customer is responsible for shipping charges when making
                                                returns and shipping/handling fees of original purchase
                                                is non-refundable.
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End description */}
                                </div>
                                {/* End tab content */}
                            </div>
                            {/* End tab ship & return */}
                            {/* Tab reviews  */}
                            <div className="tab js-tab" data-id={3}>
                                <div className="tab__overlay js-close-tab" />
                                {/* Tab content */}
                                <div className="tab__content">
                                    {/* Heading */}
                                    <div className="tab__heading d-flex align-items-center">
                                        {/* H3 */}
                                        <h3 className="tab__h3">Review (3)</h3>
                                        {/* End h3 */}
                                        {/* Close */}
                                        <div className="tab__close">
                                            <a href="#" className="js-close-tab">
                                                <i className="lnil lnil-close" />
                                            </a>
                                        </div>
                                        {/* End close */}
                                    </div>
                                    {/* End heading */}
                                    {/* Description */}
                                    <div className="tab__description">
                                        <h3 className="review__title">Customer’s Review (2)</h3>
                                        {/* Review */}
                                        <div className="review d-flex">
                                            {/* Avatar */}
                                            <div className="review__avatar">
                                                <img
                                                    alt="Image"
                                                    data-sizes="auto"
                                                    data-srcset="assets/images/default/avatar_1.jpg 1560w,
                  assets/images/default/avatar_1.jpg 3120w"
                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                    className="lazyload"
                                                />
                                            </div>
                                            {/* End avatar */}
                                            {/* Details */}
                                            <div className="review__details">
                                                {/* Title and rating */}
                                                <div className="review__title-and-rating d-flex">
                                                    {/* Name */}
                                                    <div className="review__title">
                                                        Quality product &amp; very comfortable!
                                                    </div>
                                                    {/* End name */}
                                                    {/* Rating */}
                                                    <div className="review__rating">
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                    </div>
                                                    {/* End rating */}
                                                </div>
                                                {/* End title and rating */}
                                                {/* Content */}
                                                <div className="review__content">
                                                    Thanks to the precious advice of the store owner, I
                                                    choose this wonderful product. I absolutely love it!
                                                    Additionally, my order was sent very quickly. I'm a
                                                    happy customer and I'll order again!
                                                </div>
                                                {/* End content */}
                                                {/* Meta */}
                                                <div className="review__meta">
                                                    <span>andy robertson.</span> on 25 April, 2022
                                                </div>
                                                {/* End meta */}
                                            </div>
                                            {/* End details */}
                                        </div>
                                        {/* End review */}
                                        {/* Review */}
                                        <div className="review d-flex">
                                            {/* Avatar */}
                                            <div className="review__avatar">
                                                <img
                                                    alt="Image"
                                                    data-sizes="auto"
                                                    data-srcset="assets/images/default/avatar_2.jpg 1560w,
                  assets/images/default/avatar_2.jpg 3120w"
                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                    className="lazyload"
                                                />
                                            </div>
                                            {/* End avatar */}
                                            {/* Details */}
                                            <div className="review__details">
                                                {/* Title and rating */}
                                                <div className="review__title-and-rating d-flex align">
                                                    {/* Name */}
                                                    <div className="review__title">Awesome product</div>
                                                    {/* End name */}
                                                    {/* Rating */}
                                                    <div className="review__rating">
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                        <i className="lnir lnir-star-filled active" />
                                                    </div>
                                                    {/* End rating */}
                                                </div>
                                                {/* End title and rating */}
                                                {/* Content */}
                                                <div className="review__content">
                                                    I love it &amp; certainly that i’ll buy it once again.
                                                    Perfection experience!
                                                </div>
                                                {/* End content */}
                                                {/* Meta */}
                                                <div className="review__meta">
                                                    <span>Alexander Arnold.</span> on 25 April, 2022
                                                </div>
                                                {/* End meta */}
                                            </div>
                                            {/* End details */}
                                        </div>
                                        {/* End review */}
                                        <h3>Add A Review</h3>
                                        {/* Form */}
                                        <form className="review__form">
                                            {/* Required fields */}
                                            <div className="form__required-fields">
                                                Your email address will not be published. Required
                                                fields are marked<span>*</span>
                                            </div>
                                            {/* End required fields */}
                                            {/* Your rating */}
                                            <div className="form__your-rating d-flex align-items-center">
                                                <div className="your-rating__title">Your rating</div>
                                                <div className="your-rating__content js-rating-content">
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={1}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={2}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={3}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={4}
                                                    />
                                                    <i
                                                        className="lnir lnir-star-filled js-rating"
                                                        data-value={5}
                                                    />
                                                    <div className="d-none">
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={1}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={2}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={3}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={4}
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            className="js-rating-input"
                                                            defaultValue={5}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End your rating */}
                                            {/* Form group */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-group__input"
                                                    placeholder="Give your review a tittle "
                                                />
                                            </div>
                                            {/* End form group */}
                                            {/* Form group */}
                                            <div className="form-group">
                        <textarea
                            placeholder="Write your review here"
                            className="form-group__textarea"
                            rows={3}
                            defaultValue={""}
                        />
                                            </div>
                                            {/* End form group */}
                                            {/* Row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-group__input"
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-group__input"
                                                            placeholder="Your E-mail*"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                            </div>
                                            {/* End row */}
                                            {/* Form checkbox */}
                                            <div className="form-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox2"
                                                    className="form-checkbox__input"
                                                />
                                                <label
                                                    className="form-checkbox__label"
                                                    htmlFor="checkbox2"
                                                >
                                                    Save my name &amp; email in this browser for next time
                                                    i comment
                                                </label>
                                            </div>
                                            {/* End form checkbox */}
                                            {/* Action */}
                                            <div className="form__action">
                                                <button type="submit" className="second-button">
                                                    Submit review
                                                </button>
                                            </div>
                                            {/* End action */}
                                        </form>
                                        {/* End form */}
                                    </div>
                                    {/* End description */}
                                </div>
                                {/* End tab content */}
                            </div>
                            {/* End tab reviews */}
                            {/* Tab ask a question */}
                            <div className="tab js-tab" data-id={4}>
                                <div className="tab__overlay js-close-tab" />
                                {/* Tab content */}
                                <div className="tab__content">
                                    {/* Heading */}
                                    <div className="tab__heading d-flex align-items-center">
                                        {/* H3 */}
                                        <h3 className="tab__h3">Ask a question</h3>
                                        {/* End h3 */}
                                        {/* Close */}
                                        <div className="tab__close">
                                            <a href="#" className="js-close-tab">
                                                <i className="lnil lnil-close" />
                                            </a>
                                        </div>
                                        {/* End close */}
                                    </div>
                                    {/* End heading */}
                                    {/* Description */}
                                    <div className="tab__description">
                                        {/* Form */}
                                        <form className="contact-page__form">
                                            {/* Form group */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-group__input"
                                                    placeholder="Subject (optional)"
                                                />
                                            </div>
                                            {/* End form group */}
                                            {/* Form group */}
                                            <div className="form-group">
                        <textarea
                            placeholder="Write your question here"
                            className="form-group__textarea"
                            rows={5}
                            defaultValue={""}
                        />
                                            </div>
                                            {/* End form group */}
                                            {/* Row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-group__input"
                                                            placeholder="Full Name"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Form group */}
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-group__input"
                                                            placeholder="Your E-mail*"
                                                        />
                                                    </div>
                                                    {/* End form group */}
                                                </div>
                                            </div>
                                            {/* End row */}
                                            {/* Action */}
                                            <div className="form__action">
                                                <button type="submit" className="second-button">
                                                    Ask a question
                                                </button>
                                            </div>
                                            {/* End action */}
                                        </form>
                                        {/* End form */}
                                    </div>
                                    {/* End description */}
                                </div>
                                {/* End tab content */}
                            </div>
                            {/* End tab ask a question */}
                        </div>
                        {/* End product right */}
                    </div>
                    {/* End product main */}
                </div>
                {/* End container */}
            </div>
            {/* End product */}
            {/* Sticky add to cart */}
            <div className="sticky-add-to-cart js-sticky-add-to-cart">
                {/* Container */}
                <div className="container container--type-2">
                    {/* D-flex */}
                    <div className="sticky-add-to-cart__d-flex d-flex align-items-center">
                        {/* Product image */}
                        <div className="sticky-add-to-cart__product-image">
                            <p>
                                <img alt="Image" src="assets/products/1/2_1-a.jpg" />
                            </p>
                        </div>
                        {/* End product image */}
                        {/* Product name */}
                        <div className="sticky-add-to-cart__product-name">
                            Double-breasted wool tailored coat
                        </div>
                        {/* End product name */}
                        {/* Product price */}
                        <div className="sticky-add-to-cart__product-price">$49.5</div>
                        {/* End product price */}
                        {/* Product options */}
                        <div className="sticky-add-to-cart__product-options d-flex align-items-center">
                            {/* Color */}
                            <div className="sticky-add-to-cart__color">
                                <p style={{ background: "#af957c" }} />
                                <span>Brown</span>
                            </div>
                            {/* End color */}
                            {/* Standard option */}
                            <div className="sticky-add-to-cart__standard-option">
                                Choose your size
                            </div>
                            {/* End standard option */}
                        </div>
                        {/* End product options */}
                        {/* Quantity */}
                        <div className="sticky-add-to-cart__quantity">
                            <div className="sticky-add-to-cart-quantity__minus js-quantity-down">
                                <a href="#">
                                    <i className="lnil lnil-minus" />
                                </a>
                            </div>
                            <input
                                type="text"
                                defaultValue={2}
                                className="sticky-add-to-cart-quantity__input js-quantity-field"
                            />
                            <div className="sticky-add-to-cart-quantity__plus js-quantity-up">
                                <a href="#">
                                    <i className="lnil lnil-plus" />
                                </a>
                            </div>
                        </div>
                        {/* End quantity */}
                        {/* Add to cart */}
                        <div className="sticky-add-to-cart__add-to-cart">
                            <a href="#" className="second-button">
                                Add to cart
                            </a>
                        </div>
                        {/* End add to cart */}
                    </div>
                    {/* End d-flex */}
                </div>
                {/* End container */}
            </div>
            {/* End sticky add to cart */}
        </div>
    );
};

export default ProductDetail;
