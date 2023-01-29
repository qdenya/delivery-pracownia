import logo from '../../img/icon/logo.svg';

const Header = () => {
    return(
        <div className="container">
            <header className="header">
                <a className="logo" href='/#'>
                    <img src={logo} alt="Logo"/>
                </a>
                <label className="address">
                    <input type="text" className="input input-address" placeholder="Adres dostawy"/>
                </label>
                <div className="buttons">
                    <span className="user-name"></span>
                    <button className="button button-primary button-auth">
                        <span className="button-auth-svg"></span>
                        <span className="button-text">Zaloguj się</span>
                    </button>
                    <button className="button button-cart" id="cart-button">
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Koszyk</span>
                    </button>
                    <button className="button button-primary button-out">
                        <span className="button-text">Wyloguj się</span>
                        <span className="button-out-svg"></span>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;