//importation
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

import CssLoader from "./CssLoader.jsx";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage.jsx";

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
                const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = response.data
                setPost(data)
                setLoading(false)
                console.log(data)
            }catch(error){
                setError(error)
                console.log(error)
            }
        }
        //appel à l'API
        fetchPost()
    }, [])

    return (
        <div className={"card"}>
            {loading && <CssLoader />}
            {error && <ErrorMessage />}
            <Card title={post.title} desc={post.body}/>
        </div>
    )
}

export default Post;