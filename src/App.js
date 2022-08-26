import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";
import Contact from "./components/Contact";

import CharacterProvider from "./context/Characters/CharacterState";
import FavoriteProvider from "./context/Favorites/FavoriteState";

import 'bootstrap/dist/css/bootstrap.min.css'
  
function App() {
  
    return (
        <>
            <FavoriteProvider>
            <CharacterProvider>
			<BrowserRouter>
                <div 
				className="container-navbar">
                    <div 
					className="container-link">
                        <NavLink to="/" 
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            Home
                        </NavLink>
                    </div>
                    <div 
					className="container-link">
                        <NavLink to="/favoritos" 
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                           Favoritos
                        </NavLink>
                    </div>
                    <div 
					className="container-link">
                        <NavLink to="/contact" 
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/favoritos" element={<Favoritos />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
			</CharacterProvider>
            </FavoriteProvider>
        </>
    );
}
  
export default App;