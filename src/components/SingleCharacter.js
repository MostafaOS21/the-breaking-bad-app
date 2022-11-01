import GoBack from "./helpers/GoBack";

import {useRecoilState} from 'recoil';
import { searchGlobal } from "./SearchBox";

// Framer Motion
import {motion} from 'framer-motion';

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function SingleCharacter() {
  // Return search value to default
  let [val, setVal] = useRecoilState(searchGlobal);
  setVal('');


  const params = useParams();
  const api = `https://breakingbadapi.com/api/characters/${params.charId}`;
  const [character, setCharacter] = useState([]);
  let element = null;

  useEffect(() => {
    async function getSingleCharacter() {
      const res = await axios(api);
      setCharacter(res.data[0]);
    }
    getSingleCharacter();
  }, []);

  if (character) {
    element = <>
      <div className="character-pic h-44 w-44 rounded-full overflow-hidden">
        <img src={character.img}  className="object-cover overflow-hidden "/>
      </div>
      <h2 className="character-name mt-5 text-4xl font-semibold
      dark:text-white">{character.name}</h2>
      <span className="character-nickname italic
      text-lg text-slate-500 font-normal">"{character.nickname}"</span>
      <span className="character-nickname italic
      text-lg text-slate-500 font-normal">Birthday: {character.birthday}</span>

      <span className="character-nickname italic
      text-lg text-slate-500 font-normal">Actor/Actress: {character.portrayed}</span>

      <div className="char-info text-left flex  flex-col gap-3 pt-7 dark:text-white">
        <div className="text-lg font-medium">
          <span className="underline">Occupation:</span>
          <span className="italic text-base ml-1">
            {" " + character.occupation?.join(', ')}
          </span>
        </div>
        <div className="text-lg font-medium">
          <span className="underline">Status:</span>
          <span className="italic text-base ml-1">
            {" " + character.status}
          </span>
        </div>
        <div className="text-lg font-medium">
          <span className="underline">Breaking Bad:</span>
          <span className="italic text-lg ml-1">
            {" " + character.appearance?.join(', ')}
          </span>
        </div>
        <div className="text-lg font-medium">
          <span className="underline">Better Call Saul:</span>
          <span className="italic text-lg ml-1">
          
            {" " + character.better_call_saul_appearance?.length > 0 ?
            character.better_call_saul_appearance?.join(', ') : 'No'}
          </span>
        </div>
      </div>
    </>
  }

  function goBackExtraEnter() {
    const goBack = document.querySelector('.go-back-extra');

    goBack.classList.add('w-20');
    goBack.classList.add('px-2');
    goBack.classList.remove('w-0');
  }

  function goBackExtraLeave() {
    const goBack = document.querySelector('.go-back-extra');

    goBack.classList.add('w-0');
    goBack.classList.remove('w-20');
    goBack.classList.remove('px-2');
  }

  return (
    <section className="single-character px-16 mx-auto center-v flex-col
    relative pt-28">
      <GoBack to="/characters"/>
      {element}
    </section>
  );
}

export default SingleCharacter;
