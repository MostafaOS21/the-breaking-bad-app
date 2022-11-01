// Img src
import logoSrc from "../assets/imgs/Breaking_Bad_logo.png";

import { Link } from "react-router-dom";

import {motion} from 'framer-motion';

function Welcome() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <section className="pt-32 dark:text-white">
        <h1 className="text-4xl font-bold mb-5">
          All Of
            <Link to="/" className="block w-56 mx-auto my-10">
              <img src={logoSrc} className="w-56 mt-10" />
            </Link>
          In One Place
        </h1>
        <span className="underline underline-offset-2">
          Choose what you want from the menu
        </span>
      </section>
    </motion.div>
  );
}

export default Welcome;
