import { useState } from 'react'
import StudentList from './StudentList.jsx'
import StudentFilter from './StudentFilter.jsx'

const allStudents = [
  { id: 1, name: 'Aida', track: 'Front-end', isActive: true },
  { id: 2, name: 'Nurlan', track: 'Back-end', isActive: false },
  { id: 3, name: 'Dastan', track: 'Design', isActive: true },
  { id: 4, name: 'Meerim', track: 'Front-end', isActive: true },
  { id: 5, name: 'Altynai', track: 'Mobile', isActive: false },
]

export default function StudentsApp() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'active' ? allStudents.filter((s) => s.isActive) : allStudents

  return (
    <div>
      <StudentFilter filter={filter} onChange={setFilter} />
      <StudentList students={visible} />
    </div>
  )
}
