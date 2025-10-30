import { useEffect } from "react";
import About from "./About/About";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    lenis.on("scroll", (e) => console.log(e));

    window.__lenis__ = lenis; // store globally to prevent double init

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      window.__lenis__ = null; // store globally to prevent double init
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
