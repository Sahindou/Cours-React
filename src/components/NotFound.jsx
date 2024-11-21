//import
import '../styles/NotFound.css'
import {Link, useLocation} from "react-router-dom";

const NotFound = () => {
    const title = useLocation().pathname.split('/')[1];
    return (
        <>
            <h1>404 Error Page #{title}</h1>

            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">

                <Link to="/" className="more-link">Go back to the homepage</Link>
            </div>
        </>
    )
}

export default NotFound;