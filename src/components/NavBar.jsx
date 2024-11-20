import {Link} from "react-router-dom";
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav">
            <h1 className="logo"><Link to="/" className="logo">A.S</Link></h1>
            <ul className="navList">
                <li className="navItem">
                    <Link to="/post/1" className="navLink">Post</Link>
                </li>
                <li className="navItem">
                    <Link to="/count" className="navLink">Counter</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar