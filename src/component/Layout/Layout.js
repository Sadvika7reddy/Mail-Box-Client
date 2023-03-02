import { Outlet, Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
const Layout = () => {
  return (
    <>
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/inbox'>inbox</Link>
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;
