import "../RecipeCard/RecipeCard.css";

function RecipeCard({ recipe, onOpenRecipe }) {
  return (
    <article className="recipe-card">
      <img
  className="recipe-card__image"
  src={recipe.strMealThumb}
  alt={recipe.strMeal}
/>

<div className="recipe-card__content">
  <h3 className="recipe-card__title">
    {recipe.strMeal}
  </h3>

  <p className="recipe-card__category">
    🍰 {recipe.strCategory}
  </p>

<button
  className="recipe-card__button"
  onClick={() => onOpenRecipe(recipe)}
>
  View Recipe
</button>
</div>
    </article>
  );
}

export default RecipeCard;