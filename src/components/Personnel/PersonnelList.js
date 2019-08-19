import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonnelCard from './PersonnelCard'

const PERSONNEL_LIST_URL = process.env.REACT_APP_BASE_URL + 'personnel/list/1'

const PersonnelList = () => {
  const [data, setData] = useState({personnels: [], isFetching: false})

  useEffect(() => {
    const fetchPersonnels = async () => {
      try {
        setData({personnels: data.personnels, isFetching: true})
        const response = await axios.get(PERSONNEL_LIST_URL)
        setData({personnels: response.data, isFetching: false})
      } catch (e) {
        console.log(e)
        setData({personnels: data.personnels, isFetching: false})
      }
    }
    fetchPersonnels()
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      <div className="row mb-4 mt-2">
        {data.personnels.map(item => (
          <PersonnelCard key={item.id} {...item} />
        ))}
      </div>
      <p>{data.isFetching ? 'Fetching users...' : ''}</p>
    </React.Fragment>
  )
}

export default PersonnelList