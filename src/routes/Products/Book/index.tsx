import Products from '..';
import './styles.css';
export default function Book() {

    return (

        <>
            <Products />
            <div className="list-book">
                <ul className="list-products-book">
                    <li><a href="#">O Pequeno Príncipe</a> </li>
                    <li><a href="#">Romeu E Julieta</a> </li>
                    <li><a href="#">Dom Quixote De La mancha</a> </li>
                </ul>
            </div>

        </>
    );
}