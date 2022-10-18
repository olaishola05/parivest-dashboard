import classes from './Layout.module.css';
import TopNav from './TopNav';


function Layout(props) {
  return (
    <div>
      <TopNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout