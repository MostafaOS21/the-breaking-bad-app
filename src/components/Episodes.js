import axios from "axios";
import { useEffect, useState } from "react";

import {Link} from 'react-router-dom';

// Breaking Bad Imgs
import breakingBadLogo from "./../assets/imgs/Breaking_Bad_logo.png";
import breakingBadS1 from './../assets/imgs/breaking_bad_seasons/s1.jpg';
import breakingBadS2 from './../assets/imgs/breaking_bad_seasons/s2.jpg';
import breakingBadS3 from './../assets/imgs/breaking_bad_seasons/s3.jpg';
import breakingBadS4 from './../assets/imgs/breaking_bad_seasons/s4.jpg';
import breakingBadS5 from './../assets/imgs/breaking_bad_seasons/s5.jpg';

// Better Call Saul
import betterCallSaulLogo from "./../assets/imgs/better_call_saul_logo.png";
import betterCallSaulS1 from './../assets/imgs/better_call_saul_season/s1.jpg'
import betterCallSaulS2 from './../assets/imgs/better_call_saul_season/s2.jpg'
import betterCallSaulS3 from './../assets/imgs/better_call_saul_season/s3.jpg'
import betterCallSaulS4 from './../assets/imgs/better_call_saul_season/s4.jpg'
import betterCallSaulS5 from './../assets/imgs/better_call_saul_season/s5.jpg'
import betterCallSaulS6 from './../assets/imgs/better_call_saul_season/s6.jpg'

// Go Up Button
import GoUpBtn from "./helpers/GoUpBtn";

function Episodes() {
  let [episodes, setEpisodes] = useState();
  let elements = null;
  useEffect(() => {
    async function getEpisodes() {
      const res = await axios("https://breakingbadapi.com/api/episodes");

      setEpisodes(res.data);
    }
    getEpisodes();
  }, []);

  if(episodes) {
    elements = episodes;
  }

  // Breaking Bad Hover

  function addCardHover(e, series) {
    let img = e.target.parentElement.children[0];
    let spnLayer = e.target.parentElement.children[1];

    let color = series === 'Breaking Bad' ? 'green' : 'red';
    img.classList.add('scale-[1.1]');
  }

  function removeCardHover(e, series) {
    let img = e.target.parentElement.children[0];
    let spnLayer = e.target.parentElement.children[1];

    let color = series === 'Breaking Bad' ? 'green' : 'red';
    // spnLayer.classList.add(`bg-black`);
    // spnLayer.classList.remove(`bg-${color}-700`);
    img.classList.remove('scale-[1.1]');
  }

  return (
    <>
      <GoUpBtn />
      <section className="episodes mx-auto py-14 px-16 pt-28">
        <h1 className="section-head">episodes</h1>
        <div className="row grid divide-y-2 grid-cols-1
      divide-gray-200 dark:divide-gray-600 mt-10">
        <div className="breaking-bad-eps py-5">
          <img src={breakingBadLogo} className="h-44 mx-auto"/>
          <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 py-5">
            {
              elements?.map((el) => {
                if (el.series === "Breaking Bad") {
                  let imgSrc;
                  if(+el.season === 1) {
                    imgSrc = breakingBadS1;
                  } else if(el.season === "2") {
                    imgSrc = breakingBadS2;
                  } else if(el.season === "3") {
                    imgSrc = breakingBadS3;
                  } else if(el.season === "4") {
                    imgSrc = breakingBadS4;
                  } else if(el.season === "5") {
                    imgSrc = breakingBadS5;
                  } 

                  return(
                    <Link className="card relative" key={el.episode_id}
                    onMouseEnter={(e) => {addCardHover(e, el.series)}}
                    onMouseLeave={(e) => {removeCardHover(e, el.series)}}
                    to={`/episodes/${el.episode_id}`}
                    >
                    <img src={imgSrc} className="blur-[2px] h-full w-full z-0 absolute
                    transition-transform duration-700"/>
                    <div className="ep-info absolute-middle
                    before-layer
                    hover:before:bg-green-700
                    font-bold text-white z-30 w-full h-full flex-center flex-col">
                      <h2 className="season text-xl relative z-30">Season: {el.season}</h2>
                      <h2 className="eps mt-5 text-2xl relative z-30">Episode: {el.episode}</h2>
                    </div>
                  </Link>
                  )
                }
              })
            }
          </div>
        </div>
        <div className="better-call-saul-eps py-5">
          <img src={betterCallSaulLogo} className="h-44 mx-auto"/>

          <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 py-5">
            {
              elements?.map((el) => {
                if (el.series === "Better Call Saul") {
                  let imgSrc;
                  if(+el.season === 1) {
                    imgSrc = betterCallSaulS1;
                  } else if(el.season === "2") {
                    imgSrc = betterCallSaulS2;
                  } else if(el.season === "3") {
                    imgSrc = betterCallSaulS3;
                  } else if(el.season === "4") {
                    imgSrc = betterCallSaulS4;
                  } else if(el.season === "5") {
                    imgSrc = betterCallSaulS5;
                  } else if(el.season === "6") {
                    imgSrc = betterCallSaulS6;
                  } 

                  return(
                    <Link className="card relative" key={el.episode_id}
                    onMouseEnter={(e) => {addCardHover(e, el.series)}}
                    onMouseLeave={(e) => {removeCardHover(e, el.series)}}
                    to={`/episodes/${el.episode_id}`}
                    >
                    <img src={imgSrc} className="blur-[2px] h-full w-full z-0 absolute
                    transition-transform duration-700"/>
                    <div className="ep-info absolute-middle 
                    before-layer
                    hover:before:bg-red-700
                    font-bold text-white z-30 w-full h-full flex-center flex-col">
                      <h2 className="season text-xl relative z-30">Season: {el.season}</h2>
                      <h2 className="eps mt-5 text-2xl relative z-30">Episode: {el.episode}</h2>
                    </div>
                  </Link>
                  )
                }
              })
            }
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Episodes;
