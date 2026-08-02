import { useState } from "react";
import "../SearchForm/SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Search your favorite dessert..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        className="search__button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;