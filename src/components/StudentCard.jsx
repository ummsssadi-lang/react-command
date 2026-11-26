export default function StudentCard({ name, group, favoriteSubject }) {
  return (
    <article className="student-card">
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <p>Favorite subject: {favoriteSubject}</p>
    </article>
  )
}
