import React from 'react'
import { Link } from "react-router-dom"

const PersonnelPhoto = (props) => {
  let imgURL =
    "https://dummyimage.com/512x512/eeeeee/000000.jpg&text=No+Employee+Image"

  if (props.photo) {
    imgURL = props.photo
  }

  return (
    <Link to={`/personnel/view/${props.id}`}>
      <img className="card-img-top" src={imgURL} alt={props.name} />
    </Link>
  )
}

export default PersonnelPhoto