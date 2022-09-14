import './index.css'
import logo from '../../assets/logo.png'

export const NavBar = () => {
    return (
        <header className="header-main">
            <div className="header-container">
                <div className="logo-wrapper">
                    <div className="logo-icon-wrapper">
                        <ion-icon name="logo-instagram" className="icon"></ion-icon>
                    </div>
                    <div className="logo-name-wrapper">
                        <img className="logo-name" src={logo} alt="instagram logo" />
                    </div>
                </div>
                <input className="search-input" type="text" placeholder="Pesquisar" />
                <nav className="header-nav">
                    <ion-icon className="icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="icon" name="compass-outline"></ion-icon>
                    <ion-icon className="icon" name="heart-outline"></ion-icon>
                    <ion-icon className="icon" name="person-outline"></ion-icon>
                </nav>
            </div>
        </header>
    )
}