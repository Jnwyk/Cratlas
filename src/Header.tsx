import Button from "./UI/Button";
import Logo from "../assets/climbing-4-svgrepo-com.svg";

function Header() {
  return (
    <header
      id="header"
      className="flex justify-between items-center bg-amber-200 h-per-8 sticky top-0"
    >
      <div id="header-left-section" className="relative left-6"></div>
      <div
        id="header-center-section"
        className="flex justify-center items-center"
      >
        <img
          id="header-logo-image"
          src={Logo}
          alt="Cratlas Logo"
          className="w-10 h-10 "
        />
        <h3 id="header-logo-text" className="font-extrabold italic text-3xl ">
          CRATLAS
        </h3>
      </div>
      <div id="header-right-section" className="relative right-6">
        <Button id="header" className="bg-amber-200 text-[var(--primary-text)]">
          SIGN IN
        </Button>
        <Button id="header" className="bg-amber-400 text-[var(--primary-text)]">
          SIGN UP
        </Button>
      </div>
    </header>
  );
}

export default Header;
