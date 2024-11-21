import '../styles/Card.css'
import {Link} from "react-router-dom";

const Card = ({id, title, desc, img}) => {
    return (
        <Link to={`/card/${id}`} className="card-link">
            <div className="card">
                <img src={img ? img : 'https://picsum.photos/150'} alt="" className="image" />
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{desc}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;