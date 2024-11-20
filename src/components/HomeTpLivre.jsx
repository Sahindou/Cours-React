import Card from './Card';
import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";

const HomeTpLivre = () => {
    const [data, setData] = useState([])
    //const wishlist = useSelector(state => state.wishlist);

    useEffect(() => {
        const fecthData = async () => {
            try{
                const response = await axios.get("https://openlibrary.org/search.json?author=tolkien&sort=new")
                setData(response.docs)
                console.log(data)
            }catch(error){
                console.log(error)
            }
        }

        fecthData()
    }, []);


    return (
        <>
            <h1>TP Livre</h1>

            <div className="card">
                <Card/>
            </div>
        </>

    )
}

export default HomeTpLivre;