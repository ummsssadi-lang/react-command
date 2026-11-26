export default function StudentFilter({ filter, onChange }) {
  return (
    <div>
      <button className={filter === 'all' ? 'active-filter' : ''} onClick={() => onChange('all')}>
        All
      </button>
      <button className={filter === 'active' ? 'active-filter' : ''} onClick={() => onChange('active')}>
        Active only
      </button>
    </div>
  )
}
