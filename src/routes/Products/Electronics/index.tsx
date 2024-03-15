import Products from '..';
import './styles.css';
export default function Electronics() {

    return (

        <>
            <Products />
            <div className="list-electronics">
                <ul className="list-products-electronics">
                    <li><a href="#">Eletrônico Novo</a> </li>
                    <li><a href="#">Eletrônico Usado</a> </li>
                    <li><a href="#">Eletrônico Semi-novo</a> </li>
                </ul>
            </div>

        </>
    );
}