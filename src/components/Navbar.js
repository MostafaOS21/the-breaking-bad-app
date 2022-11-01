import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

// React Router
import { Link, To } from "react-router-dom";

function Navbar() {
  const leftVal = 240;
  const leftStyle = `left: ${leftVal}px`;

  // Sider Effect
  function showSider() {
    const revealPart = document.querySelector(".reveal-part");
    const app = document.querySelector(".App");
    const layer = document.querySelector(".layer");

    revealPart.style = "left: 0";
    app.style = `margin-right: -${leftVal}px;
    margin-left: ${leftVal}px;`;

    // add layer
    layer.style = "transform: scale(1); opacity: 0.5";
  }

  function hideSider() {
    const revealPart = document.querySelector(".reveal-part");
    const app = document.querySelector(".App");
    const layer = document.querySelector(".layer");

    revealPart.style = "";
    app.style = "";

    // remove layer
    layer.style = "";
  }

  // Change theme
  function changeTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-slate-800");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  function handleNavbar() {
    let navBar = document.querySelector("nav");

    if(navBar) {
      if(window.pageYOffset > 800) {
      navBar.style = "height: 60px"
    } else {
      navBar.style = "";
    }
    }
  } 

  document.addEventListener("scroll", handleNavbar)
  return (
    <>
      <nav
        className="h-[75px] w-full 
        fixed top-0
        dark:bg-slate-800 border-b dark:border-slate-900
      bg-white center-v px-4 md:px-14 flex justify-between z-[9997] transition-all
      duration-500"
      >
        
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          className=" btn-circle
        hover:text-green-700"
          onClick={showSider}
        />

        <div
          className="change-theme relative btn-circle w-[50px] h-[50px]"
          onClick={changeTheme}
        >
          <FontAwesomeIcon
            icon={faMoon}
            size="xl"
            className="moon-icon absolute-middle
          transition-opacity
          opacity-100 dark:opacity-0"
          />
          <FontAwesomeIcon
            icon={faSun}
            size="xl"
            className="sun-icon absolute-middle
          transition-opacity opacity-0 dark:opacity-100"
          />
        </div>
      </nav>
      <div
          className="reveal-part fixed bg-black text-white top-0
        h-[100vh] w-72 left-[-300px] transition-all duration-700 z-[99999]
        uppercase"
        >
          <ul className="divide-y text-3xl font-bold py-5">
            <li className="p-3 hover:text-green-700 cursor-pointer">
              <Link to="/characters" onClick={hideSider}>
                Characters
              </Link>
            </li>
            <li className="p-3 hover:text-green-700 cursor-pointer">
              <Link to="/episodes" onClick={hideSider}>
                Episodes
              </Link>
            </li>
            <li className="p-3 hover:text-green-700 cursor-pointer">
              <Link to="/quotes" onClick={hideSider}>
                Quotes
              </Link>
            </li>
            <li className="p-3 hover:text-green-700 cursor-pointer">
              <Link to="/deaths" onClick={hideSider}>
                Deaths
              </Link>
            </li>
          </ul>
        </div>
      <span
        className="layer w-[100vw] h-[100vh] fixed top-0 left-0
      opacity-0 bg-black z-[9998] scale-0 transition-opacity duration-500"
        onClick={hideSider}
      ></span>
    </>
  );
}

export default Navbar;
