import { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [navMenuShown, setNavMenuShown] = useState(false);
  function showNavMenu() {
    setNavMenuShown(!navMenuShown);
  }
  //show nav menu
  const menuClassName = `nav__menu transition ${navMenuShown ? "active" : ""}`;
  const toggleClassName = `nav__toggle ${navMenuShown ? "active" : ""}`;
  //handle outside click
  const componentRef = useRef(null);
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setNavMenuShown(false);
      console.log("Clicked outside!");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header ref={componentRef}>
      <div className="header__container">
        <a href="#hero" className="transition header__logo">
          Edgecut
        </a>
        <button className={toggleClassName} onClick={showNavMenu}>
          <span className="transition bar"></span>
          <span className="transition bar"></span>
          <span className="transition bar"></span>
        </button>
        <nav>
          <ul className={menuClassName}>
            <li>
              <a href="#hero" className="transition">
                home
              </a>
            </li>
            <li>
              <a href="#about" className="transition">
                about
              </a>
            </li>
            <li>
              <a href="#furnitures" className="transition">
                furnitures
              </a>
            </li>
            <li>
              <a href="#blogs" className="transition">
                blog
              </a>
            </li>
            <li>
              <a href="#contact" className="transition">
                contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
