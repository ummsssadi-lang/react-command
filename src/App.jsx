import Title from './components/Title.jsx'
import Subtitle from './components/Subtitle.jsx'
import Paragraph from './components/Paragraph.jsx'
import HighlightBox from './components/HighlightBox.jsx'
import StudentCard from './components/StudentCard.jsx'
import Counter from './components/Counter.jsx'
import CourseInfo from './components/CourseInfo.jsx'
import LivePreview from './components/LivePreview.jsx'
import StudentsApp from './components/StudentsApp.jsx'

const students = [
  { id: 1, name: 'Aida', group: 'SE-101', favoriteSubject: 'Web Programming' },
  { id: 2, name: 'Nurlan', group: 'SE-102', favoriteSubject: 'Databases' },
  { id: 3, name: 'Dastan', group: 'SE-103', favoriteSubject: 'Algorithms' },
]

export default function App() {
  return (
    <div className="page">
      {/* 5.3 Hello React */}
      <section>
        <h1>Introduction to React</h1>
        <p>
          React is a JavaScript library for building user interfaces from small reusable
          components. You describe how the UI looks for a given state, and React updates the page.
        </p>
      </section>

      {/* 5.4 Component library: "About this Course" */}
      <section>
        <Title>About this Course</Title>
        <Subtitle>Front-end Development with React</Subtitle>
        <Paragraph>We learn components, props, state and how to deploy a React app.</Paragraph>
        <HighlightBox>
          <Paragraph>Tip: one component per file, PascalCase names.</Paragraph>
        </HighlightBox>
      </section>

      {/* 5.4 Props practice + .map() */}
      <section>
        <h2>Students</h2>
        {students.map((s) => (
          <StudentCard
            key={s.id}
            name={s.name}
            group={s.group}
            favoriteSubject={s.favoriteSubject}
          />
        ))}
      </section>

      {/* 5.5 State drills */}
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>Toggle details</h2>
        <CourseInfo />
      </section>
      <section>
        <h2>Controlled input</h2>
        <LivePreview />
      </section>

      {/* 5.6 Mini project */}
      <section>
        <h2>E|C Student List</h2>
        <StudentsApp />
      </section>

      <footer>© {new Date().getFullYear()} Engineering College</footer>
    </div>
  )
}
