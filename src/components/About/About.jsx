import "../About/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me 👩‍💻</h2>

        <p className="about__text">
          Hi! I'm Alejandra, a web development student with a background in
          architecture and a passion for creating beautiful, user-friendly
          websites. I enjoy combining creativity with technology to build
          projects that are both functional and visually appealing.
        </p>

        <p className="about__text">
          Sweet Moments is my final React project, inspired by my love for
          baking and cozy pastel aesthetics. It uses TheMealDB API to help users
          discover delicious dessert recipes from around the world while
          providing a modern and enjoyable browsing experience.
        </p>

        <p className="about__text">
          Thank you for visiting my project, and I hope you enjoy exploring
          these sweet recipes as much as I enjoyed creating this application!
          🍰✨
        </p>
      </div>
    </section>
  );
}

export default About;