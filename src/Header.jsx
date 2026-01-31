import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logo">MyShop</div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
              <AddToCart/>
            </header>

        </>
    )
}

export default Header