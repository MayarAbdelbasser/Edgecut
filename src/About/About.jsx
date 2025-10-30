import "./About.css";
import aboutImg from "../assets/about-img.png";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container section__container">
        <div className="section__img">
          <img src={aboutImg} alt="section-img" />
        </div>
        <div className="section__info">
          <h2>About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
          <div className="section__info__btns">
            <a href="#" className="btn btn-primary">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
