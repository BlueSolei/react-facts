import logo from "../assets/react.svg"

export default function Nav() {
  return (
      <nav className="nav">
          <img className="react-logo" src={logo} alt="react logo" />
          <h2 className="page-name">ReactFacts</h2>
          <h2 className="react-course">React Course - Project 1</h2>
      </nav>
  )
}