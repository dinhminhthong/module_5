import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findAll} from "../../service/ProductService";
import Navbar from "../home/Navbar";
import {CartContext, CartProvider} from "../../context/CartContext"

function ProductList() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    const [itemsToShow, setItemsToShow] = useState(3); // Số sản phẩm hiển thị ban đầu
    const [itemsPerLoad, setItemsPerLoad] = useState(3);// số sản phẩm bạn muốn hiển thị sau khi bấm load more
    useEffect(() => {
        const getALl = async () => {
            let rs = await findAll()
            setProduct(rs)

        }
        getALl()
    }, []);

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    const handleAddToCart = (productId) => {
        cart.push({
            id: productId,
        });
        console.log(cart);
    }

    return (
        <CartProvider>
            <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-2"/>
                            <h2 className="mb-0">+0703510324</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="home.html" className="navbar-brand ms-lg-5">
                                <h1 className="m-0 display-4 text-primary">
                                    <span className="text-secondary">Cow</span>Farm
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-end">
                            <a
                                className="btn btn-primary btn-square rounded-circle me-2"
                                href="#"
                            >
                                <i className="fab fa-twitter"/>
                            </a>
                            <a
                                className="btn btn-primary btn-square rounded-circle me-2"
                                href="#"
                            >
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a
                                className="btn btn-primary btn-square rounded-circle me-2"
                                href="#"
                            >
                                <i className="fab fa-linkedin-in"/>
                            </a>
                            <a className="btn btn-primary btn-square rounded-circle" href="#">
                                <i className="fab fa-instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
           <Navbar />
            <div className="container-fluid about pt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                                <img className="img-fluid mt-auto mx-auto"
                                     src="data:image/webp;base64,UklGRkBcAABXRUJQVlA4WAoAAAAQAAAAbgEA8wEAQUxQSL4PAAANwMBs/yS1kb65z7Jz4EWyKBawaiGQA5PK9qgQavYy5TVqr5dxyMZNZCaNDRlvek8m0632HC2Tw9mjCRE4dE6wJ3dk5nCZvdxCILWosZFioiA0YHUxB3FLY6f28GbvtQ3dVf/6/357KiImADKuN9didWHJBY/rmU8DqG2uf/fc6sKSy15mGjc12mubP/5eYWbR4Sw9jY1roeq2Jmclt7Dk8pTy1yilURdu/vgH52cWHX6yUHJtR0tbk3NudcFmpQmU2Wivbd6az9hsFIMXtVB8wGYis8sTAOZTFgspr8OzZ1I2B1nw8KmvOfwzAS9r6QfYJwZvG3uSzGN2eQyJaZt11Ofg+VMPss5fwftaOMs4E/Dj+B+4bBODPx97gmvMLp/sf4NplNfhU22HxTLqC/DtgZMco78N/4bec/lFH4WPtY8vsYs+Cl83L3CLPgp/Dz7FLafgc22HxSsT8H08wyrH4H+zaDOKvksASKcYZR4iNIs2m4xCjJk4l+i6IIzGLJPMQ5TjJ2wWGYU4Tx12GUTdIxDtGZN0esWs64XnIFJjT5JwZyrwC0mrfCbEmpi2yRYDoA0Xe8p2RjA49SDZBnF9dCBulycG0WoHk0TTcWMjcyJbDuVPhYPEhEOz5psA441xu3SPQcCvPkCz8AZgZKaTpVJ7RGQ0ZklWtxEgsSdul6YfQh7vo5jy2Y3ByEyPOSVQe8SEY0mC3bJtE0Ci/8lnNzcEQScmHHpduWVTwIg+8ewm1LCo8Nwhet2CUoZ6vnpkytlIP4RtFm1yPVcSACORiXfsmyi/Ky5k4tQyUfrEvn+5cHHKAfSvQODGFotY3ywDENp5Z+QnIQg+laaV/omyXB+C6I0tFqn2IfjPHHIo1S4BKFy7vFJYXbBJpKoyAG1bXXVt89Z84R2bPB2QSC1UvU+fzL3mkqZWJm4YDXefPmkRplo6AEQPbElbZKmTEcBIbUlbNFE+KyeAkSrmshSR2Wg4nyVIvcQA429Z9JDcM+eT5KiQGyT2POAQQ3qNVw9ZrAaceSvLaxj/IMlrSNzRw2uIDpguq8E4ut+lwmKTFME4alLBcQwpgnG8lQhYqZMjGAM9RMjEJQnRO5I0sLdqkoTEB1kS4NFhWcL4CZsE1q0hWcKpwy4FcGREmrTff4QE9olxWUK0aFEA2SpTljCcdCmAQ3+syZLW9QQJnK+dkiUkJhwKwB6YlyUMJUgAe2BelqI5hwSwB05pcoShBA1gHz5mylH0tEsDuPe3JaQI3a8RAUieH9ZkqPdFMsA6/semBBmOQwY4h3BGftBxlg6AtXu0X3rCOUoAA3balJy6FVrATuGM3Gy75tICsL43IjXax5eogWfViMygokgORCelhqKuIjVtM/TAVERmSDq9S2ZWKSK3axTJh2SGpLYuM0WKYCoiL8v/SpLpXfIClyRTEXm5DJI6PwlJywpNMNEjLQWivPKQtKwSxZ01ZWWBKEilJWX5KlXsoiknb4Csl2rk5B26SOryVWZ7CnQ9vVdKXiOMZcpIHyh7ZERCXiPNsztM6dgN2t7/FVMyJkFcd7pLLuZGqYMw5PIBkDcTF5uVSRleWv41cG8K6cYu0zNzKRB4n9j6AGTfKj68M+SJoe+Dwu1Cm7yG6+3nL/wk0mmWa/lRkFj5rNAyuLnzN9+ZrQ91mqWbezEHGrvvhUS2tAG4cJfy31us3Neyxdjccv7khyBzHQQ+h8076++c//Cjir015s2sYm7hX0HplTqBnSvBDe3i6Uuzt1SioriOKyB3LiywsVJd715ZRxHMvBssebZOE9Xcv/FE5RYI2+UIxY1D2C+CGdWmthZ8TIGwJ6+xgvJQz3YIPgNGVCOPQ/zrfKA8tQcBOAk2NF9HIGbY4FgLAnEOTKi+imBcTjGB/jYC8inwoJlGUK7xgBkHq+tpBOakzgHKXyMw50bBgRYCc/kgOHACwaldcxgghiDtH6OfejRIJn8R9H8VgbpIvxgCte7v1qmn/GmwxEH+x8Dr+q6AmX8/d9YhXRpBGw13TIw5dNMrAgdAon/iCZdqDyOYE11Ji2T6wwhqbfh8kl7mgQYEeGKP6dIq1ouAN55pd+mkdvQi+LVn9rtE0vf1QAqNZ5IWhfR4A2RRGy5mbOqYBxogk9H49BMuZWK9kM5E12iWKmrHIGRUG2yM2xRR+3sgq0bm/UdcaujxMGQ2+vujWVLo8QZIrjbYmLbIYB5ogAQbqWLCIYEZhyxHhyaS8memINOJg49achfrhWRrw8WMLW+xXkh4ND79hCtnsV5IeqJrNCthsUHIuzbYGLclK9YLuTcy02OORMV6If+JX/tOVpZivSChNtiYtmQo1gsyGqliwpEdMwVSRocmklJjxkHOxJ60JS16GhQ1UsWMLSVmvAJEjcank/JhxkHZxMFHLbkwvwniasNb4rZEfLUT9DUy00+4sqAfBIkTXaNZSUiDyNpg+KmsDCitVAK0wca0FXjqOChtpM4nA049DmIn9sTtIFPGQW4jcyIbYBYoPp7PBtYEaD7+QTKgjoHqiTt6AslsIRuiHT0BpBwD4aN3JIPHAukTX0gGTQzET3yQDRb1KPUwfsIOlCHQ/9RhN0DMCgbQfv+R4FCOgQOjRSswHgMPntkdFGoPE+BYMiCGwIWJaTsQ9AY2QCYeCHHwofGRHQB6AyMgEw+AODjR+MgWnt7ACohnhBcHL0ZPu4JTw8yA7tcENwRu7H1RbGqYHQzHEVo/+LHjrND2M0Q4JzITDBmdFFmKI2Ba4lJVlmibEVc/WLL9nLgSPGG864rKBFO2zorqAFdUrQlKDXNFOCeoDnBlKC+oXrbQttpCUlW2QPOCkCLgy3BOSCOMUbciIh2MabzrCqidM9A6K6Avs0bVmnjU7awRzoknAtYM5cXTyRvaz1zRqE28gdZZ0TSBOavWRNPGHbWromnhjuqCYBSXO0J5wcDkDu1nrljqwZ6ts2Kp4I+qNbFU8Uftqli6+KO6IBYGrVsRitLKH9uuuSK5BfypLUOkTQyC+iWRVHFI84JIajlkDSJt4ZCqNZHcyiG1qwJRt3NIdUEglWD2ChapWxFIFYtsuyyQLhbRttriuFTDIagoCkM5ABatWhPGLeDRcE4YlUxStyKMZiYx3nVFcS+ToH5JFGzavCAI5XYuqV0VBEwuqS4Ioh5cGsr7Rt1EBZtoP3N9os6ObayNTVC/5A/zOfxwY7fxSfOCH9T+Fsw5G6vhk9pV7+n7eoC5YWxYaeWT6oLX9HgDgKHvY+P14NNQ3lt6vAGw3noNm61gFO1nrofMAw2AlUIJ9zIKWmc9Y6YAjA2hpDs5pWrNI3q8Auh7DSUOcUrtqifUoQagL4tSq+DU9nNeiB0FxgZR+kpW2Xa5fHoGsFIoZ4hVtK12uWKHgb41lHUXq6CiWKYJALtR5givtM2URc8AuA9lVsCr1YVymGnAuh/lrmeWUL5EKnCluwuYPImyh5hFu+aUQO3oagIuA+i7hvLvYhY0LW5K6T6K6zWgDwxdtbYZfRAbXPOC8ivcEs5twkxjo3tPe6Ae3Fq3siHlsRZsuP/7TvlC7GI4zgb0QWw2MlU+hm1avJnZik13fq98PfzSNnMjteML2PytPy9fiF+qCzfQD30MflTBtGpChz8jDBPKQ+34ZZR4onwcqx0tbPsYSj1Vvk6GQbQaJR9D+U2OKedg+VSw8n0of4SVxsDr+Ze8cCcn7YcXdzJSH7yoNPLRGDxZDz4e9EY7H90Hb7ax0RiYfdAjyq9w0W549BYwcf7nXolw0X7w+hg8u4uJnvdOhIfy8KwKHt7vnQgP3Qfv3slCR8DredtL/QyUj8PDKhh4P7zcxEBH4Okq/hn7F2/dyz75l8Dr+8Hru+H1ncwzBK8rjcxTXfDaLWDeaM7xWCX3oOOsx0LsE855jH9DeY/dyT7aNcdbNeyDpkVvXaphn7YZb/WDfasLnlLAv6G8p25hIO2a46UmBkLTopf+O3bbjJfaOMjbLdx2qYaB2s95qQbMfqmG2baDgbdd9tJPtjOQty/eyWz5ELPZOrPhvnn+yXvLPjHOPgVvIRtjH89XF7hn1WvOhQjzrHkNR0aYZ9Fzzk9CrLMM7x8ZYZ28D+x/CXFOwQd488uck5i2vXfiMOfg1IPec/8mwjna0R7PYXoX5yD6vu25H+1gHWTinptt5R3jI9tr7nsh1kE84zVc2Mk70dOu1y7eyTuoX/LaVIR5Kopeu3IL83jffS/EO4uew0QP68zB+//4GdY554OFZtaZ8YGts86sDzAZZZw5+FD5DBh3xQ/d4NycH2pZZ8EP7ZyzfNUPrJuHH1/sZZyCL7L5cb6Z8QWyfaP9XLPoD2DAnueZZfjW/u1XDY7J+wdO3zMawxR8BPe3/ophZvyEDjBs0U/qUYZZvuqnfjDsZfi5hWNWfHWphmEKvrp4J8PM+OqVhxim6Cv328f5Zd1XOHGYXZbhb/fbx7nF90+vH2eWvN/w9C9FeEWAex+O8Br2JkKcUhAAvpQJMcqqCPClg/18IsiBe/p5DQP/PM5ryL4VN3lkQRSwMouVoTtrTPZYEgbgrOcvXrLUynnkQ3wxB+E6PdiivoG5F3sNllgRj95djQNAHJ9/kCUK4pn/YyiPYxJcOSMcE/+Ah4Ac0MMTi8LZi8/9w+eANZhgyWUIdzs6vwegiDaeyItnelf472wglB/bHuGInHimIpgHMPLk3NcnOWJBPM7wcVxfGHbBkMtXxYOn149fh+PgyDxE/PS3b+k+DqY8KSS4V1779odMsSgmAO7XR1hiEuJ+5SGWyAnMVVjiNYHBMhliEgI3wZEZgelpjpiDuNW3wZFpgY2AI+c+FJe+nSXSEPc8OHIS4lbBko8IrJty1ltnKzNGSXZD4J10G5oBsB7feWf/5vogcLWOaPmJKdz42Yvfj9zZv7E+iLwbFM9PTGHDztTFk/XN9+4M3cBKQeSKS6/8hedRQndp4YcX8mpl6EcQvPs7xLIuPY9yOut5iF6to5T11lkEfiVonP/5+dWFJchgiD7WpYtTDuTxc7Q5kl9ywedHXoGEdtLlyCvg9LFBSOrVrTTpg7RWgqST1+QlRJOTYPa2GWnRidJ+TlqeJorxkS0rYaJg3zuS8kegavs5SaGr4Thy0kkWdJyVE8KGc1KitNAletqVEdK2zsqIqxCmbUZGSNt+TkpyYboYjiMjpO04KyPf6yRM7aqMvNZNmOqCjDgrYbpUFGWEtKYlI2odYeYUV0JGQNhtK5BP5Vcok4eE1oOyORnZR5qzMvJrlFmGhCqNlMnLSD2YvZk0ORlh9xi30XZNQpRG0hQl5BaQtqIoH+zexG07uO1ztKlak4//5q64tAnnpMP9TdrI6Ewbs3Xi/wuY4zZ2XwsmVlA4IFxMAAAQWwGdASpvAfQBPt1epk2opSOiLfdr4RAbiU3dzCqqSAmgNSSMMY5xQLozIU/KeyvkXD6KFeJ3yXe/4aPUJ/Yt5hz0fnPb91/SOmy9bj/OYRn/kf8F+D361/I35n7wHnb+iff/KavJ/Dd2H+SZ+f8/wV/avEdyC7Rrpv+b6FmB3hb/FeoN/ifQjw2/yXqHeUt4Gf3X1F+msj1VChIGzzapMn/7SJOsRZubse4CKwPOrWAFK1gBStXh9TUdqxrZAJN5GAVIiIHUrf0m0WuxQqPf+VfJKYxCdFsVVQoSBs9Hjd35ZUvKd+WdtmioBoslJvYq94naendOK2ZlLS3wRsTfG7EDayrYhTbiIhnerWAFK1gBStHVZ4VzLLoo3bwLaUjICzMgI/f6w8WYXR55nnamszgfxVFUAfAcqV66FFHDzP2GhSdTa+HoeWxPGaBTxmf/EPOMaz9dKlHqfXO/qG/DnRbDyMnS26NdlMqCW8AeaCdJ5/MN6S3SiySkIoFz3PL91XVD6IHMB703Ae43gfbRQPdH5r2EtIjWJioxz0aFllhGRo2eJTKESMKC3yNS8gmUR+cUb7ezfY1Rfzxt18F8dGuUuW1CQNno8b7dFBuKAPBAUmLeXdNdQFeHQvP0SERQdsR9FCZJnAnlZRNdY36TtOhxjCTsVNEpB5jatBFIeB5c3dfnM8rmqqhQkDZ6PFAMcnr6juSvHYDYD9Ahz4Y37mjvCTJseokWGexTiOOmXMe06iwZAZWFsw2Y+deK9UKEgbPR4pggGP0PAHkTefGZGAwUXe31rhA5wd1Cz2U0+Yvgj1OpYh+7UjgfsqhQzXXAe9NwHvRdZBxgUwFOov+nANaS+exYM1NnFSa95foCp9KaXGW9DN7+bUgOBDb6QXdN9HjfdR433TH/Uzyc6cULPBG6jvS0NMxkoX1I8tkWSsjdJOqkEokIKDotmbHyxmBwa7lcMNefU++Yrh/3SaA/oCVitiQnjNAofgMN+wBv9SQXIP6i3645gdklkM1bGajrDm98avKtQcjAYnDTJ5jd6cFJBxLtoQxv0bXlPnn6zmmQvWOiuPxYiQLNoVTEjTumLXbECO6E9UP0vzuUNHy0yaEakQzExJcUsrLj8+kYlAr6RMIeyqHAml8pEnYFeLcFX3xvMxrP3FVqwhlW3tUMyzMVvngPBYtYJNp2De33ifJQza9AFKND8B8NZgi64CLTRGIVP4vI+HXzPBvBR07PEKH2+0Lm2WcExcFIWrOFj9y7E63LzBh74KOXfHRcaBccNd1bxqX660/QfuXzBrV4+o9nWYOPbITEbCCJg/9UJglBJ4rUtI/P+CzxIRTLy2VtOoGWqAVDIWzGPaW8ax3EPGrayfet9R+zfWxl1BIUytCeNP3/P5ATUqGVKPBsD1eiqFeJglt1iMcxfhjDngQs0Iy7IZ6NSTYPSLM1ONa2aitbUWR7FbE+R9oYSnmCPZiXWNqWwbGQOl4c2FBuurELojZVGMhoWWYa0kZZlqFVcpsWLG/d5d1U7fEmTTFvRVDR91pKli8JYV/hXaQtkbPQvNMIJnA9yFykTWpmd6jbH0KPbnVCTrs9WJS3ZZ+FQvS9vx+0GSHyNzR3fP5DDEbxDQ+EzvNGjQn5KzqNhz4Z/YmOT3k07jFP9UmW2dt+9s1pxHHSv3fCEM4vlTJTW1quPngHOtDxhFY50LD5b1cqUmN+0ofbc3FRygjUrWEd2qS8zJfng7m3Qc7p044jckHeE2qtklLQ0d0MrKPILsheTWHXF4JIc2f+KZqPDgMXxpJtnngzX4760TpG/O5KxIh7bp7o7ichKmsxiu34MYCoTtPVNEyPVKjfVeyb1b2XojLGg3Z+SL+I+YXfTFLsUo0Fui7JVZyZXMEEIHNVJSDqn7EVHAL6vx/+yLXlAd8HKWEDEK0NWmKZkNalz52QxpkMSBJewa0lKq13HXfVyge4BEt88N7LS5zpmQwmFZuFhaV7rqfcXYCis0JYji9iwv7JDMzDS5WXBB/T/uK3j/uNZDJ6hjy1KaRNy8iCnCnPSTnpdMDc0cEyihjhqcipUunIZkm8MEO1ohdst9hRfJGpXRXP/NwkVb1Fr0tY12JMgOjlQAhvYUEoLXUEiBJdz0jPM2qgwyhCa4Ne5Oq7K1teQ18D6Rx8gs6usQclGHybHm8xL7WmPPc/zqvCokNkcVSwSRHH/0auiiIU9e+PqnsaTdoFzrG4F2TCyhHlKUR7g77jYs8dQpycjwa36f/+8Wj/vjt9Jw+xIr1tuUVfoU+CmQ9xBYl+xNrzJJT3wpsg74Webh04InBI8NuQIu+/XSEuBBZUgwOnKzb/xlafCoSf1UaUr7ppFgHLtTfyMk94xL0n1LHaPvYO0YrewxBBH4SvMKAzWsr3SivvBZ0KlqbmOZuulzTLeDfhDL8DQvB3bff7B+af5WE4YPphbF1827mrgrt3nTznrcO+CcdxBnBwA2z/9kTXYUxticVTNsbQB4g8qtc3ct5z7uFaZOIpiFHqHgeaahTYCjmq5c0NZdUFacvTUTOwK0Es3JnkQG0KB2ZMKevx2VgqfhzSebLsPpypdJkQsX/lWJfhRPk9yi5lFSGRM3oc8bRngioMe+6EWxCuVxnRCWu6IaKyxDkitqZBa7NhQFbgsVVZBYt08Qs51SD/5ltz9CqP6d7IZnPEEXIXXx/VKCC6wjFrYtqAALdIT1UOdQn5UHEGA/pgfZk1sbKDDw+Mz+YQtBTBVaBRdm5MxeoD8kQdw4Pqe1Z3s1DzBUQ1d1Xg00RLXtFO6oBDugP6LaUN4Ab9vhJg/9f1bJ63mLZr59FkLU3qn3Xr6F4J7HAHh9Ucqx/vZ4SMlWm+sUDGECpfVVVb2jNYFjtWPPbbFPgf1wcgI7Xdzoq7edt53nSaiPEr68ZETmHTm8lof4cYzcI7DmBvavs5h8SpEFgU3xvBeTR8m+YrU8MX9/raA0aGbG0ihI3eVwynPYJFqVmrUNXRW8xVQDsedrAT9rBAQ8L8rye4J/py4lTNNvzQdEK4W3SWHKO7r9PKCSfnTu6cg9xeLoTHw+ez9UUzGrTPo0ZhHMu76HT7uVlJrEDlRFqlvgvtiM5SZTDsJarE5+u5Vnoifxh4e3r9cTX/04/awiejHWzhqPV39eRiW5uPXPIXef/+A//RMAxaUnUfZ8uZamWbDOQv/Y9zP9LhzDxsqClxvLPiYGDBSTrDJA+YfIIVivCl9ZKOe4V2S4KjT+TDsPh7ErIlY+nzUHjbavOtgC/zdvmJTv7XNl8Uz/upvJaxjHlSKVw7v9HP9w+FdmmFpPZzi1Ky76hmIonzFrr0MogE82yPic9Rg6blOQfj4+YWM/IPvlM7UFrlGnSFr2M76sE2ge+jcDGExR0Z7g2//+l7qGwt91qD5F/ml55k/7nMxI1tPt9mbbMrJ8/7q1WY00ovgzYS4Q+E7owXqDW8tyWlUNm62KMdo3U8wuiYHgmziFI1lzS7+voNolZPzZ+Z7hyp6Q6Z+UI1SQvtjV0vCNIOd4ZOVjK1jdG2JCeMz/j7s+bJgKzojKPQP+P1Hwx0H3D40Sy0MSX2SLt4+KTyAvTH+NfnaSEFZ/E2i4zYTOTUuXNIe+awxPonAEaryhK4aYxGKqoUH5Qa1FOzhLGxhxOOFbFoIM19WPix9m61sFLKD38jwAncooy2qxJp9nA954KzegX/2qtX28wHvOgAAP7uUoAAxi0JW9EANOPvgO5E9LLjDlMxveEgxL7LytIauyYwsm/lEsNmK2Tr106+pltChRusqe8NoPRwaHjXXnUpgz6iFZ67/2OA5EwU+jbnk094EOma+458ecs0UYo726nLI5P98MiVd5vSLOaoQvppwt37EhpZLngCaFjtEijeud3wQBoCBlzd+/olu0FFooUpaI0CkmNuAAAAClMBaBweSv7vxKBo40AfgkjrNvnaiqXfdXqyq+FzN4hFl5cNiXE5fuiTTyOZsvg6wUAZ7PBYOD2IwBOEEQhopl0npiTqUCO6OcjhYE5jxE1rZeTXWkNcYxm3Jk5YM1ulnft9C2vb6+7z58qrdEgi9sk2jFNxAvV43uBcGTKitIgPYqJa2AfGfNyBCUvJj9QrOFgE/PUu6myipxB81xk7i6kMg0WxjOP3aItQuj9DYCFF9znxW9F6JNXiNhLpD0r9YiYW603JJ/LZ54W1jexEH65O1MeS0ikkFQ0gQRi5Pc7wOlO67202EhtUFLPn9ofYfxjDo2U+msD3OMhH7p3BdtWNBheOAHZsiYGiuY64AAAFqGFMX+vB1mrjE/FlaE6EJ3gzsM71c3XwBO/wJBHY+eyR/5FgDp/18HV63mFc6E2x/CiSwiKiTtoXTV45gLGFQrZM6jg+E0t2Rh5nTz0g/Z04Eq+At0SVmGw77zhae4jQiRRW24dDUAH9uNHiKpCDg5PIjTbOu/rdeDID1X8eoNcPzl/6tF6Cns4BBqAT0G5Y1qfqqF92MRp57jFRM7K9N7lXSXDwcsb2GLJKu20L1aOfTqBI7aaaS3KrQyKVzUPbdgPdmX/Z/XaF+dl1XrX5LizbZjlnDGVGxcvJETe0vebbF+nHDHdy36MD1Ux+rMSoVBWdo3taLFaheN75gAIuuP4yTbLf1DXXQB+SeCHZyWSdIxpHrvf0WALB9IHo7qiJLGm219xwS/PaqLVwVR2OyDt4NI4Ppi54gPqmYXrhYXv66omO5MAx6vgDj+McQEhxhaYQEksXbJdmQVlAP6W9B/bikf7WzGRe4AAAMIGT1Ls18IRwFK0C2790p79kuyMMozW+b8aF2wj6AHiYL2ifX6mO7H5E3zpE7eEO/oxwi8vBg9imBs4at/3TeMA8ezbWR4Tq06SxrhHQPaWXfuk9PkpzctKQSahAxhIeF/Gm5hXsbRm5VtuRITa4ZYalIxleR8y2cyQZrsujUZ2fhb4wD9d634/dl14DRChgcYfzvioVEUKK2RkUkTtEJ5hzEe6SOw3ttohTFmc8ubJNv+WCzNcDZ3T8tSKTun24W0xG496W15q9viEOAO4vqjTlOqC9sEg77C1P2vaSteg0fITLyMbwzYB/S5OD2hzcSEAuCgsQY1t78+gF6N4a3V08aYgJIhNGNtVW4i4l3DhPQfU2RST4OGQuK8GLAKr+W4pvNK4WhgxnwcpCAFQ2M1C8guqP+1xLbpRMBcn6B+C+XjZgKYoWo0w/BgsN+2KS7gLq/OHkssFegS64VppegBkSfS9lbE4Jlj9Cmo/SEru6EVj+109gkz/BomuKFAFLwg5GmnFbJMGJMJFelIDViiSuEbDu4QPtEg2Ao82LZsa+ViDLv95AqZ69HYnQQ1/CjG/mw2BKVMsmhKH8sQdcowP7Kzu+x2KZ3Q+UDsN7qdt7V4AAAEcjO7EAFulzsyFLYqB4BDOG7qQUaLg7uZjpIfPlUiY6xGyl15a72dznwJCDGblfIUEOxG32ehPtRGbsC1ormoB+tyjySLE+HXkDFq68wT08JX54xt5D/2aXI5N0nGhVPlX4OZIX5mSFm1ZCQFEHAUR+qOl0h2J7FIJz8ZeLn05iTYeK56mIwWIfDoZvhRQNFtKctPwpSBDRDOotjJzyxbu/hnc+BXDB8x0nmF9zWIQLVEHgQV1R2Aw+p0sx3suYd7QnjRvz5FOHLQITqOUKXPrguxufBgZBKPHeTm3+A0IGgY6PegThZUxYRd8ZMCCwTto548/KSBpdDDSmuQWvlo6XRc7tc6zkyiJVShGajYyL+Aoj4Ss1UTVVZubB/YXHySCmjiG7xPlzFuzRK0gIHef7SKdT3n8MU+WPkBr0Z5J1dCkKbA8vM6U0yw8REsG2zbE4Bx8I/wo/bVxG7BgVTqhloVv04gis7U8BZTL0j0gkeNPocim12KqWQCMVKdogClkXs06unPT/1mS9mahTOgNBK/AE96uP//dW2nKyv7oD3O+kAAAshAAHkTutKoPhr7tlYobqxmAxYWclDsBpMGaFwHh7dzLDZaAUMEMN9DWQa3dYJNqfnfp3Ha4Ss8aZj0ysidwEL4wIZvZul2vAeseb7Uy1k+BA4A8rNCSKOQya31+K8AiaPIcU0VMoAfsm38p7z7vTZ9fFSAHxX4qR5qBwfe0HMKZaKg8d9EPkWlQ1cOZ9KFSbEti8z/2hKNvtkK97BF7O78hinE+XMafC9gI1R2r4Hx1tx67gnmp/rxqj4jT9Co2M6xQ7EQsQNEbG6xI0GRGA9mKnoNbDtAqRIz3hMTqVlcDOMA9eT5hgQXZCpmETwlzeWEh4/gq19I6nX04JAvC5n7blf+XAGKUsPAB94/7qOjUBJjaTMkDjhXQnYEM2fjgTGCleZNno9xN+wIAe24MG6BXqjfd2drxyrEoNctIJfMRFsd98SyB9o57hTZmbtYcS0gnE6uPGWTwFfao6x71UPhzeS5gAAAR2iMigcmWq2IB6fGX3D/0Pfl/oLLPZDHGj3810kTEffNjhccmPG37xdvwB1fv6L1KiVwsNYkF7NmkuGM9czbyNObPfAg4Sf/abeU60Gf1WW+6lco2PkcbuNMw3pZ+qTp965NSj3MqmzB36mMSFFElfMswx9hm2X0mIWh9a2AkPh4VhbWLpTYnPsnsmbEehOioteumJVppt6ymeulE7yVzqjl/wYwOUK8TB5PBdiLOjV59WemsiGsP8GXgieIiUyWSzVqYn6xQi4P7Rq70niywF9cEzQDLZZMGBr4//M/G6eln4YBXnV/EFhm9ifbpQoumBfdUGhd7VvrV1qi6AECzPSbM8wWk4xTz4+6kQAADMovyCvxJOWLSVelww/8XSPWgUC4IzlDllJGLf59fjJ8MjSg+h6mJcT9QhAFwz3KK1lwGbeD1IwTengtJnV/I7HzrszPJHNGuIiwcO1UtlFN7cS5wl/SCeH5mtMCcPtxwV1d4IUhkaBUZ6WOGr6O7kah1bOTX2ABfEwyP2sH0WnI0cF3IoME8CgSCQscNzIEiQI8PqFXAoIGDPGuk4KxIZOGO9G2GVoVRizso5cmRpobmPvX3/AmOQk9o2jRlxw2YDT6cJJ05IGQtdblDQlk015W3X0diK4FcOFSXctZbh4RhhiZllpZhrvWet47BhEoX5mDMpuDB7h2/vmTfcuEEqecT/9IAQAS+gfAAARxon84aVk9Hfxb/CNZ0mIybS8Oh+jky0ugScfnSIanFYARFIXIkcYs8iVshsyGpZNCJVSw+Ek+QVAT/tvzb4WG1xWa+qMnOnv6Yk3ddNEcCRjDqq/Se9uMafHJtcXfYH2TKc453/jFJ+/QAJYue+t7r/IlAiPdSweNiploMGHU2P+xpNtx6WkMMGVnn+r8JocfxA9n9d3F/xUqyPotVpxodpz8fJGWQxhAG3XJO+zrbezubsenOACpfeKUuBeLmTgUtgPRsWyOq25C1EcIj1mvgRMf8qDj3QJ6aeNkySVBymu7S3//WCf/1dn//1Z1Q7miFHLG9xFT0AAE/X+Uz48VUqUGJv6b15cx4kM3QtdohkBPlMe9Y/gyD2QjJdbepL48tw9rbnFwbm5LFRZ9T4DDyt2wmL0n/xWZWQ5gPvCAYdLSZXNWaLVOFVKNcbfTSk3floJwzioIlHflntZHsJl7qDZN9ANu82gOlCwyD1K9aWRMJe6+RRTNNsQm2GJPhbwVdSQiUiDqMcF2OJeRwk3BXtAKmQ9u35jFEqI1AY5Z90/Ez6eYbnGHpXCutpH8EfaSmwlcH5tZkctS77qTiUpE9LOjQAABxDPq9O38qqwETIP3Af4W7imagnORba61zvrMUvgpch17ufZIVr3DL4b0e9/1ZhlhcoQCOkotsq6Ru1LzkAN/XpHG/tpuvVEfRMM6yX71FGhVB4T2mptsFYRXzzVpX+A3BWutln7UVMKq/eNw+S4RXL2jhmB4unihgtq4rK0AtR4S3mfO1UkZ4pZ2n6hfNiYSfS9nWXikjpIBKWokKjo84B6K+74TKr7cH8mNeV6OtDTOxPRYDT6gNS/d9hhRXvCZVs87bw+gufyWPI9pmXkd0v5VIhrOqb8yVLYJvl6Ete+90cm2aHz1mUkd12PEA6s1WEaiSkc6Dy+dhHjuOFr2L22sIwRYnJNI6yCVrFk3wKzc0T9ydbi8YUAM1k6fSMucx1dwigcT8sE3PPkTcAAB0Vi5eifP7JgLdvHxE47c8/82LV71K53EfsuuM4WK3sNGYBooDjFR4GGB/B8hzQ7rgKfqSOQDEPFLDE242nzZ4EZis/hSrogmVt2nnfVJCw/UG2dmOzoRJsB5LZrlxpNUGfaBcg11GjA2yLlRFIwLNVL++lZ2+yq8naF6JRRi3anx8Oy4XoDMzpfOdFDw8f2m/7XqUR9uVQJBsYXFiI8hQezXCU6F06QSYBOXDA0zM9g61q9M2tcE4PJQ5CtF2v76IK8rbFn0tV2zLlUTHdwv39etf4hDDbpRqBh3TW+KvXqhqbVAAzElqtoL7BG7BGOn8K+ey+caKX++QGOd544QPpZ+nWlCr2Il9QGF8OMgD1WWJhtH6Lz7cGOqzGXpSDgGjY3fbw4bYOE9+JXYi1qcx5SkrDAI/WiErD6Hvc41h4r44SmVkzi4lKMQFg+b+3DQuW4eIoEtBvZUGW4vhx5JZskkLZMm/roEwa3O7KSW5TYn2TccAkNsBLyGIQGbwpS2+MqcyuafOX7esHpuRHYW4AAAC6H6j3QSmN6xZK9jy/SiR0KzxgtXf2haBh/dvNGzVS76UsXK7hMNdHoc/M/kopvoXx+g6FDIATz9hEWGaVM9ykMjqiu6SgXgA8nyabJaJqxc+vhqzzl7yMntUTTHXqlSIk6e3qq3TDbSqzsoqbF+j1RsQbYeBxK7feBCWgCKufVe6QNe2odZSD8iMJDOsM1nq50ff9H1UsyOzsQKyV3ZrONVdj3MZD5j/a1ACIvURTmmHFVOpVJxQDoyFLrXkjAyodzlSxGSo+bXDgEqiY54R4Nvdgu/iUaKI7nPR8AlIE1FXjxqAf+jmLTeTcZ8fDJBhB0RfWs0RmklxrpZVCut2ExYSEtl3M2iIiyHpJSlTK0SKENwB4j6VxGzqsRf9++0p8zE7NhtX5KGW9QColPgZ4obXjK6PUeuE3GGcMJTOxYH5lBB+oZfyPCwTXwMGBhyapKd5U45HuUq+9Rt+tsCQReu7OnnRNrEhe9T/08crBVrYCWFkB+eBPtTXWqZoKQ/0uBdFEL31W1/HtGgr97rTB7SF62eKE11N3XfiUn/pVmQAD6DpTxP+xI94ZM9T2UCY48TnPBpCQWHS2ata0IUphmltvmoINZ8tKJkdvRn3wSZyw/IGd5Gm1J+GHlDy/pHFHByeAHQZYEBbMoEQoBscmyxaehAWpLUelPUQYjDM0vx1UZDZaGlQpAJU2N8QGtbC3npedV9i44EVhRHrrG/1BCMdLhG5B80AmVgH9MG0XGftqITIAwPLRAVgC1tmf3uId8U7m7uqNyHInyTzc171uqH0C/DA4arGASyKb1sOjt6K83ac3XtSvUNnJioqTBOg4KHXPZrlCL88i37ibFCTPc+O9/AimBTo0gIkrLWfxWY7XVtk9TPCDLkUYZF/dw8ViYejq/nfX8gzRV/y+dfLmYHghi6SQEfoTdOp6tU6eBDrIcBM4GhBIf8t15XsZviK7v95+7HOkE88jH5L96CtOLJRYo27xoAlxCWyBF3CzUTVIOLuvixHYE6W6I70G4yr90rwrMjA0JqKJWAIX9zcDGv/tDzeB+ATPmGDXNXsde3VSGiIX7g9sR6AkB2wvCIriy1RU7oOPE6zze/yghK7lAWQV41nQG3PiZcqzgHUq3sH+0QIuZHklF+6EhCkk0PTpZMV3I978dnd/K2aja9/kbUzxdAc1aMdml8XeAmydPS5+3wtylPir201Mq4WE9+b6b05X5JZ6xH1lXjkDPBAkc92+wFjcHyKycDfwV5VXvfmI0Asst6YGqN4ltq9utaRnKiS+DMwqtmvOOL81q0Xdv8x1+ZQJdHK3SUKo+VpcPAvC6kmnKMsEnn2+rrUOa8X2nImRSUUJUq2DkxQupyEYRobs8+GJxVTG/E9DudnPIHNDXReGgxUVMl2AIks8eaQv8bf2PAK5Ol/VD8GXyHe03h+LOQAT6tDK3txvtzn2/4Qp9wUqkbn/hB7RzNWT6NMcs1D81Uz+82Y4g7/d+GAN57d/qc3Rqx7PUAy5IrFK1VIjOwdouBLQDfrWmUqKMSBDJcfpXq1yQuTXhLwSH6friB5xVwG8O9miJujtGQQfmXy04bUTF5FhLlHhionK+BCtLVjrdCJRonjFTtOVk6BfmZqSwlXSQsPb/rXNJhQtMbdEupsDxBa2ZmdM7J54upUhN3UCHQOGjlB8AxhlVXMdvdzHt9CMGwa/SAL+0A/xuAOHATxxgCv1OoxEnKDcTvyF7ENkFpQQoXFgnnUwGciZQuPWi+BIfxKvgpw92oWiwkzm+Qrl02+aQ1P53sHFK4EeCgEV0ubtrB39HBGhPsTwSFBliaaEb6xTI1jitKKL5z6dMTQBe+8tY0Z5kbhbWKkT7KGpXzsNNfEuzx6wuXKQqIZ1IBmEn2kTUS2uHB4jdENHCk12CaE9DmXPyTSCTO3FoPONNZZFaM/4ghipnK/HigKsuxHlNBA08sWMX/tfamoHaw+xwyXSVAesU4DQb+QW5tLoNum4oAMJ5G0IJA7PMhns4OsjPup2rJpb7P8Vv6+wUVrLCeQ7piO1l5GKjW4ZsCJqH7HQRFjzSNaK22+LTX4iji1jPs29/rGpafQUDt38K/JD9E+9SCTdNy/f5n7oBncEcRz4cJqf/h1lb7C87JeZA4lFL9ENJQsbpmOuYC9mHybuD2WtAhdp6LvnXagoxT05DNKQ9Jd0+32qc98zLxmB8J/gLAQXxZdD+6/mKxdV5+Mwgry9jk43BR/RM3pwfovUhUd0LyIB6fQz3KPZgk2kS/1NVbzOxwRReJ0IiA+jaQyA9byrBh+v5AmGx9U9NS9FmGb0vMqUhBGTlhfv99m9DrCr1ozoqkLLLBrT6SEzH8NUhUV7h8dTJ4cxGXRyIM3HxHxo4nttl5QI6YAX+MEf7KqrC1ro6HT+M+9vsKhroPXYzM1SSf1NixrtuCdLR6ZFNclUOJ+KGXMfrnw5ft9T16IQIQUr2Cbj3b+4x9/C0/DUOUwCgIJiN4J0ARHpW8TDCrzX03lub7+wM1DIv1VuA7ubVxMvV+rzJo68FUVkD8I2m6uO1GhRNrBrjfIOJn4JicyTHELZuiPD9uLYeaYc/kwK1q0Qjgz7whNrzGfaUi74Gwu8op4oELxbXQCjV9BBjIRhIXrLsMqQBq95pp1oB/MPshzuDZxh23/yms/4Q9eiVRD2TBTb+FEnj/gm3vGYvISBtbTa3X0GlXBvN+trnFNIxPfJSGk3TprgkhDq2n+Sjh98aX6sR0YesfIEuuYWdZWka206FfCag66Ld00qDIzMoRIOUawpu7Fl9fEglu2smGysntlKmiKuHr0tICJX1P0dG3ywsPZnbZybbv2s+vd6peVWYlRCEkJ9KADKA0qF16lMhZ0o/nG4zUGO2P7uBd3sx3JmsZt2UgXJ9pxrZ4ghQ+FY2Whnl1f/yjLG3+j31wJP4TR25aE05LMV04Cf8TVD+ON0xBH4v3Xe3nEOaj6YvGls0Pa9HpoOkG6tjfC7OewrNcXLkM4BIQQ4ehGvQmgS4OLOOUJJKgQOB1bUnFqSFOcbMJi/kINN6Sp0sq2ODc0rChMipUC6izPmK9j9Ds5bPibWNyqGJD/81AIpjbdAzzNvPxDwsMorEe3kzzNEagN9POMPXJlhJKH/gQdBWK2m0JKmRodeqMwp8f0FWtg1qh+myI6iUwqP5WBfp37kspaIxu4pwrsB4pt6+A9aCgwtXqAc5IdW3j0C7VU0aBrp3FmDN1fCPUGFYhfALtu5D0t1Z7q3X0CJpPqqGxvLAx3h8Bbg8GUGuKMzkxv3WlpHxAX6HIA+Ak5m4z02eGcX/M1noUQIC5v2AS5DJjqS6i70jH9EkqtUWN0PaRkX6BjH1IPHi4YWVpNzm+EERY4lwmXtJJiDd+Ha21Cfy+3/8335k3xdZTrspb+AJBJDK4FttgpJs2i8moOGlsq6h20eYoI164t90T2r/PwvESjtKLbPz0aM/FoxUcu7GPFxDmcAa/y3o5PFMJNuAO9NWgdMRbT/GBLSe5KxjJrUhbH5himE2enCQwXSzdn/zr47vDfaIWcKKu2kVnZV4pxpPXgCKW01Azb6ddgw5lJledH5g9v/xBYqBb2W2WYxOElvyQU90ttI8c+QX6dosOfHPJPRNcAZqgwvKGaSpVYudR+E2/W5WJEYf45mMPXjmRIzRMK7qPi91NBHrfvuIr2a99VAsKCWTauH7TnvihCP8MPycRwSKQXX+VE+Vcs12SJJTZo5VRbpw22FUMSbxQsQyN0cRIut8pVSCwqrvpoG+qjjZe0ISvoZ2slay0RMTZgvayWarOdxXKOa4fMc44N4xbmDBrFJaOxNk6FObkibK7+UZCM+8euItamqOO184ULlxCBr2ESIHLIqaC+AeWbVw8McESsLQhURrACJfh9n7OIefIqWsHhTwR92KSz+7/u05TfMKBTz7pZq2LpP/nMm6bWecDfYox2mQLYWpwyYvU4eYp6byjBfi5ibR4jPnE9fLhGGhDpW3wmpW6cUN/HanNuJ03AxeE0H+ETECJLcc3DzWyJRVB9ihKsSQVamkYjYtZlbg7HvriJWLIFvd4nY2p+u59sNL9tBTHr9m4sRsH+pSaC1Y4s6P5fXZ8VeIhLt6cP96zHvjiB5d5yjeKVKvgpOi1ccTziZBMFz+sR60xUHPrMabQntnvug0F6gjyy/rHnRUgT7dQHj7U4fGmWjpYK6ajaCE4KeahkvtsStopTM+oolDt9CvGZU0tTKGUsvmqX7n6eqrCwDJmjZTlcAktRXLcb6rO0VGWsb2+ZcSC6wuXZ7hSa8w1Z31o4u1K3vonQqm8WOb8E1f96qfBkHXIgI7o3OzhLHFIcedXjwyyPSygDrfl3KgJ7k0LC+h+koMifDGTQ6Aq1o+MAz5gWWumTmpNSDyEb1bXdF4SLcXUTXaUItqDicj1lFmoV+oJCtny4XwKP1qwAO7ehHiG9Gw/I9yp7wIt4RvMhTcOwaEPtWwpn3v8Q/NvdmfnQ0gFza8YN1pjh3dB1Mk2cFytJKaPXl8lWqLaoQfNIRG0+Qi3Wi1gA0uRkWLVBaNJ5YwdxsfCi3MyBRdczYxIZovYkghcjN2S/7p9+h046bozjSDQvU6J88jS9oIKuDjTfvy9R4CcIXDN3DrJ+tVWPmlaXXpUzexZ0t8dfq0FNPwqOsCYvi5YyKeSOsfzChlbLzUx+rbC7ByPoBsxyftkB+cl4TdxGC1W02Kw0bI9NbUiDJ+5axF9Lw7w19CcZE1NW78Lm4DhktBG6y5zBsI2d16ucBEwvifrnQvVqRZ0crZMd6WGwqRXrcS+8QZkV9saRyrmIZBQB/CI8RvoCvdwxHBUf8huK9DEp2cPecavAqj8b9x5C+3Jh8Zj8Ol1ypC6T47JLoC1Rux4kHYfDSbxDU5JX6hffykTmgL68O/GAtaoHC6O+CkPCP7MKrLY4bS01wPj7cwgw8x3trNNi07xlV/AYQ4E2CpsB512K+9cKpsVm0QcmfMN5Pb5n6k5M+7qaGTOaxre8uyQEaCGHabrNS3bAaOGuWZR9C1HrenjZpBLb5bf7U+sVS/YYcWIH+9GHR0cbvbmlWBvZ5TkDOvJ+hM+H9V3E/125fBuVsqNiYLxJcq6qxS5Q8HkNT2wFNuoitWdITMOWVLWNP30lsmTLa4vymtetYoSr8XAb0SXrhV8MLqE196+RMimWdNXhJXzrr4g3cbBSXILbi/bTIYjerxJZs4Z1vlRQCP5DPIOKyfqwz+/OKJmGMJoDn1VR6ZF0R4lKt3Gyy+za7qlLXr5zFOv0AtaQGUregP1PKaBZvGRE5Vekc/AUz9auWGD08K8LlXoukRoI1bdvXV9J3WCCpIYlWFj7xZSRlYRhwvoz+xVcVJm4WHmpWlKifcGECV61J+gxFYEl6C8waD55rVpEh9VmxuRw92nvCviPh+e6DbnvI5N52azL1pqDQM1cOld4qx4rp4FuFFMY5xgfttT7bmJ5IL2YRvodi5+WTQe22rTNVNcK50+9xoG1/oxbJodCJlbP/wSnO5JTyBpD8fzykDFhPKLh9mw+4tTtQK0JO2fNG3g+wA/8etKSocA4FtBvR797jOWYmuAF1FhruZQWyTtj5dty5jAVWeqSHfQzT1tmu5g8p7WfxrZ6sf2BXdjW2mQEKJ+PX3HAWffRejVlAMcp+IS9/eeFxxy4H0OYlNqLtVx1mJSg+bII6/ee7sMkIyRQGRTpo+J837cjl9gg1RiEFX6naxSI4d+sIh7FckGtEF3Gblr+DDaSUhyjRly25+UK3b8zm+vn4Gt9Q5HPKdgh6H0KaGU34ppOXIY5jv75pqecu0ZLKoFSj1qmB44C/cgZT64SC4X+40D74PuerX0seDd5AslXs0UIeFEPEXZTYbza7VOGf/jYqvOc59F1onLzqOlW47ickM2z+ygaJV2hEIFZ4c2dNrch/sYr01tNCoXjtoUG47P3QjQYlK1bMZuHu/RuJ/msH/Qg64KdFVcxfKkuky+W+QsQSvel1BLtlL3TXvRqu9qPOG/fFXFrwDrlDeDOpMzGBtypRVq+RXbFmazSefruHC+SFCbH43um9QGEJnwAOvRXx8KGCvg3coBGyLBuPEz7CLEob0z5n2buxe7+oR7v+DIG/uTGSZT80QqEJKP7UXdJ3L/pOSQZB1WwWrJrLkE2zDXLyI0z0DLpfRNTuNNJtmcmgRSkHL+hlhOnRjhjky8B6ufF+/w+dlKIx2o1tI6HhlaiXhGJTZAhl333goBHQIUKi12Mie5cwQEMgV6CHtyk2/+kVkuCw/ZYKInNRanDPypNTYIffCaBnjKGyVLk7qr0FFHWoiN+GLwXm2wFN5P43Kb8+PRdGNofGt47Y+cFogBweGpDvscTo0J3HeCWf3/70OBdQvJpFtUsIUAntv/f7jJoN1zTPNAzy0Lkl6gaTVU9NmY7XMDZhKAQeIU/nN2fkrysNt/pVxz5CL4cAb/Zc6zchzv5ZvRBexw0/mufHZvAeONqbAmZjY2VxXbhEAJzCFfW9fS9ldzEsda2d3aSV2lJ89znCnOtoJT0Ti6LWn6iKg93f/ZWngAFu/sfo4kSfud4ENTSp6C2qxqSg6SqBGQ4t3ySMlXTpcq7Q7+/DVi6yqoBdX/F8kQN0uJkaCNfcbI4yIz6/T3fdv/v+adZAFjfbpLi9IRdGDdQVD+hA/CnoG72cSwZoCOywXf0WVlgv2JsJYD5EvIyI6bayeWQeqQ5oXNdBvlqgVHD5+usHQH9zrqfYl+N9G/G3f3gb1EzwYy0c/QEqpX0ZgJEdVPP+yVmPoI8+9WO+0df+KscN+3ycE8FOfuHs47yPlUMzZC61XoFMiz+1H7paJByx2F4ilPu4ATWY35Q0uEusXfy7OMjyMrpFU/McY92Xsj5oL9dyMWPJLDGIyMfzIdAMbq9UibpkDo75i9y9hK4/v+CG4LtTolH5/sQDFn5BOaLeh9gRAUmL4bfBBT3a360LRmL2lQQzEXDMIN2cnkQ2/9ypJwfQmAb2IqeiM8OsEbWGf/86wsVxAy06Iisa+cHFbI0pGtAiexC26bVQztXdL0oabMUbNlCRxGZlqP65BCHgNxnnrhZ/MzEL2VP7ia5YT7VLXFnqJA8cK+CBdqWVUDU76zxNHfyVukR2skq7iFcJPpLXbX2HTFnS2Rek1Hjr7XzpWy7NCK7yun46D7Olj6bk2Mq7xrhaRZ5aPFtFkwShJ3RzfpRT5smVWLneTsPwYMQzChCIxXEHMFyosl6JeF+ZjeOBkscA6k4AlHAalTQjzg5fb+ZsDxHfzyXUUlYAW3C9Wsdf8nURNGgfTzcPZOie0QiUETryNXsoN458IeADWYWtML222f9vNDgCIG2OUF1zkBEt6bPG00fhE6+yGYbf5xj6PN+2cYvKLj5U9JIWMFQ+gqzHWraVicWp/PcIDIG1ZMRYCowDkUA0UxhfBKFvbbAVo8WKPSDKm1kCfj2Oux/Xvi30LNHG8j5LICvsVHXOhWTShUJbf+6291/bOECQmiUPXI6gmkAVO3KXBuFLAqS7PKQm3syAo0EWlqa0po5iAriU5ZIyz1oJzVkbcDyyvjRKTewWpSbGltk1RpziKS0/17jlScTh11wAvAharNp49v/t3/iV+Ohc0XcyOvNPEzyB5x2BsYkwrFU3rtJ1l6jvTe+oDnT3f3qyJF8yrr6furCMPRVhY0ENxxPFSV/6BUqmBKjUf7eS+iMFsP1RqFZt34Yj+/kDtT2hYmWoLVPeVmQ7iv4af5kVGQAy/vFCmbYrvgHZwLj4isjdL9BqcMo0cYeLsx2braeg2QWwz68Wa3c9/HGuky9NeC/q311aTAf4SxSeOLmBJgDcUVFUTpC/9AmlAX/oQhws3J5d54G6CqBxZKYtkhdIidjT3AJI1ftJR65bmVma7QwCAJvrCCaKZcVwjKMjIkqcmpegEAbGOQdjsFi8a/8krJQW8C6fNhzsIdGSXnXyi/ROTaqUcJyKw/LIJAbM+c4zfBI6lKbqVI8DapyTsfbO6Sr4QoIeydBoeK7GFjRqbVnSiqvgA6qb1eHcybu1UEwmbUN3bgF+GIVXDgWIfJlTD1RuW70ltqHDHD8fFj+lXTrfe61t1g+9BkIDqDNWEYCG3tmNTSf5iuAsncaGUHmrx704EVwLmJdXZXPeR7b/Nmhyehqf+2iRXh4rEVq3xOTrvr4IeJlGvt8o9jKaqkV8tPzO3ydJyQX6cbd+fnUz8gXOFW9Pmc6sqQTwcyi3Aiv6nCvaZiF9GNO5LwIIN5Bru+elUFC7NtgvzDTIE2Whz3has5vKjGOe2iDnOz+cBtExKis7NYB6+bgbrKgGHb+3Z3BHmbkN63f1ILrBdJNkB7Inr3WT/PlW4z5r189kYWhc6Zm/5bqNAxsOmVhfCDDnUFpubec8cU+NyEu6cah68EzMrnSA/oj1ejLuuNSKfv+fI2ocsvmRtlQlII51xjU7WVTnp5m9r52d+79kUb5SpfCvEirQX5qTSYNJiaEfHVxkjWLP8PEWEVa+NNhaBR9xIrHQtTlO//yzmFlnKle6q+SG3oH10s4L1hFbwYyLixODIaDhsZDTOVq5p7ovlFYPcAkdqrA1BCphU+i7uFWPao2T5eIH0nVwMpO0J+uYLhO+dWzltEqnXeSSahi6fyhqSBVX4zW36oGwbelHyH3Jz7S4SuFaOsfrWrh5bWqRpyFLuIWgxZeVd42omZmn1fwHWIC9YNuVMADk3afvxfrjs6r1+b7bMNfrnPVuKY6M3OiconmR16JQ6vX2Rs/EarlzC7ibZAJETevphfXswWLIWxcJ7c54j2sJ8w5NJnoCW/GpgPBXb6ptIzB3MtWL0aTqMj7b/kpN2vRG4mOj5wSfUF2roq6O+ANlUI2k6X22OvIsYd/eS9tZn3I47pqPHIGiLVDJWdnnBKxK8Zi8boT3qiQPD19ku5OszINfMviTqkKfx7WRmEyenTKPaFIdtYg4AaKE5ZAZhfk3/UWUQNgvMEFK6S4pS1Ar7+Pup1fpxaIMyiBTITQidrytXlwOp36kOLksJW8Wsw/e8sHw4sJPX9I15QQqVDl9txDpQzy3EKu34PDrurhpC/7BjMoi7dMWL29jWoxpVKvvAiK30h5uppfvQlRcsGpVN1aLiyOoACFxyCRZfenYnJ+0t/gVlMuVvkF7to6cYpVCleGdKe70MR4Bj706r3jW6H75Tan1odfQjF/ewYcwy+MS6ZohLWqNCeHpOf6YinoZkQxi2ZiMysgrtA3pLFjyS2o65fN00+lg2TT4OyDM57tvD/VttqVKeI9gH+kaZWm6VSFv37Oby24RVHIuuz5fE6XX3JGlF/eQFI+rAyKFAJBmu2viK1tB7eJuMPScCqdMl+XR8oCvPPR9VOm4DvODiKhDTtTgH8sLSv4AuuHNKgaEbS/qLIubIUFv2LbBryalQIwcFUHhXjjr2z0vIEvAZ0EdDpCh5ADrS1vR690k2Ma4U0fqUoNhBin33kvZ6UvWM99oEErq4PY/PDQpmSvgSUU92EoKO2p5MQu47VhQYqcTtOv9mJAc7hKtYqOQsfInHNZoMTl930n6IrqDf1yDvyhgqH+K55D+M2sfnWncFGBASmdTuHT7muVFvC8K5ngkW0JScnqJk+TB80qt06IDiZFQfJ3ecuQAsOpyBRNrXmt/fn27sCekk1PaLVMi3eBzK8WA5P0u95VsUwkutZGKtycr+OuB8oPzf5uoFo+TbXyByI45ERdB9/8Gfqqbzc+wnQjpe0ehhU5/TfKo62Terce0XCfJ9aalwAs8j9DiR11Rq/l6U5jwTivFJSDUQHMgYZ5CPzi8rfTHWKUQVyQKOVFc4fp9IgkbcLNJ5koOTJ9uaMjtbMzAh7tOoQaASpj0PHIaUTUc3YpUWdxo7pgrwC6Ag5IGNRPs//koWnX57T4wZ7Y0f+2wDhPZ9S45o4y4+9cyIcQ1zblF+GsS440W1LO2H9mYJnErWly9ioZ000hWaMeKfQwOUWC9OpoKq7LtS9ESdyqIVh72hUxF2stzm1QD38dCvfHB4aTcf+symUQ5SMPot+w/sMzcwXlifmwMCUcKM/PM2bISdcM3z6EoG6F1BKL47N5SQCh0I4l6+sFErd5YU2jZxc+PpLAIL9gl2kNOb1SYLIXWZoZk5mk+51V1ttetA5fIsB5fTfUU6VkrkV3TYN2wJHkQgbX2wkykF/Lzo71sliq7/bOkrEhIxxV0rC/Qk4uA+9PnK08QTNwIJJ3T+2us5D0AK9txXpZdma4Um8CqCidnk5qqx+yqVp6mJmZVGD3iBSCfLLTYBagZFnS4ern0+cbGgzpBILIG5ol+nWeUdCe1y2yrx8qddDEfhnG9ctY15dK85ck/WQacrSZ/I3hXvKJ3Zg6WTeJRbkMxYuCpunb6tOYoUPNi9OCIbhD6G17iAdhuITuThoXISM+DOQoveChNjXVB0RTzspBKWkOPV2OxkRmqEMO/kbdpT870GQ7tHLlH0Mi+QUyeH4EcmEC+M5hERjiJfx+znKNgEsBS4dzPME5S2c4lAi6hmrnss5W5XfFzyp3/RxCulfzW4efvCxVDbzuvMDRlYRBV5nAyrTnk7Izvpob6EX0ZnCoQpr8WdOHytHOQgnbHD8UiFUQXmSz7CpmKJPp+zZnoiCudBDnMJDFmod9P5HK6x0BqkfnZ9caN89hc6NMzbCVFVGbz5YdFcku6xg42zTUGL66LLWmL+uzy5QifBny5zf0MV61A9RU4dPGTVnrSgs8bdR0P3ga5W9aa4PG3P1jH9RKZhxnuuC+eEIv8PRY+FP3ozp/ocI6OEn0JVY6i4lWYvU+j+1vshqBbp3M4t+ao1PDD+8amAlK62rxkX4YKZET7aLlCw+x9Hm/AIdQ63at7UqOO7uHzOwnNfMaIXUvNHNtnM1Kx2EL02gWbir8RC0vHHf2gg3u29OSA6hw2m8WWLQuj4bK9hganteSl4Zawo+ZCtbVQdSK6Zno3DgfYjp/HuNcbS9+TBHh7JJenjsWK6+9C/y3KF+z/6zTF2pDJ17XSgyBh/TM2uqkjBhb9SXFygvgrRWKdi09bmIyGjcnInFA5D/aYbgiDaAFpPHgQ+0c2RpmUrViWtkox8CH1oVXpDjqs4MKAPLEtVCHxMGqL6rLMk5LDBpswYuyn68FeT2rs72BWf4s4UIluwX52Dpxo63UZ8uD61amdI6+NRmSxyC41PRuFCfRnWWb5temEcf4xVwVL4ZFKCAmXzoWegjuQxa6QbXrcNH2A1Kb3LhJsp9Y6X+AvzRiYhwPNBggbHJ2cwsi0Tt4WYAAncfElwtSNJgISzWLySPcYNJjWJFfvJzm8iMjyqo753/B9zTFqGavF1RsGleSk+tIX+7Qy9b3nb2+5mJjRxemu97ilYLitV7RKTSFg0s+96fYPbLcDi1jS7/+yX8qX5P5eb12qdmq/Zyj/Rgszt8V35ciIp19gIFx5N01C9YDwfbHYfr7AMXI5DRgST225rD6IKbYj4wFTMJ0DiwdIgqKvLdq2cq94OWHimgj+g/n76+yBUkzmTIdrAH32wNfEJmjkNVZpj6OL2LusTItK3n005Cl6s0eKbO9b8c7PklBsEsON4vWwWB13yD8rWJdv0EptdrbiAYu0EN7UXCUzRMlYjdty0po8veaUUvlmZKgGSGRY9cHOpWvohJSXCCBprABD1Rx08uDX7Jfn8ErxV68JmclNkF7YooazLtPtX24jYySdtILicPuCGZKASrh/5PGcewn+/zURfg/6zFmvDXWkIrQSTOkjimDBoAlKPsmcMHC3Rk0vZWau09DD6At9x2homCsooUBcg8fMWBg5LYB6FpqeltQydYv2gAWusvwXSRRDPIWCg3eyGV7iSGg/5jNUEAJT0kH90/DWajOk+aREd4RWpQC7rplQWVmk8bf5mKMETu/6qpVMfRnjC1nKYYI3bxTKZoBO4QL/ArP9yXIux/9YkZN+rJgYr2LGmj9RrYCVg6suB6Vk0Rmslq7GyzdVPfAn1XZjovIzXBEfwZBOxjta+0JSwZ52ZC2Rv+UhVo/QhOJc5LXyS4XLjbBqn2JeRn+3afqyHZZ4FsM9pMt8l/Ho69JzljrMdWcE3xhGeFOgahUC/rXzqYb47PX9kga3Hq/DslnznyhEaoowHkEr5yl95QySDV+SD2sfiOSPD6VdfnT6ALe+V0Xnv/1EudM7jDCrC6+sK6PgVOH9LV3zwdMwrOkxOhi/J2zXWlQNuPOAa3+na1LbE3U/2jKb3ftfRcujsroEIKv4Xa3DNp5nhGQK+u+XarqiaDRIitxCrWpWj3rRhAZUtJGoUssmOt3h+ZLvCqDco8HzX7quClWNaXpw/8UA+mnl3ZLHaOuk18xcxQcGdJke1o6tahoqY/U1kGZWG7ZGKSr749wF8u3Qsq53Kql0jzuY5qKfQQhqqOSV+IGkCj1ubwhuTxudsWj1G5HMdwIHNSXxsbTxbKkwdISX71VdAXpt+FnVGIIFYAfAGZCD3bmMfjxpHtJXJ31lswG5ok8frAnO+90Tj7pDhP1N1LlBmFKdK4S9AcSKlfBWuQYKEg0pRFiD4g+0M4dd3YHEJ7UioddSG8bhHIAG/Qyb6yPoxXRGH0uiqRVCrUR/DyHC3vioToIf7ZQx78co/yGtwOwDTqOfKGfOvtWxffrd2E36sBatH3ehnDpza9uCJ3Wa2sL26KFqri34OnA8vwhKfGBDYBdq6kc5klTFrDMblRBJMNq2vu6drWSV9Qse6sSoB8xJNkeJHFAKj57yFXV9gm4wxSEBAKADh55SbHEarEwdBNmGaj5EJrLend+kWZGZ2HVs3wUKp94pEqSYctOP0R6uv/CD+F/5/NbnBMT89xDbtxVMaoqTIIIwP4AEhPO1VdQMMzPaf5Zajuj7Ya75aSegktFdCoa8bEBvmS9OPS2UU2kNMueUwTNvdMdH7SYmYm/TkibBk7RxkWjeHH3dbd61dsflhAgmF8dkSxHkSR9aVe7+jPKE4dwXUPpByQd8NzS2arg6BeguKc11PF8Gf4m0L3kl0+yUEI685oGRfX4PAqEXaEAWU6qSWfh5DyFoEkct0REE1+yDOHCHRfUfVuxZyUani3T2X0CYDBrr//ZnHOAplfba9Vzjoesjsx6NzATlkUN5ozrAfad73vkYHHk/Evv+e0SqkOCueH5+pC2UHZccyOX9R3Wc/17VGP5crcUs4a5mJmUAQOj6Qft8YiF0qlSyM1s+GPBE8ZKuMk8IJWeBDs/H6tNddxs0msJvpC8StQLeLtfDaGtfVjECcizzZFHAp4nAj5k6Kpm1hnQ4hbbWDbiHdbp64q++kvqTas1B76Sr5c+OWIyFmY9YEyaW9nCBBwwyGLI6hFUiKG+erskqYPOnDhHBd7D+JTjNXVRUce1CR7wh1IyMRvGZo0zsxLfEIkRxdZV+cq5ID2lzITrh5WJdou31nHijB8cmHo14ZnN0uafHcHvVgDL0n2bnPuDxQHtfvrddmWyHZni2nMN4QpQ5WG4TGVp6R+GwYdDdWaXuc2k9Ae6MLnU8d4cpEkfOCjBzH3iozy+aMKQQ+vjjTw6SBKEj8R3F8rxFtOmmcb/sh03bd/6pFq2QltTTuqHztXfV4ray/Wmn7QSEMlVWz4PbtZOc+v0r0DwNN/HhmV+ie/g8SrPqHs0or396H78FdFibeporNfBYfLa8RL5UIxlQIWEteExH5Vnv+5LF/6A6ZjKKD8tTJ4DBwnsCOR5jKiTtzjsy80CqXYb1EbVCL01mYBBP1f6ZZbcyrIxCBo35+qNOLkW2LNwZ2gH1xeLK6j7tN1VT4LJPvDeTE+m6mMYPGAl5FmJv0zQBldhcmYqN5XGltIq+Qg7cazE2cYw3mfzI9R9024WClAAXgp7iMs8wmhNlB+0KZxYtc+hgZI7kTg+NymrzRW/UnE3iG4b/bVNaGvglifM3fJB3tiU2IrG5WM/fk1oKodJhFybrQzR5Js4gPFB6BKB6X+bQJZu1qEfIBZjxxwKPLUHWWVx58uYorJcbJuZZmPbyjNBnEzizmkupcngqkTy00XmVOpT9n10QlbI0FRl522rLViwenSIwFR6ES+62GI66NFXgbCyeZPb3g7uavLefn0fYmjvJ38gMhZ7RJoz87KmIOyqw25VGWXE5eDiCnFGWQGp09AU2STgB/c4s1AJsW9RCTDfnX3vw4sIg1nzeD711Q+w5Q//d7jdt0bcS4MJ04C+o0t0pQIT2Q0pMphZKFwYvvL2Ad8+d8vtmhsueQp7XY+IlVIEtriqtAi57vWclG1josb+C0Fxmh2/Ohwfs4NNX4+T6nqzDC4cjQf75PAuTJ5vTbPrKs9DkW6lD9ew8rL3YmKNuovJAb3cJaQNVnqFN5CnAl5I/au7nKCqDqbPpS7obKjCYjh5Aw/VPGPxsSmHeX9z0vnj9veNvCnX2+LA8T1n5ns6a9MGewIfnWxyX3AgIxMy5hKbYjK1Z3twALXojgSp6bsI/OBkFhipsqkDkino75CxKrYt+PM3do5ONeE0QI65Jonk834g0bMiy8H+MptlcMs0RIL8qcwjaclWPXtMX22HYlxwS9RLv4c4MjWG4gwmvTvYQ8y5Nahrl265sDea+2gk6EunScKsI9nCZ1BredHkJnNBDsLtw5bpX5ycTsV0I+RTJD9V+yJl+X2CSc32+XqDQ3iyZOoEbNORoKQlQ8K3MUiQ0EY3+R3DMGN4lKJlq1xZKt9b8S0zK9/LcBwmxoXMGofASpIrWPql6mRgCZDMvgG+Ucd0UezwE8tKnAnhAo6CHHOC6sSus1lQiI7h2CJsDDp+LfkrVguEH6+wDJim5sF8eHfQ0lMfogTOr3eqHCiHI+4DK/Q0q6ZkAlryPhQTnYQZa4Xy7QStSinY0S0+/jbrF+gvYy/7qcaBQxVQ9kVjZEjUt4h0JeUOxly3YggZNipcyYdJvGH8ywFfEpeOkCdZh9NhrpF9sgQAsfjAYKa7egFfpxwU1wTTMwqMmd3zkv7aXubXjrADvda2o2jmFquc2oHPJqxwUx5rXTdFbR0hFS/4PghoKbyuJ5K9X2phcZ43GZmumhpZsZJMEPfou4U4jojTG6YVUWKAgR79+Qc1U0d1ZVEygTVzS/+40AQoQcPYuz4HmK4syDCxUry6fDMu17G8TXYm9B5m1POFrpAoiydUbkY8wmftEGjFuyXKu8QqxuCovs9U1tm8hydhvEniJ+Kk8FlAc+Di1Wz/Y9yWYkT65NzLWl8oZk/6mNlWhhXsFV0ridSUSCMxdyQbnKCbPsP5/yd5FcqvZb4UlX+ZGO2YOAYhW7xRn19oQgtFOVNsNqkLaZfycmGx5w/yyVc5DpY4FfKO8tboOPGfp7IABaeqAgBZCrjxK2kwx8QTPNGfes9q7y1YTpphP87MtWQMu+XJQdLwRmDaahuPN2TWALq+J5c25R0i43XmtkPCXMxsZGrqkWnIqbNrRC0Hy3Fv9BZ/yliV0PJkNMPEq7VLkuwTbU8jALz+BZ0iQyWqw1EQ0xh15s9MksnRrQMFjdRxDMo0ijSGm1//i/xUWZHP3mpsOCsO/qqiOYlxraji7jk8/+quIln3tYCH73W/dOhaXQ+I5gdGad1ow4Fy/6/zv44wMqwB0FXfhk3R9iKB/teTHm4RCY8w6ou4MqlIxWz4D82BnMkX3jBLnw811Fbb7anDobki1mTvSX9Nr7aFRGXlCatQtO0zSaIkvQs5gji3VS8c3GOHL1TVSqY4BwQAB24sCla3cb1h2IxelBwwMePF9N+ukytq8b3oJtNMIuBZD3B9b1VaTgJ14aDjKnmtd+nHV4OxwLMg0Z8xJ8av6z6dp2ulC28IqN0KZRKU4owwqkqy31NyaUE3mUFHNWk47bd7uHTLt5L9v8BhaUqk8XKXqzJg0YgFsyLYv013O+Vsq+89ajP1GhlTQAQqAtHHdDns16fv2ux0+uWNlX7qs2gaHHeDIBMbOzBMqusqs/Ucoca+DHAZngHlOP245rXPZKSL7LK0te3KDztBwtAVq+YAmGT+QoGH/Yz2ymlkamGfIwGbUNQQ4USWSGyLAXt0UK/eQpcbxDsl7hc/qmnggrQ0ktNDj7c0mGxzIrHA5mzxRgZb2HPiiI3ri36dvbSDvyGq6vDhstF3c9m0UGVWBjViGE/Wbar8gvspIqIT+sLGYrzY+HplM4W5s7+GWz8V6ZvLM25Yz5PZ6SXo/5/aBrO9TGsyCnUAEkZNtQbhA0w4mZmdXvF9f/f1BiuTneixrR2ZX3vZNS+6dTN1Hm85xAxyEBt8FEgZnhtHrMIWRy14r0bv0I+H2BsjcC572MSQKBLdKJYzFYZo+MeFgoCIzJibtbQ8rLa/+8sAGcACyTn0Wl+9ihd6d+2r85zagDCMdaEFpSXQ+TJpTNDjNsH+Qb6w2QXi2282wZmkNG2FozjhEw1DPqmYHYWjcljf+RIsK0lj9U009udoYSebohSjQY5e1iHTRc6WamWs9MAlP+hJMa5DZ2e74lCO+A4WDy6A0yoRfyuTd7FFek002JSKACJIAaU3kQgZ5yxr7AozZHb3t3QSpCwsEDcAy+TdJyqv1xYNVd343GFUQqr6uvReUk4jy6MpCr81d2GC9kcDNBf0iMjSk3M1Ek8ipZsw53F/xkMWVwwwc2IpNULiMS9kTYXGtTENV8h2ZZodAG19lEyCOwKf8xx9vfe/i5J9MxAROKMULYabWxbLm5YlatR2/Lyme4jwEUO2ozgUvG0vsLPx6k5lkkgf4NNtpmKIGPa4WtBIi/61vDzKht4FYTRmuVXnYxZTRo2Sn6htUkneHJePy33XZM0AAB8bXwJ/K4SuTSv8BJ5AFhCPtVWsUMKUk/+vKZeXSbRxbvF+9y8zdjD2fQkrloMaPXoveW2TGD7NqiMGUxbzfydlp+i4YH5UTszhpqFVMItDS6JFN6XVGudg8Tf2IZgW/tWQt3Yi0j95tb5bVhKcVlrMOIKiWpvLFggpgLcoSG53OIAYUK6uYAF7Xnj2U8KQUFUR+7EbeoWuPVUVkfhdhooogsVNtKRteBPZC8ZqiAMYPNc0g1ORLXN4NEog4uPlxq0liB8DDv5FRmBnldpSiHIvW+wB3f2bFfZk0aYnKRQvbqBBuzA2HcM0s4d3JhF+8Gx0rqYwIfyU+rosrCxOYNdxmFQOQq0BU2sE9EGRcy2LoQoz/LKxWQGOCFpHodO3VOqEb2tuTgqKKd4bk738N9zXwNeye9A3s+7wYElbDyg4EB1tocRGgwD1XbKBMwTp6YjYqHrA+IyGWR5IMsv1A0Wljf0LhDyNyN2zAD9r7umApUuYPScVPy6uAAAAAAAA="/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <div className="mb-3 pb-2">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="display-5">
                                    We Produce Organic Food For Your Family
                                </h1>
                            </div>
                            <p className="mb-4">
                                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                                erat amet magna
                            </p>
                            <div className="row gx-5 gy-4">
                                <div className="col-sm-6">
                                    <i className="fa fa-seedling display-1 text-secondary"/>
                                    <h4>100% Organic</h4>
                                    <p className="mb-0">
                                        Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                        dolor magna dolor vero
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-award display-1 text-secondary"/>
                                    <h4>Award Winning</h4>
                                    <p className="mb-0">
                                        Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                        dolor magna dolor vero
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Facts Start */}
            <div className="container-fluid bg-primary facts py-5 mb-5">
                <div className="container py-5">
                    <div className="row gx-5 gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div
                                    className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{width: 60, height: 60}}
                                >
                                    <i className="fa fa-star fs-4 text-white"/>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Our Experience</h5>
                                    <h1
                                        className="display-5 text-white mb-0"
                                        data-toggle="counter-up"
                                    >
                                        12345
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div
                                    className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{width: 60, height: 60}}
                                >
                                    <i className="fa fa-users fs-4 text-white"/>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Farm Specialist</h5>
                                    <h1
                                        className="display-5 text-white mb-0"
                                        data-toggle="counter-up"
                                    >
                                        12345
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div
                                    className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{width: 60, height: 60}}
                                >
                                    <i className="fa fa-check fs-4 text-white"/>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Complete Project</h5>
                                    <h1
                                        className="display-5 text-white mb-0"
                                        data-toggle="counter-up"
                                    >
                                        12345
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div
                                    className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{width: 60, height: 60}}
                                >
                                    <i className="fa fa-mug-hot fs-4 text-white"/>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Happy Clients</h5>
                                    <h1
                                        className="display-5 text-white mb-0"
                                        data-toggle="counter-up"
                                    >
                                        12345
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                                <h6 className="text-primary text-uppercase">Services</h6>
                                <h1 className="display-5">Organic Farm Services</h1>
                            </div>
                            <p className="mb-4">
                                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                                tempor sit. Clita erat ipsum et lorem et sit sed stet labore
                            </p>
                            <a href="" className="btn btn-primary py-md-3 px-md-5">
                                Contact Us
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-carrot display-1 text-primary mb-3"/>
                                <h4>Fresh Vegetables</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-apple-alt display-1 text-primary mb-3"/>
                                <h4>Fresh Fruits</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-dog display-1 text-primary mb-3"/>
                                <h4>Healty Cattle</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-tractor display-1 text-primary mb-3"/>
                                <h4>Modern Truck</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-seedling display-1 text-primary mb-3"/>
                                <h4>Farming Plans</h4>
                                <p className="mb-0">
                                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                                    dolor magna dolor vero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Start */}
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{maxWidth: 500}}>
                    <h6 className="text-primary text-uppercase">Products</h6>
                    <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
                </div>
                <div className="row">
                    {
                        product?.slice(0, itemsToShow)?.map((value, index) => (
                            <div className="col-4" key={index}>
                                <img src={value.image} alt="Sản phẩm nhà làm" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.productName}</h5>
                                    <p className="card-text">{value.price}$</p>
                                </div>
                                <CartContext.Consumer>
                                    {({addToCart }) => <button className="btn btn-secondary" onClick={()=> {
                                        addToCart(value)
                                    }}> Add to Cart </button>}
                                </CartContext.Consumer>

                                <NavLink to={`/detail/${value.productId}`} className='btn btn-primary'>Detail</NavLink>
                            </div>
                        ))
                    }
                </div>
                {itemsToShow < product.length && (
                    <div className="text-center mt-3">
                        <button style={{width: "100px"}} className="btn btn-primary" onClick={handleLoadMore}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
            {/* Products End */}
            <div className="container-fluid bg-footer bg-primary text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 className="text-white mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-white me-2"/>
                                        <p className="text-white mb-0">123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-white me-2"/>
                                        <p className="text-white mb-0">info@example.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-white me-2"/>
                                        <p className="text-white mb-0">+0703510324</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a
                                            className="btn btn-secondary btn-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter"/>
                                        </a>
                                        <a
                                            className="btn btn-secondary btn-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </a>
                                        <a
                                            className="btn btn-secondary btn-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in"/>
                                        </a>
                                        <a
                                            className="btn btn-secondary btn-square rounded-circle"
                                            href="#"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Home
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            About Us
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Our Services
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Meet The Team
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Latest Blog
                                        </a>
                                        <a className="text-white" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Popular Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Home
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Product
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Login
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Meet The Team
                                        </a>
                                        <a className="text-white mb-2" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Latest Blog
                                        </a>
                                        <a className="text-white" href="#">
                                            <i className="bi bi-arrow-right text-white me-2"/>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-n5">
                            <div
                                className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                                <h4 className="text-white">Newsletter</h4>
                                <h6 className="text-white">Subscribe Our Newsletter</h6>
                                <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                                <form action="">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control border-white p-3"
                                            placeholder="Your Email"
                                        />
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="x bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-0">
                        ©{" "}
                        <a className="text-secondary fw-bold" href="#">
                            Your Site Name
                        </a>
                        . All Rights Reserved. Designed by{" "}
                        <a className="text-secondary fw-bold" href="https://htmlcodex.com">
                            HTML Codex
                        </a>
                    </p>
                    <br/>
                    Distributed By:{" "}
                    <a
                        className="text-secondary fw-bold"
                        href="https://themewagon.com"
                        target="_blank"
                    >
                        ThemeWagon
                    </a>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top">
                <i className="bi bi-arrow-up"/>
            </a>

        </CartProvider>
    )
}

export default ProductList;