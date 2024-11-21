//importation
import '../styles/CardDetailed.css'
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import NotFound from "./NotFound.jsx";
import {useState} from "react";

const CardDetailed = () => {

    const {id} = useParams()
    const articles = useSelector((state) => state.articles)
    const [currentId, setCurrentId] = useState(parseInt(id));



    // Bouton Précédent
    const handlePrevious = () => {
        console.log(currentId)
        if (currentId !== 0) {
            setCurrentId(currentId - 1);
        }
    };

    // Bouton Suivant
    const handleNext = () => {
        console.log(currentId)
        if (currentId < articles.articles.length ) {
            setCurrentId(currentId + 1);
        }
    };







    if (!articles.articles[currentId]) {
        return <NotFound />;
    }




    return (
        <div className="card-detailed">
            {/* En-tête de la carte */}
            <div className="card-header">
                <h2>Article: {articles.articles[currentId].title}</h2>
                <button onClick={() => window.history.back()}>&#10005;</button>
                {/* Retour à la page précédente */}
            </div>

            {/* Corps de la carte */}
            <div className="card-body">
                <img
                    src={articles.articles[currentId].image ? articles.articles[currentId].image : 'https://picsum.photos/400'}
                    alt={articles.articles[currentId].title}
                    className="article-image"
                />
                <p className="article-description">
                    {articles.articles[currentId].description}
                </p>
                <p className="article-category">
                    <strong>Catégorie :</strong> {articles.articles[currentId].category || 'Non spécifiée'}
                </p>
                <p className="article-source">
                    <strong>Source :</strong> {articles.articles[currentId].source || 'Non spécifiée'}
                </p>
                <p className="article-date">
                    <strong>Date de publication :</strong> {new Date(articles.articles[currentId].published_at).toLocaleDateString()}
                </p>
                <Link to={articles.articles[currentId].url ? articles.articles[currentId].url : ()=>alert("Url non disponible!")} target={"_blank"}>Lire l'article complet</Link>

            </div>

            {/* Pied de la carte */}
            <div className="card-footer">
                <button onClick={() => handlePrevious()}>Précédent</button>
                <button onClick={() => handleNext()}>Suivant</button>
            </div>
        </div>
    )
}

export default CardDetailed;