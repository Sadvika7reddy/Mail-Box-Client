import { Link } from "react-router-dom";
import { Fragment } from "react";
import classes from './MainNavigation.module.css';
const MainNavigation=()=>{
    return(
        <Fragment>
             <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <Link to='/signup'>Login</Link>
             </li>
             <li>
              <Link to='/about'>About</Link>
             </li>
                 
          </ul>
        </nav>
      </header>
        </Fragment>

    )
}
export default MainNavigation;