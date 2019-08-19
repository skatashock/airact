import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      {data.personnel.name}
      <p>{data.isFetching ? 'Fetching user details...' : ''}</p>
    </div>
  )
}

export default PersonnelView