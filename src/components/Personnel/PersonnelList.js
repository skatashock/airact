import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonnelCard from './PersonnelCard'
import Form from 'react-bootstrap/Form'

const PERSONNEL_LIST_URL = process.env.REACT_APP_BASE_URL + 'personnel/list/1'

const PersonnelList = () => {
  const [data, setData] = useState({personnels: [], filteredPersonnels: [], isFetching: false})

  useEffect(() => {
    const fetchPersonnels = async () => {
      try {
        const response = await axios.get(PERSONNEL_LIST_URL)
        setData({personnels: response.data, filteredPersonnels: response.data, isFetching: false})
      } catch (e) {
        console.log(e)
        setData({personnels: data.personnels, filteredPersonnels: data.personnels, isFetching: false})
      }
    }
    fetchPersonnels()
    // eslint-disable-next-line
  }, [])

  const handleFilter = (event) => {
    let filteredPersonnels = data.personnels
    filteredPersonnels = filteredPersonnels.filter((item) => {
      let personnelName = item.name.toLowerCase()
      return personnelName.indexOf(
        event.target.value.toLowerCase()) !== -1
    })

    setData({ personnels: data.personnels, filteredPersonnels: filteredPersonnels, isFetching: false })

    //setData({ personnels: filteredPersonnels, isFetching: false })
  }

  return (
    <React.Fragment>
      <Form.Control size="lg" type="text" placeholder="Filter name" 
        onChange={handleFilter}
      />
      <div className="row mb-4 mt-2">
        {data.filteredPersonnels.map(item => (
          <PersonnelCard key={item.id} {...item} />
        ))}
      </div>
      <p>{data.isFetching ? 'Fetching users...' : ''}</p>
    </React.Fragment>
  )
}

export default PersonnelList