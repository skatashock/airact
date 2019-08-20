import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonnelCard from './PersonnelCard'
import Form from 'react-bootstrap/Form'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_URL = BASE_URL + 'personnel/list/1'
const useMountEffect = (fun) => useEffect(fun, [])

const PersonnelList = () => {

  const [personnels, setPersonnels] = useState([])
  const [filtered, setFiltered] = useState([])
  const [fetching, setFetching] = useState(false)

  useMountEffect(() => {
    const fetchPersonnels = async () => {
      try {
        setFetching(true)
        const response = await axios.get(API_URL)
        setPersonnels(response.data)
        setFiltered(response.data)
        setFetching(false)
      } catch (e) {
        setFetching(false)
        console.log(e)
      }
    }
    fetchPersonnels()
  })

  const handleFilter = (event) => {
    let filteredPersonnels = personnels
    filteredPersonnels = filteredPersonnels.filter((item) => {
      let personnelName = item.name.toLowerCase()
      return personnelName.indexOf(
        event.target.value.toLowerCase()) !== -1
    })

    setFiltered(filteredPersonnels)
  }

  return (
    <React.Fragment>
      <Form.Control size="lg" type="text" placeholder="Filter name" 
        onChange={handleFilter}
      />
      <div className="row mb-4 mt-2">
        {filtered.map(item => (
          <PersonnelCard key={item.id} {...item} />
        ))}
      </div>
      <p>{fetching ? 'Fetching users...' : ''}</p>
    </React.Fragment>
  )
}

export default PersonnelList