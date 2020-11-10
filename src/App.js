import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.netlify.app/api/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [myJob, setMyJob] = useState([])
  const [myValue, setMyValue] = useState(0)

  const fetchJobInfo = async () => {
    const response = await fetch(url)
    const myData = await response.json()
    setMyJob(myData)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobInfo()
  }, [])

  if (loading) {
    return (
      <div className="section loading">
        <h2>loading....</h2>
      </div>
    )
  }
  const { company, dates, duties, title } = myJob[myValue]

  return (
    <section className="section">
      <div className="title">
        <h2>ups man expirience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {}
        <div className="btn-container">
          {myJob.map((info, index) => {
            return (
              <button
                key={index}
                onClick={() => setMyValue(index)}
                className={`job-btn ${index === myValue && 'active-btn'} `}
              >
                {info.company}
              </button>
            )
          })}
        </div>
        {}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="jobe-date">{dates}</p>

          {duties.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight />
                {item}
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
