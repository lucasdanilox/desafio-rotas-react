import { Link } from 'react-router-dom';
import './styles.css';
export default function Book() {

    return (



        <div className="list-book">
            <ul className="list-products-book">
                <li><Link to="#">O Pequeno Príncipe</Link> </li>
                <li><Link to="#">Romeu E Julieta</Link> </li>
                <li><Link to="#">Dom Quixote De La mancha</Link> </li>
            </ul>
        </div>


    );
}