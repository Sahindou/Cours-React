import '../styles/Card.css'

const Card = ({title, desc, img}) => {
    return (
        <>
            {/*https://picsum.photos/150*/}<img src={img} alt="" className="image"/>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">{desc}</p>
            </div>
        </>
    )
}

export default Card;