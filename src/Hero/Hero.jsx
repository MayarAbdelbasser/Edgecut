import "./Hero.css";
import sectionImg from "../assets/slider-img.png";

function Section() {
  return (
    <section className="section" id="hero">
      <div className="container section__container">
        <div className="section__info">
          <h2>For All Your Furniture Needs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
          <div className="section__info__btns">
            <a href="#" className="btn btn-secondary">
              Contact Us
            </a>
            <a href="#" className="btn btn-primary">
              About Us
            </a>
          </div>
        </div>
        <div className="section__img">
          <img src={sectionImg} alt="section-img" />
        </div>
      </div>
    </section>
  );
}
export default Section;
