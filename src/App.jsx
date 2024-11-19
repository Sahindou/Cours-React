import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import styles
import './styles/App.css'

//import components
import NavBar from "./components/NavBar.jsx";
import Users from "./components/Users.jsx";

function App() {
    //const isTrue = true;

  return (
    <BrowserRouter>
        {/*visible dans tous les routes possibles*/}
        <NavBar />
        <Routes>
            <Route path="/" element={<h1>Accueil</h1>} />
            <Route path="/users" Component={Users} />

            {/*Dans un cas ou la route n'existe plus*/}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
        {/*<MagicCounter />
        <ResponsiveBackground />*/}
    </BrowserRouter>
  )
}

export default App
