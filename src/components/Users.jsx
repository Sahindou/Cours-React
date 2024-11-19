//importation
import axios from "axios";
import {useState, useEffect} from "react";
import CssLoader from "./CssLoader.jsx";

const Users = () => {
    //initialisation de l'état
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        //requete API
        const fecthData = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(response.data)
                setLoading(false)
                //console.log(response.data)
            }catch(error){
                console.log(error)
            }
        }

        fecthData()
    }, [])

    return (
        <div>
            {loading && <CssLoader />}
            <ul>
                {data.map(user => <li key={user.id}>{user.email}</li>)}
            </ul>
        </div>
    )

}

export default Users;