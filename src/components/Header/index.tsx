import './styles.css';
import Home from '../../assets/home.svg';

export default function Header() {

    return (
        <header className="header-container">
            <div className="container-links">
                <nav>
                    <ul className="navbar-list">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li className="container-image">
                            <img src={Home} alt="Home" className="image-home" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}