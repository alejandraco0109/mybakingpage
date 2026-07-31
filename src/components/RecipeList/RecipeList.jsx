import { useState } from "react";
import "../RecipeList/RecipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeList({
  recipes,
  noResults,
  loading,
  onOpenRecipe,
}) {
  const [visibleRecipes, setVisibleRecipes] = useState(3);

  if (loading) {
    return (
      <section className="recipes">
        <h2 className="recipes__title">
          🍰 Loading recipes...
        </h2>

        <div className="recipes__loader"></div>
      </section>
    );
  }

  if (noResults) {
    return (
      <section className="recipes">
        <h2 className="recipes__title">
          🍓 No recipes found
        </h2>

        <p className="recipes__empty">
          Try searching for another delicious dessert!
        </p>
      </section>
    );
  }

  return (
    <section className="recipes">
      <h2 className="recipes__title">
        Featured Recipes
      </h2>

      <div className="recipes__grid">
        {recipes
          .slice(0, visibleRecipes)
          .map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onOpenRecipe={onOpenRecipe}
            />
          ))}
      </div>

      {visibleRecipes < recipes.length && (
        <button
          className="recipes__show-more"
          onClick={() =>
            setVisibleRecipes((prev) => prev + 3)
          }
        >
          Show More 🍰
        </button>
      )}
    </section>
  );
}

export default RecipeList;