import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Accueil</Link> |
            <Link to="/users">Users</Link> |
        </div>
    )
}
export default NavBar