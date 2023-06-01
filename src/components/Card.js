import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const Card = ({detail}) => {
  return (
    <div className="card">
        <img src={detail.image.original} class="card__image2" />
    <div className="card__body">
       <h2 className="card__title">{detail.name}</h2>
      <p className="card__description">{detail.status}</p>
    </div>
   <Link to={`/summary/${detail.id}`}> <button className="card__btn" >View Details</button></Link>
  </div>
  )
}

export default Card