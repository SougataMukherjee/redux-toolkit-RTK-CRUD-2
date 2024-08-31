import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className=" list-unstyled d-flex gap-4  px-5">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link active text-uppercase text-info text-decoration-underline"
            >
              Read
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create"
              className="nav-link text-uppercase text-success text-decoration-underline"
            >
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
