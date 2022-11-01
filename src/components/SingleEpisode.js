import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GoBack from "./helpers/GoBack";

function SingleEpisode() {
  const eps = useParams();
  let [epsInfo, setEpsInfo] = useState();
  let elements = null;
  useEffect(() => {
    async function getSingleEpisodes() {
      const res = await axios(`https://breakingbadapi.com/api/episodes/${eps.epsId}`);
      setEpsInfo(res.data);
    }
    getSingleEpisodes()
  }, [])

  if(epsInfo) {
    elements = epsInfo.map((el) => {
      return(
        <div className="eps-info dark:text-white" key={el.episode_id}>
          <p>
            <span className="mr-7">Season: {el.season}</span>
            <span>Episode: {el.episode}</span>
          </p>
          <h1 className="text-4xl font-semibold mt-4">{el.title}</h1>
          <span className="italic text-sm text-slate-400">from "{el.series}"</span>
          <p className="w-60 mx-auto mt-4 text-lg">
            characters: <br/>
            <span className="italic">
              {el.characters.join(', ')}
            </span> 
          </p>
        </div>
      )
    });
  }

  return (
    <section className="single-eps py-14 px-16 relative pt-28">
      <GoBack to="/episodes"/>
      {elements}
    </section>
  )
}

export default SingleEpisode