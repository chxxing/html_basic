import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav gnb">
            <ul>
                <li><Link to="/">main</Link></li>
                <li><Link to="/section01">Sec01</Link></li>
                <li><Link to="/section02">Sec02</Link></li>
                <li><Link to="/section03">Sec03</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;