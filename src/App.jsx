import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import styles
import './styles/App.css'

//import components
import NavBar from "./components/NavBar.jsx";
import HomeTpLivre from "./components/HomeTpLivre.jsx";
import Post from "./components/Post.jsx";

function App() {
  return (
    <BrowserRouter>
        {/*visible dans tous les routes possibles*/}
        <NavBar />
        <Routes>
            <Route path="/" Component={HomeTpLivre} />
            <Route path="/post/:id" Component={Post} />

            {/*Dans un cas ou la route n'existe plus*/}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
        {/*<MagicCounter />
        <ResponsiveBackground />*/}
    </BrowserRouter>
  )
}

export default App
