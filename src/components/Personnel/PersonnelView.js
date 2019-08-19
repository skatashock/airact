import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const PersonnelView = (props) => {
  const [data, setData] = useState({ personnel: {}, isFetching: false })

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const PERSONNEL_VIEW_URL = process.env.REACT_APP_BASE_URL + 'personnel/view/' + props.match.params.id
        setData({ personnel: data.personnel, isFetching: true })
        const response = await axios.get(PERSONNEL_VIEW_URL)
        setData({ personnel: response.data, isFetching: false })
      } catch (e) {
        console.log(e)
        setData({ personnel: data.personnel, isFetching: false })
      }
    }
    fetchPersonnel()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <p><Link to="/">Go Back</Link></p>
      <ul>
        <li>Name: {data.personnel.name}</li>
        <li>Title: {data.personnel.title}</li>
        <li>Department:</li>
        <li>Social Security #: {data.personnel.ssn}</li>
        <li>Home Address: {data.personnel.address}</li>
        <li>Main Email: {data.personnel.email}</li>
        <li>Birthdate: {data.personnel.birthdate}</li>
        <li>Date of Hire: {data.personnel.hiredDate}</li>
        <li>Reporting To: {data.personnel.reportingTo}</li>
        <li>Status: {data.personnel.status}</li>
      </ul>
      <p>{data.isFetching ? 'Fetching user details...' : ''}</p>
    </div>
  )
}

export default PersonnelView