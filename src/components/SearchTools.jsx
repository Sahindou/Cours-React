import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setArticles} from "../features/articlesRandom/articlesSlice.js";
import url_complet from "../utilitie/url_complet.js";
import {useState} from "react";


const SearchTools = () => {
    const category = useSelector((state) => state.articles.category)
    const lang = useSelector((state) => state.articles.lang)
    const dispatch = useDispatch();

   const [filtreCategory, setFiltreCategory] = useState([])
    const [filtreLang, setFiltreLang] = useState([])
    const [motCle, setMotCle] = useState("")


    const fetchData = async () => {

        try{
            const response = await axios.get(url_complet(filtreCategory, filtreLang, motCle))
            dispatch(setArticles(response.data.data))

        }catch (error) {
            console.log(error.message)
        }
    }



    return (
        <div className="search-articles">
            <h2>Rechercher des Articles</h2>

            {/* Barre de Recherche */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Entrez un mot-clé..."
                    value={motCle}
                    onChange={(e) => setMotCle(e.target.value)}
                />
            </div>

            {/* Liste déroulante pour les catégories */}
            <div className="dropdown-category">
                <label htmlFor="category">Catégories :</label>
                <select
                    id="category"
                    onChange={(e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                        setFiltreCategory(selectedOptions); // Met à jour `filtreCategory`
                    }}
                >
                    {category.map((item, key) => {
                        return <option key={key} value={item}>{item}</option>
                    })}

                </select>
            </div>

            {/* Liste déroulante pour les pays */}
            <div className="dropdown-country">
                <label htmlFor="country">Langues :</label>
                <select
                    id="country"
                    onChange={(e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                        setFiltreLang(selectedOptions); // Met à jour `filtreLang`
                    }}
                >
                    {lang.map((item) => {
                        return <option key={item.code} value={item.code}>{item.code}</option>
                    })}
                </select>
            </div>

            {/* Bouton de Recherche */}
            <div className="search-button">
                <button onClick={()=> fetchData()}>Rechercher</button>
            </div>
        </div>
    )
}

export default SearchTools;