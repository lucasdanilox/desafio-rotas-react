import './styles.css';
import { NavLink } from 'react-router-dom';
import IconHome from "../../assets/home.svg";
import { Link } from 'react-router-dom';


export default function Header() {

    return (
        <header className="header-container">
            <nav>
                <div className="navbar-list container-links">
                    <div className="components-navbar">
                        <NavLink to="/home" className={({ isActive }) => isActive ? "menu-default-navbar " : "menu-active-navbar"}>
                            Início
                        </NavLink>
                    </div>
                    <div className="components-navbar">
                        <NavLink to="/products" className={({ isActive }) => isActive ? "menu-default-navbar " : "menu-active-navbar"}>
                            Produtos
                        </NavLink>
                    </div>
                    <div className="components-navbar">
                        <NavLink to="/about" className={({ isActive }) => isActive ? "menu-default-navbar " : "menu-active-navbar"}>
                            Sobre nós
                        </NavLink>
                    </div>
                    <div className="image-home container-image">
                        <Link to="/home">
                            <img src={IconHome} alt="Home" />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}