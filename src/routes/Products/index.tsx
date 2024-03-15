import './styles.css';

export default function Products() {

    return (

        <>
            <main className="container-products">
                <div className="content-container">
                    <ul className="products-links">
                        <li><a href="#">Computadores</a></li>
                        <li><a href="#">Eletrônicos</a></li>
                        <li><a href="#">Livros</a></li>
                    </ul>
                </div>
            </main>

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