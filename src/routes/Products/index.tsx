import { Link } from 'react-router-dom';
import './styles.css';

export default function Products() {

    return (


        <main className="container-products">
            <div className="content-container">
                <ul className="products-links">
                    <li><Link to="/computers">Computadores</Link></li>
                    <li><Link to="/electronics">Eletrônicos</Link></li>
                    <li><Link to="/books">Livros</Link></li>
                </ul>
            </div>
        </main>


    );

}