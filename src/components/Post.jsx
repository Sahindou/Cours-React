//importation
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

import CssLoader from "./CssLoader.jsx";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage.jsx";

import '../styles/ErrorMessage.css'
import '../styles/Card.css'

const Post = () => {
    //récup post cbn
    const {id} = useParams();

   //init l'état
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState([])

    //récuperation du post selon l'id
    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await axios(`https://jsonplaceholder.org/posts/${id}`)
                const data = response.data
                setPost(data)
                setLoading(false)
                console.log(data)
            }catch(error){
                setError(error.message)
                setLoading(false)
                console.log(error)
            }
        }
        //appel à l'API
        fetchPost()
    }, [id])

    return (
        <>
            {loading ? <CssLoader/> : error === "" ? <div className={"content_erreur"}><ErrorMessage message={error}/></div> : <div className={"card"}><Card title={post.title} desc={post.content} img={post.image}/></div> }
        </>
    )
}

export default Post;