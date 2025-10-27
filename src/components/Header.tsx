import Button from "./UI/Button";
import Logo from "../../assets/climbing-4-svgrepo-com.svg";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (window.scrollY < lastScrollY && lastScrollY - window.scrollY > 2) {
        setScrolled(true);
      } else if (
        window.scrollY > lastScrollY &&
        window.scrollY > 50 &&
        lastScrollY - window.scrollY < -2
      ) {
        setScrolled(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <header
      id="header"
      className="z-10 flex-center-hor justify-between bg-[#B6CEB4] sticky top-0 pt-[1rem] pb-[1rem]"
    >
      <div id="header-left-section" className="relative left-6"></div>
      <div
        id="header-center-section"
        className="flex justify-center items-center absolute left-[50%] translate-x-[-50%]"
      >
        <img
          id="header-logo-image"
          src={Logo}
          alt="Cratlas Logo"
          className="w-10 h-10 "
        />
        <h3 id="header-logo-text" className="font-extrabold italic text-3xl">
          CRATLAS
        </h3>
      </div>
      <div
        id="header-right-section"
        className={`relative right transition-all duration-800 ease ${
          scrolled ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
        }`}
      >
        <Button
          id="header"
          className="bg-[#B6CEB4] text-[var(--primary-text)] "
        >
          SIGN IN
        </Button>
        <Button id="header" className="bg-[#96A78D] text-[var(--primary-text)]">
          SIGN UP
        </Button>
      </div>
    </header>
  );
}

export default Header;
