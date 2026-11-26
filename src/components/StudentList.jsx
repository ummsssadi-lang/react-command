export default function StudentList({ students }) {
  return (
    <ul className="student-list">
      {students.map((s) => (
        <li key={s.id} className={s.isActive ? 'active' : ''}>
          {s.name} — {s.track} {s.isActive ? '(active)' : '(inactive)'}
        </li>
      ))}
    </ul>
  )
}
