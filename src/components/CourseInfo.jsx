import { useState } from 'react'

export default function CourseInfo() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      <h3>Web Programming 1: Front-end Development with React</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && (
        <p>In this course we learn HTML, CSS, JavaScript and build interfaces with React.</p>
      )}
    </div>
  )
}
