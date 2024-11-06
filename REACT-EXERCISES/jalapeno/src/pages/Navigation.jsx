import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            </li>
          <li>
            <Link to="/coding">Coding</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
