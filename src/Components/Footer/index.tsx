const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src="img/icon/logo.svg" alt="logo" className="logo footer-logo"/>
                    <nav className="footer-nav">
                        <a href="/#" className="footer-link">Restauracjom </a>
                        <a href="/#" className="footer-link">Kurierom</a>
                        <a href="/#" className="footer-link">Press-center</a>
                        <a href="/#" className="footer-link">Kontakty</a>
                    </nav>
                    <div className="social-links">
                        <a href="/#" className="social-link"><img src="img/social/instagram.svg" alt="instagram"/></a>
                        <a href="/#" className="social-link"><img src="img/social/fb.svg" alt="facebook"/></a>
                        <a href="/#" className="social-link"><img src="img/social/vk.svg" alt="vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;