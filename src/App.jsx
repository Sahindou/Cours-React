import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import storeTp from "./features/storeTp";
//import styles
import './styles/App.css'

//import components
import NavBar from "./components/NavBar.jsx";
import HomeTp from "./components/HomeTp.jsx";
import Footer_tp from './components/Footer.jsx'
import NotFound from "./components/NotFound.jsx";
import CardDetailed from "./components/CardDetailed.jsx";
import Search from "./components/Search.jsx";
import Testeur2 from "./components/Testeur.jsx";

function App() {



    return (
    <Provider store={storeTp}>
        <BrowserRouter>
            <NavBar/>{/*visible dans tous les routes possibles*/}
            <div className={"container_main"}>
                <Routes>
                    {/*route dispo*/}
                    <Route path="/" Component={HomeTp}/>
                    <Route path="/articles/:id" Component={CardDetailed} />
                    <Route path="/search" Component={Search}/>
                    <Route path="/test" Component={Testeur2} />

                    {/*Dans un cas ou la route n'existe plus*/}
                    <Route path="*" Component={NotFound}/>
                </Routes>
            </div>
            <Footer_tp />
        </BrowserRouter>
    </Provider>
  )
}

export default App
