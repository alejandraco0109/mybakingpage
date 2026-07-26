import "../Categories/Categories.css";

function Categories({ onSearch }) {
 const categories = [
  { label: "🍰 Cakes", search: "cake" },
  { label: "🧁 Cupcakes", search: "cupcake" },
  { label: "🍪 Cookies", search: "cookie" },
  { label: "🥐 Breads", search: "bread" },
  { label: "🍩 Donuts", search: "donut" },
  { label: "🍓 Tarts", search: "tart" },
];

  return (
    <section className="categories">
      <h2 className="categories__title">
        Featured Categories
      </h2>

      <div className="categories__list">
{categories.map((category) => (
  <button
    key={category.label}
    className="categories__button"
    onClick={() => onSearch(category.search)}
  >
    {category.label}
  </button>
))}
      </div>
    </section>
  );
}

export default Categories;