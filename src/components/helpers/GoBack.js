import {Link} from 'react-router-dom';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GoBack(props) {
  const stepBack = props.to;

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
    <Link
      className="go-back absolute left-[12px] md:left-[60px] top-[100px] p-4
      bg-green-300 rounded-lg
      hover:shadow-2xl center-v gap-3"
      onMouseEnter={goBackExtraEnter}
      onMouseLeave={goBackExtraLeave}
      to={stepBack}
    >
      <FontAwesomeIcon icon={faArrowLeft} size="sm" />
      <span
        className="go-back-extra absolute left-8 h-full rounded-lg 
        flex-center bg-green-300 w-0  transition-all whitespace-nowrap overflow-hidden z-[0]"
      >
        Go Back
      </span>
    </Link>
  );
}

export default GoBack;
