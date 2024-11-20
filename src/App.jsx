import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./features/store";
//import styles
import './styles/App.css'

//import components
import NavBar from "./components/NavBar.jsx";
import HomeTpLivre from "./components/HomeTpLivre.jsx";
import Post from "./components/Post.jsx";
import Count from "./components/Count.jsx";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            {/*visible dans tous les routes possibles*/}
            <NavBar />
            <Routes>
                <Route path="/" Component={HomeTpLivre} />
                <Route path="/post/:id" Component={Post} />
                <Route path="/count" Component={Count} />

                {/*Dans un cas ou la route n'existe plus*/}
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            {/*<MagicCounter />
        <ResponsiveBackground />*/}
        </BrowserRouter>
    </Provider>
  )
}

export default App
