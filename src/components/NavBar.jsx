/*import {Link} from "react-router-dom";
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav">
            <h1 className="logo"><Link to="/" className="logo">Logo</Link></h1>
            <ul className="navList">
                <li className="navItem">
                    <Link to="/" className="navLink">Accueil</Link>
                </li>
                <li className="navItem">
                    <Link to="/search" className="navLink">Rechercher</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar*/


import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import conan from '../assets/conan.jpg'

const NavBar = () => {
    return (
        <nav className="nav">
            {/* Logo à gauche
            <h1 className="logo">
                <Link to="/" className="logo">Conan World</Link>
            </h1>*/}
            <div className={"logo_img"}>
                <img src={conan} alt={"logo"} className={"logo"}/>
            </div>

            {/* Liens à droite */}
            <ul className="navList">
                <li className="navItem">
                    <Link to="/" className="navLink">Accueil</Link>
                </li>
                <li className="navItem">
                    <Link to="/search" className="navLink">Rechercher</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;