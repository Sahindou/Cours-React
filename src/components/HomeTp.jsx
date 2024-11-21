import Card from "./Card.jsx";
import '../styles/HomeTp.css'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import CssLoader from "./CssLoader.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import {setArticles} from "../features/articlesRandom/articlesSlice.js";
import truncateText from "../utilitie/truncateText.js";


const HomeTp = () => {
    const articles = useSelector((state) => state.articles)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        const fecthData = async () => {
            try{
                const response = await axios.get("https://api.mediastack.com/v1/news?access_key=dc3f1a86cd783eda35adc56e01564200")
                dispatch(setArticles(response.data.data))
                //console.log(response)
                setLoading(false)
            }catch (error) {
                setError(error.message)
            }
        }

        fecthData()
    }, [])


    console.log(articles.articles.length)
    return (
        <div>
            {
                loading ? <CssLoader/> :
                    error === "" ? <ErrorMessage message={error}/> :
                        <>
                            <h1 className={"h1_home"}>News</h1>
                            <div className="container_card">
                                {
                                    articles.articles.map((article, key) => (
                                        <Card key={key} id={key} title={article.title} desc={truncateText(article.description, 100)} img={article.image}/>
                                    ))
                                }
                            </div>
                        </>
            }

        </div>
    )
}

export default HomeTp;