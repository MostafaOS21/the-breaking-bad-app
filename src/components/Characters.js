import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Recoil
import {useRecoilState} from 'recoil';
import { searchGlobal } from "./SearchBox";

// Img src
import logoSrc from "../assets/imgs/Breaking_Bad_logo.png";

// Search box
import SearchBox from "./SearchBox";

// Framer Motion
import {motion} from 'framer-motion';

// Go Up Button
import GoUpBtn from "./helpers/GoUpBtn";

function Characters() {
  let [chars, setChars] = useState();
  let [searchVal, setSearchVal] = useRecoilState(searchGlobal);

  let elements;
  useEffect(() => {
    async function getChars() {
      let res = await axios("https://breakingbadapi.com/api/characters");
      setChars(res.data);
    }
    getChars();
  }, []);

  // Show And Hide Name When Hover
  function showNameEnter(e) {
    const paragraph = e.target.parentElement.children[1];
    const spn = e.target.parentElement.children[1].children[0];

    paragraph.style = "opacity: 1";
    spn.style = "transform: translatey(0)";
  }

  function hideNameLeave(e) {
    const paragraph = e.target.parentElement.children[1];
    const spn = e.target.parentElement.children[1].children[0];

    paragraph.style = "";
    spn.style = "";
  }

  if (chars) {
    elements = chars.map((char) => {
      const charLink = `/characters/${char.char_id}`;
      if(`${char.name}`.toLowerCase().includes(searchVal.toLowerCase())) {
        return (
            <Link
            to={charLink}
            className="card"
            key={char.char_id}
            onMouseEnter={(e) => {
              showNameEnter(e);
            }}
            onMouseLeave={(e) => {
              hideNameLeave(e);
            }}
          >
            <img loading="lazy" src={char.img} className="h-full w-full relative z-0" />
            <div
              className="name absolute z-20 bottom-0
            left-1/2 -translate-x-1/2 text-lg font-bold
            text-white  w-full h-20 flex-center
            bg-gradient-to-t from-green-700 to-transparent opacity-0 transition-opacity"
            >
              <span
                className="spn-name translate-y-14
              transition-transform duration-200"
              >
                {char.name}
              </span>
            </div>
          </Link>
        );
      }
      
    });
  }

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <GoUpBtn />
      <Link to="/" className="block w-56 mx-auto pt-28">
        <img src={logoSrc} className="w-56 mt-10" />
      </Link>
      <SearchBox />
      <section className="characters mx-auto py-14 px-16">
        <h1 className="section-head">characters</h1>
        <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {elements}
        </div>
      </section>
    </motion.div>
  );
}

export default Characters;
