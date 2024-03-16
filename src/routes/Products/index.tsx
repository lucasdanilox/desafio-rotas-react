import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';


export default function Products() {

    return (


        <main className="container-products">

            <nav>
                <div className="products-links">
                    <div className="components-links">
                        <NavLink to="computers" className={({ isActive }) => isActive ? "menu-active " : "menu-default"}>
                            Computadores
                        </NavLink>
                    </div>
                    <div className="components-links">
                        <NavLink to="electronics" className={({ isActive }) => isActive ? "menu-active " : "menu-default"}>
                            Eletrônicos
                        </NavLink>
                    </div>
                    <div className="components-links">
                        <div >
                            <NavLink to="books" className={({ isActive }) => isActive ? "menu-active " : "menu-default"}>
                                Livros
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </main>



    );

}



