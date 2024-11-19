import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Accueil</Link> | <Link to="/Paragrah">Responsive div</Link> | <Link to="/MagicCounter">Magic-Counter</Link>
        </div>
    )
}
export default NavBar