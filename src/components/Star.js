import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faRegStar} from "@fortawesome/free-regular-svg-icons";

const Star = ({index, item}) => (
    <FontAwesomeIcon icon={(index < item.rate) ? faStar : faRegStar}/>
)

export default Star;