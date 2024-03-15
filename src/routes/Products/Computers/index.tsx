import Products from '..';
import './styles.css';

export default function Computers() {

    return (
        <>
            <Products />
            <div className="list-computer">
                <ul className="list-products">
                    <li><a href="#">Computador 8GB</a> </li>
                    <li><a href="#">Computador 16GB</a> </li>
                    <li><a href="#">Computador 32GB</a> </li>
                </ul>
            </div>
        </>

    );
}