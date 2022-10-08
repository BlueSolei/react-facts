import logo from "../assets/react.svg"

export default function Nav() {
  return (
      <nav className="nav">
          <img className="react-logo" src={logo} alt="react logo" />
          <h3 className="page-name">ReactFacts</h3>
          <h4 className="react-course">React Course - Project 1</h4>
      </nav>
  )
}