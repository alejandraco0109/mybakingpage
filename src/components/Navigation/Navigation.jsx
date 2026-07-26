import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/recipes">Recetas</NavLink>
        </li>

        <li>
          <a href="#about">Sobre nosotros</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;