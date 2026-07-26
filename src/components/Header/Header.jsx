import Navigation from "../Navigation/Navigation";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__logo">🌸 Sweet Moments</h1>
          <p className="header__subtitle">Baking Blog</p>
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;