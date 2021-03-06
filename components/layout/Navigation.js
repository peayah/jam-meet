import classes from './Navigation.module.css';
import Link from "next/link";

function Navigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Local JAM Meets</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meets</Link>
          </li>
          <li>
            <Link href='/new-meet'>Add Meet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
