import { useEffect } from "react";
import "../RecipeModal/RecipeModal.css";

function RecipeModal({ recipe, onClose }) {
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape" && recipe) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEsc
      );
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          className="modal__image"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <h2>{recipe.strMeal}</h2>

        <p>
          <strong>Category:</strong>{" "}
          {recipe.strCategory}
        </p>

        <p>
          <strong>Origin:</strong> {recipe.strArea}
        </p>

        <h3>🥣 Ingredients</h3>

        <ul className="modal__ingredients">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>

        <h3>📝 Instructions</h3>

        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeModal;