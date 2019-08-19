import React from 'react'
import { Link } from "react-router-dom"
import PersonnelPhoto from './PersonnelPhoto'

const PersonnelCard = (props) => {
  return (
    <div className="col-6 col-md-3 mb-4">
      <div className="card h-100">
        <PersonnelPhoto id={props.id} name={props.name} photo={props.photo} />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/personnel/view/${props.id}`}>{props.name}</Link>
          </h5>
          <p className="card-text">{props.title}</p>
          <p className="card-text">
            {props.department.map((item, i) => [
              i > 0 && ", ",
              <small key={i} className="text-muted">
                <Link to={`/department/view/${item.id}`}>{item.name}</Link>
              </small>
            ])}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonnelCard