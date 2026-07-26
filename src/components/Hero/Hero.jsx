import "../Hero/Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero({ onSearch }) {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__welcome">
            ✨ Welcome to Sweet Moments
          </p>

          <h1 className="hero__title">
            Bake with Love,
            <br />
            Create Sweet Memories
          </h1>

          <p className="hero__description">
            Discover beautiful dessert recipes from around the world.
          </p>

          <SearchForm onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}

export default Hero;