import classes from './Navigation.module.css';
import Link from "next/link";

function Navigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>JAM Meets</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All JAM Meets</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
