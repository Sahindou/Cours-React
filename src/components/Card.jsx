import '../styles/Card.css'
import {Link} from "react-router-dom";

const Card = ({id, title, desc, img}) => {
    return (
        <Link to={`/articles/${id}`} className="card-link">
            <div className="card">
                <img src={img ? img : 'https://picsum.photos/150'} alt="" className="image"/>
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{desc}</p>
                </div>
            </div>
        </Link>
    )
}
/*
<div class="card">
    <div class="card-image"></div>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
</div>*/
export default Card;