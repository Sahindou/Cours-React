import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import storeTp from "./features/storeTp";
//import styles
import './styles/App.css'

//import components
import NavBar from "./components/NavBar.jsx";
import HomeTp from "./components/HomeTp.jsx";
import Post from "./components/Post.jsx";
import Count from "./components/Count.jsx";

function App() {



    return (
    <Provider store={storeTp}>
        <BrowserRouter>
            {/*visible dans tous les routes possibles*/}
            <NavBar/>
            <div className={"container_main"}>
                <Routes>
                    <Route path="/" Component={HomeTp}/>
                    <Route path="/post/:id" Component={Post}/>
                    <Route path="/count" Component={Count}/>

                    {/*Dans un cas ou la route n'existe plus*/}
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </div>

            {/*<MagicCounter />
        <ResponsiveBackground />*/}
        </BrowserRouter>
    </Provider>
  )
}

export default App
