import Card from "./Card.jsx";
import '../styles/Card.css'
import {Link} from "react-router-dom";
import InputLike from "./InputLike.jsx";
import '../styles/InputLike.css'

const Testeur = () => {
    return (
        <div className="container_card">
            <Card id={"id"} desc={"ergervz z egze zz ez"} img={"#"} title={"title"} />s
        </div>
    )
}

const Testeur2 = () => {

    return (
        <div className="card-detailed">
            {/* En-tête de la carte */}
            <div className="card-header">
                <h2>Article: title</h2>
                <button >&#10005;</button>
                {/* Retour à la page précédente */}
            </div>

            {/* Corps de la carte */}
            <div className="card-body">
                <div className={"container_image"}>
                    <img
                        src={ 'https://picsum.photos/400'}
                        alt={"title"}
                        className="article-image"
                    />
                </div>
                <p className="article-description">
                    efnzeo  ozeinfzo efnozenf zo  zokenf zokenfzenfzenfz f ze fz fkz fzkef zekfzklefz efl ze
                </p>
                <p className="article-category">
                    <strong>Catégorie :</strong>non spécifier
                </p>
                <p className="article-source">
                    <strong>Source :</strong> non spécifier
                </p>
                <p className="article-date">
                    <strong>Date de publication
                        :</strong> non spécifier
                </p>
                <InputLike />
                <Link

                    >Lire l'article complet</Link>

            </div>

            {/* Pied de la carte */}
            <div className="card-footer">
                <button >Précédent</button>
                <button >Suivant</button>
            </div>
        </div>
    )
}
export default Testeur2;