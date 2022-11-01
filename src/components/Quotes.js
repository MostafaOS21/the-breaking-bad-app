import { useEffect, useState } from "react";
import axios from "axios";
import GoBack from "./helpers/GoBack";

import {motion} from "framer-motion";

import GoUpBtn from "./helpers/GoUpBtn";

function Quotes() {
  let [quotes, setQuotes] = useState();
  let elements = null;
  useEffect(() => {
    async function getQuotes() {
      const res = await axios("https://breakingbadapi.com/api/quotes");
      setQuotes(res.data);
    }

    getQuotes();
  }, []);

  if (quotes) {
    elements = quotes.map((q) => {
      return (
        <div className="quote py-14 flex flex-col" key={q.quote_id}>
          <span className="text-slate-400 italic text-sm">from "{q.series}"</span>
          <q className="text-2xl italic dark:text-white my-4">{q.quote}</q>
          <span className="text-slate-400 italic text-lg">{q.author}</span>
        </div>
      );
    });
  }

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    > 
      <GoUpBtn />
      <section className="py-14 px-16 relative pt-28">
        <GoBack to="/"/>
        <h1 className="section-head">Quotes</h1>
        <div className="row grid divide-y-2 grid-cols-1
        divide-gray-200 dark:divide-gray-600 mt-10">{elements}</div>
      </section>
    </motion.div>
  );
}

export default Quotes;
