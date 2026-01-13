import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </nav>

      <main>
        <div key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Alyssa E Hopper</p>
      </footer>
    </>
  );
}
