import './styles.css';
import Home from '../../assets/home.svg';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className="header-container">
            <div className="container-links">
                <nav>
                    <ul className="navbar-list">
                        <li><Link to="/" >Início</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/about">Sobre nós</Link></li>
                        <li className="container-image">
                            <Link to="/">
                                <img src={Home} alt="Home" className="image-home" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}