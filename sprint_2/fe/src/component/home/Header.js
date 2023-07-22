import { NavLink } from "react-router-dom";
import './header.css'
function Header() {
    return (
        <>
            <div id="header" className="fixed-top">
                <ul id="nav" style={{display: 'inline-block'}}>
                    <li>
                        <NavLink to="/">
                            <img src="https://media.istockphoto.com/id/1148200448/vi/vec-to/logo-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-trang-tr%E1%BA%A1i-logo-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-l%C3%A1-vector-minh-h%E1%BB%8Da.jpg?s=1024x1024&w=is&k=20&c=3E6DZkamFYdJIAkhoGswdzQ7ik7TF0dEkiGp0ogXLWE=" alt="" height="40px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Dịch vụ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Đăng nhập</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Sản phẩm</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
