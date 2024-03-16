import { Link } from 'react-router-dom';
import './styles.css';
export default function Electronics() {

    return (

            <div className="list-electronics">
                <ul className="list-products-electronics">
                    <li><Link to="#">SmarT TV 52"</Link> </li>
                    <li><Link to="#">Mouse Pantera</Link> </li>
                    <li><Link to="#">Playstation 5</Link> </li>
                </ul>
            </div>

    );
}