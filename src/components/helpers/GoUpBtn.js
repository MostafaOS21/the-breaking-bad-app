import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const showHideGoUp = () => {
  let goUp = document.getElementById("goUp")

  if(goUp) {
    if(window.pageYOffset > 1000) {
      goUp.style = "bottom: 30px;";
    } else {
      goUp.style = "";
    }
  }
}

  document.addEventListener("scroll", showHideGoUp)

  const getMeUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    console.log();
  }


function GoUpBtn() {
  
  

  return (
    <>
      <div id="goUp" className=" bg-green-600 
        hover:bg-green-700 transition-all duration-500
        hover:shadow-2xl text-white fixed w-14 h-14 flex-center
        rounded-full cursor-pointer
        right-[40px] bottom-[-300px] z-[9998]"
        onClick={getMeUp}>
      <FontAwesomeIcon icon={faArrowUp}/>
      </div>
    </>
  );
}

export default GoUpBtn;
