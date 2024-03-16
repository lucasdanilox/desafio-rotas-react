import { Link } from 'react-router-dom';
import './styles.css';
export default function Computers() {

    return (

            <div className="list-computer">
                <ul className="list-products">
                    <li><Link to="#">Computador 8GB</Link> </li>
                    <li><Link to="#">Computador 16GB</Link> </li>
                    <li><Link to="#">Computador 32GB</Link> </li>
                </ul>
            </div>
    );

}