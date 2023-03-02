import { Outlet, Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import classes from './MainNavigation.module.css';
import { AuthAction } from "../store/context";
const Layout = () => {
  const dispatch=useDispatch();
  const LogoutHandler=()=>{
    dispatch(AuthAction.logout())
  }
  return (
    
    <>
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Login</Link>
          </li>
          <li>
            <Link to="/about">Compose</Link>
          </li>
          <li>
            <Link to='/inbox'>inbox</Link>
          </li>
          <li>
          <button onClick={LogoutHandler}>Logout</button>
        </li>
        </ul>
        
      </nav>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;
