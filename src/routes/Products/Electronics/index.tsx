import Products from '..';
import './styles.css';
export default function Electronics() {

    return (

        <>
            <Products />
            <div className="list-electronics">
                <ul className="list-products-electronics">
                    <li><a href="#">SmarT TV 52"</a> </li>
                    <li><a href="#">Mouse Pantera</a> </li>
                    <li><a href="#">Playstation 5</a> </li>
                </ul>
            </div>

        </>
    );
}