import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.css";

function Navigation() {

  function scrollToRecipes() {
    const recipes = document.getElementById("recipes");

    if (recipes) {
      recipes.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function scrollToAbout() {
    const about = document.getElementById("about");

    if (about) {
      about.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>

        <li>
          <button onClick={scrollToRecipes}>
            Recetas
          </button>
        </li>

        <li>
          <button onClick={scrollToAbout}>
            Sobre nosotros
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;