import CartWidget from "./CartWidget";

const Navbar=()=>{
    return(
        <nav className="d-flex">
            <img src="./img/logo.svg" alt="logo" width="50rem"/>
            <h3>NIKE</h3>
            <div>
                <button>Inicio</button>
                <button>Tenis</button>
                <button>Ropa</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;