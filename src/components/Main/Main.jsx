import RecipeList from "../RecipeList/RecipeList";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";

function Main({
  onSearch,
  recipes,
  noResults,
  loading,
  onOpenRecipe,
}) {
  return (
    <main>
<Hero onSearch={onSearch} />

<About />

<Categories onSearch={onSearch} />

<RecipeList
  recipes={recipes}
  noResults={noResults}
  loading={loading}
  onOpenRecipe={onOpenRecipe}
/>
    </main>
  );
}
export default Main;