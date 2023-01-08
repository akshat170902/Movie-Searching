import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>
          Nothing to show here ERROR
        </h1>
        <Link to="/" className='btn'>
          Return Back HomeScreen
        </Link>
      </div>
    </section>
  )
}

export default Error
