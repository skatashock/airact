import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const BASE_URL = process.env.REACT_APP_BASE_URL
const useMountEffect = (fun) => useEffect(fun, [])

const PersonnelView = (props) => {
  const [personnel, setPersonnel] = useState({})
  const [fetching, setFetching] = useState(false)

  useMountEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const API_URL = BASE_URL + 'personnel/view/' + props.match.params.id
        setFetching(true)
        const response = await axios.get(API_URL)
        setPersonnel(response.data)
        setFetching(false)
      } catch (e) {
        console.log(e)
        setFetching(false)
      }
    }
    fetchPersonnel()
  })

  return (
    <div>
      <p><Link to="/">Go Back</Link></p>
      <ul>
        <li>Name: {personnel.name}</li>
        <li>Title: {personnel.title}</li>
        <li>Department:</li>
        <li>Social Security #: {personnel.ssn}</li>
        <li>Home Address: {personnel.address}</li>
        <li>Main Email: {personnel.email}</li>
        <li>Birthdate: {personnel.birthdate}</li>
        <li>Date of Hire: {personnel.hiredDate}</li>
        <li>Reporting To: {personnel.reportingTo}</li>
        <li>Status: {personnel.status}</li>
      </ul>
      <p>{fetching ? 'Fetching user details...' : ''}</p>
    </div>
  )
}

export default PersonnelView