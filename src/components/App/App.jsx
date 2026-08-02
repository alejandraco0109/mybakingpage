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


 function handleSearch(searchTerm) {
  setLoading(true);

  searchRecipes(searchTerm)
    .then((data) => {
      if (data.meals) {
        setRecipes(data.meals);
        setNoResults(false);
      } else {
        setRecipes([]);
        setNoResults(true);
      }
    })
    .catch((err) => {
      console.error(err);
      setRecipes([]);
      setNoResults(true);
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