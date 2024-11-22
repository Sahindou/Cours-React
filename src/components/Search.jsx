import '../styles/Card.css'
import '../styles/Search.css'
import SearchTools from "./SearchTools.jsx";
import {useSelector} from "react-redux";
import Card from "./Card.jsx";
import truncateText from "../utilitie/truncateText.js";
import {useState} from "react";

const Search = () => {
    
    const articles = useSelector((state) => state.articles.articles)
    console.log(articles)
    return (
        <>
            <SearchTools/>
            <div className="container_card">
                {
                    articles.map((article, key) => (
                        <Card key={key} id={key} title={truncateText(article.title, 50)} desc={truncateText(article.description, 100)}
                              img={article.image}/>
                    ))
                }
            </div>
        </>
    )
}

export default Search;