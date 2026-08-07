import RecipeList from "../RecipeList/RecipeList";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";

function Main({
  onSearch,
  recipes,
  noResults,
  apiError,
  loading,
  onOpenRecipe,
}) {

return (
  <main>
    <Hero onSearch={onSearch} />

    <Categories onSearch={onSearch} />

  <section id="recipes">
  <RecipeList
    recipes={recipes}
    noResults={noResults}
    apiError={apiError}
    loading={loading}
    onOpenRecipe={onOpenRecipe}
  />
</section>

    <About />
  </main>
  );
}
export default Main;