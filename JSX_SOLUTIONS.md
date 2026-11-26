# JSX Exercises – Solutions

## Part A – Rewrite without JSX (`React.createElement`)

```jsx
// A1
const element = React.createElement("h1", null, "Hello, React!");

// A2
const element = React.createElement(
  "div",
  { className: "card" },
  React.createElement("h2", null, "Profile"),
  React.createElement("p", null, "Welcome to your profile page.")
);

// A3
const element = React.createElement("p", null, name, " is ", age, " years old.");

// A4
function Greeting({ name }) {
  return React.createElement(
    "div",
    { className: "greeting" },
    React.createElement("h1", null, "Hello, ", name, "!")
  );
}

// A5
function TopicList() {
  return React.createElement(
    "ul",
    null,
    items.map((topic, index) => React.createElement("li", { key: index }, topic))
  );
}

// A6
function Button({ label }) {
  return React.createElement("button", { className: "btn" }, label);
}
function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement("h1", null, "My App"),
    React.createElement(Button, { label: "Click me" })
  );
}

// A7
const element = React.createElement(
  "div",
  { style: { padding: "10px", borderRadius: "8px" } },
  "Inline styled box"
);

// A8
function Info() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h2", null, "Title"),
    React.createElement("p", null, "Description text here.")
  );
}
```

## Part B – Fix the JSX errors

```jsx
// B1: class -> className, onclick="..." -> onClick={function}
function Header() {
  return (
    <div className="header">
      <h1 onClick={() => alert("Hello")}>Welcome</h1>
    </div>
  );
}

// B2: one root element (fragment)
function BadComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Subtitle</p>
    </>
  );
}

// B3: <img> must be self-closed (alt added for accessibility)
function ImageCard() {
  return (
    <div className="card">
      <img src="/logo.png" alt="Logo of our app" />
      <p>Logo of our app</p>
    </div>
  );
}

// B4: statements (if) are not allowed inside {}, use a ternary
function Status({ isOnline }) {
  return <div>{isOnline ? <p>User is online</p> : <p>User is offline</p>}</div>;
}

// B5: components must start with a capital letter; <usercard> is not a real DOM tag
function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}
// usage: <UserCard name="Aida" />

// B6: for -> htmlFor, class -> className
function LoginForm() {
  return (
    <form>
      <label htmlFor="email" className="label">Email</label>
      <input id="email" type="email" />
    </form>
  );
}

// B7: key on list items
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// B8: style is an object with camelCase properties
function Box() {
  return <div style={{ backgroundColor: "red", padding: "10px" }}>Warning</div>;
}

// B9: pass the function itself, not a string
function Counter() {
  return <button onClick={handleClick}>Click me</button>;
}

// B10: dangerouslySetInnerHTML needs an object { __html: ... }
function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
// Only use it with trusted/sanitized HTML (XSS risk).
```

## Part C – JSX Practice

```jsx
// 1
const titleElement = <h1>Welcome to Engineering College</h1>;

// 2
const greeting = <p>Hello, {firstName} {lastName}!</p>;

// 3 (same fix as B1)
function Header() {
  return (
    <div className="header">
      <h1 onClick={() => alert("Hi")}>Click me</h1>
    </div>
  );
}

// 4
function Greeting() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to the course</p>
    </>
  );
}

// 5
function Avatar() {
  return (
    <div>
      <img src="/avatar.png" alt="Avatar" />
      <br />
      <span>Student</span>
    </div>
  );
}

// 6 (same as A2)
const element = React.createElement(
  "div",
  { className: "card" },
  React.createElement("h2", null, "Profile"),
  React.createElement("p", null, "Welcome to your profile page.")
);

// 7
function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Group: {props.group}</p>
    </div>
  );
}

// 8
function CourseInfo({ title, credits }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Credits: {credits}</p>
    </div>
  );
}

// 9
function Status({ isOnline }) {
  return isOnline ? <p>Online</p> : <p>Offline</p>;
}

// 10
function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  );
}

// 11
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

// 12
const students = ["Ali", "Aida", "Nurlan"];
function StudentList() {
  return React.createElement(
    "ul",
    null,
    students.map((name, index) => React.createElement("li", { key: index }, name))
  );
}

// 13
function Clicker() {
  function handleClick() {
    console.log("Clicked!");
  }
  return <button onClick={handleClick}>Click me</button>;
}

// 14 (arrow function so it is NOT called during render)
<button onClick={() => handleSelect(5)}>Select student</button>

// 15
function WarningBox() {
  return <div style={{ backgroundColor: "yellow", padding: "10px" }}>Warning!</div>;
}

// 16
function Info() {
  return (
    <>
      <h2>About the course</h2>
      <p>This course teaches React basics.</p>
    </>
  );
}

// 17
<Card title="JSX Topic">
  <p>We are learning JSX today.</p>
</Card>

// 18
<UserProfile {...user} />                                  // spread
<UserProfile name="Aida" age={19} group="FE-01" />         // explicit, same result

// 19
function Access({ isAdmin }) {
  return <div>{isAdmin ? <p>Welcome, admin!</p> : <p>Access denied</p>}</div>;
}

// 20
function NameInput() {
  const [name, setName] = React.useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </div>
  );
}

// 21 (same as B10)
function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// 22
function ProfileCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

// 23
function Title() {
  return (
    <div>
      {/* Main title of the page */}
      <h1>JSX Practice</h1>
    </div>
  );
}

// 24 (the PDF line is cut off after "You have {", so the paragraph text is reconstructed)
function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      {notifications.length > 0 && (
        <p>You have {notifications.length} new notifications</p>
      )}
    </div>
  );
}
```

**25.** The three `<p>` elements show:
1. `5` (2 + 3)
2. `b is bigger or equal` (2 > 3 is false)
3. nothing: `false && "This text"` evaluates to `false`, and React does not render `false`, so the `<p>` is empty.
