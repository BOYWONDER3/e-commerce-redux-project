import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <section className="">
            <main className="flex justify-between">
                <div className="flex gap-5">
                    <h1><Link to='#' as={Link}>Redux TK</Link></h1>
                    <h2><Link to='/' as={Link}>Products</Link></h2>
                </div>
                <div>
                    <h3><Link to='/cart' as={Link}>My Cart: {cartProducts.length}</Link></h3>
                </div>
            </main>
        </section>
    )
}

export default NavBar