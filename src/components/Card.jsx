import '../styles/Card.css'

const Card = ({title, desc}) => {
    return (
        <>
            {/**/}<img src="https://picsum.photos/150" alt="" className="image"/>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">{desc}</p>
            </div>
        </>
    )
}

export default Card;