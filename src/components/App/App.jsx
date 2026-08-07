import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RecipeList from "../RecipeList/RecipeList";
import RecipeModal from "../RecipeModal/RecipeModal";

import { searchRecipes } from "../../utils/TheMealDBApi";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const location = useLocation();

   useEffect(() => {
    if (window.location.hash === "#about") {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  useEffect(() => {
  searchRecipes("cake")
    .then((data) => {
      if (data.meals) {
        setRecipes(data.meals.slice(0, 3));
      }
    })
    .catch((err) => {
      console.error(err);
    });
}, []);


 function handleSearch(searchTerm) {
  setLoading(true);
  setApiError(false);

  searchRecipes(searchTerm)
    .then((data) => {
      if (data.meals) {
        setRecipes(data.meals);
        setNoResults(false);
        setApiError(false);
      } else {
        setRecipes([]);
        setNoResults(true);
        setApiError(false);
      }
    })
    .catch((err) => {
      console.error(err);
      setRecipes([]);
      setNoResults(true);
      setApiError(true);
    })
    .finally(() => {
      setLoading(false);
    });
}

  function handleOpenRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleCloseRecipe() {
    setSelectedRecipe(null);
  }

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearch}
              recipes={recipes}
              noResults={noResults}
              apiError={apiError}
              loading={loading}
              onOpenRecipe={handleOpenRecipe}
            />
          }
        />

        <Route
          path="/recipes"
          element={
            <RecipeList
              recipes={recipes}
              noResults={noResults}
              apiError={apiError}
              loading={loading}
              onOpenRecipe={handleOpenRecipe}
            />
          }
        />
      </Routes>

      <RecipeModal
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
      />

      <Footer />
    </>
  );
}

export default App;