import { useState } from "react";
import {atom, useRecoilState} from 'recoil';

export const searchGlobal = atom({
  key: 'searchGlobal',
  default: '',
})

function SearchBox() {
  const [searchVal, setSearchVal] = useRecoilState(searchGlobal);
  const handleInputChnage = () => {
    let searcBar = document.getElementById("search-bar");
    setSearchVal(searcBar.value);
  };
  return (
    <section className="search-box center-v gap-16 flex-col pt-8">
      <input
        id="search-bar"
        type="text"
        className="bg-slate-100
        dark:bg-slate-900 normalize-input p-4 
        lg:w-[480px] w-[300px] px-5 rounded-full
        hover:bg-slate-200 hover:dark:bg-slate-700 hover:-translate-y-[2px]
        shadow-md hover:shadow-lg transition
        focus:bg-slate-100 focus:dark:bg-slate-900
        dark:text-white focus:-translate-y-[2px]"
        placeholder="Search character"
        onChange={handleInputChnage}
      />
    </section>
  );
}

export default SearchBox;
