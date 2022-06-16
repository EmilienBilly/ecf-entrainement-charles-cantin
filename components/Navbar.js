const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a>FACEBOOK</a>
                <a>INSTAGRAM</a>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a className="nav-link">GALERIE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">TARIFS & PRÉSATIONS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">CONTACT</a>
                </li>
            </ul>
            <div className="hamburger">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </nav>
    );
};

export default Navbar;
