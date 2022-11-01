import axios from "axios";
import { useEffect, useState } from "react";
import GoBack from "./helpers/GoBack";
import {motion} from "framer-motion";

import GoUpBtn from "./helpers/GoUpBtn";

function Deaths() {
  let [deaths, setDeaths] = useState();
  let elements = null;

  useEffect(() => {
    async function getDeaths() {
      const res = await axios("https://breakingbadapi.com/api/deaths");

      setDeaths(res.data);
    }
    getDeaths();
  }, [])

  if (deaths) {
    elements = deaths.map((d) => {
      let last_words_element;
      if(d.last_words === "Unknown") {
        last_words_element = <p className="
        text-3xl bg-slate-500 text-white
        p-2 block my-2 w-fit mx-auto
        ">({d.last_words})</p>;
      } else {
        last_words_element = <q className="
        text-3xl italic bg-green-500 text-white
        p-2 block my-2 w-fit mx-auto
        ">{d.last_words}</q>;
      }
      return (
        <div className="quote py-14 flex flex-col" key={d.death_id}>
          <div className="death-eps flex gap-10 mx-auto">
          <span className="text-slate-400 italic text-lg">Season :  {d.season}</span>
          <span className="text-slate-400 italic text-lg">Episode :  {d.episode}</span>
          </div>
          <h2 className="text-2xl mt-4 mb-2 dark:text-white">
            Last words: <br/>
            {last_words_element}
          </h2>
          <h2 className="text-2xl text-red-500 mb-4">Death of : {d.death}</h2>
          <span className="text-slate-400 italic text-lg">Responsible :  {d.responsible}</span>
          <span className="text-slate-400 italic text-lg">Reasone :  {d.cause}</span>
        </div>
      );
    });
  }
  return(
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    > 
      <GoUpBtn />
      <section className="py-14 px-16 relative pt-28">
        <GoBack to="/"/>
        <h1 className="section-head">deaths</h1>
        <div className="divide-y-2
      divide-gray-200 dark:divide-gray-600">
        {elements}
        </div>
      </section>
    </motion.div>
  )
}

export default Deaths;