import "./Footer.css";
import { Phone, Mail, MapPin } from "lucide-react";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f4.png";
import img5 from "../assets/f5.png";
import img6 from "../assets/f6.png";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__contacts">
          <div className="footer__contacts__one transition">
            <Phone />
            <p>Call: +01 123455678990</p>
          </div>
          <div className="footer__contacts__one transition">
            <Mail />
            <p>Email: demo@gmail.com</p>
          </div>
          <div className="footer__contacts__one transition">
            <MapPin />
            <p>Location</p>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__links__one">
            <p>quick links</p>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#furnitures">furniture</a>
              </li>
              <li>
                <a href="#blogs">blog</a>
              </li>
              <li>
                <a href="#contact">contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer__links__one">
            <p>INSTAGRAM FEEDS</p>
            <div className="footer__images">
              <img src={img1} alt="product-image" />
              <img src={img2} alt="product-image" />
              <img src={img3} alt="product-image" />
              <img src={img4} alt="product-image" />
              <img src={img5} alt="product-image" />
              <img src={img6} alt="product-image" />
            </div>
          </div>
          <div className="footer__links__one">
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <a href="#" className="btn btn-primary">
                Subscribe
              </a>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
