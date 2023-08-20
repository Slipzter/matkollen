import { Preference } from "@/types"
import { useState } from "react";



function PreferenceCard(props: Preference) {

	const [buttonDisplay, setButtonDisplay] = useState('none');

	const handleClick = () => {
		buttonDisplay === 'none' ? setButtonDisplay('block') : setButtonDisplay('none');
	}

  return (
    <li onClick={handleClick} className="preference-card">{props.name}
		<button style={{display: buttonDisplay}} className="preference-card__button"><i className="fa fa-times"></i></button>
	</li>
  )
}

export default PreferenceCard