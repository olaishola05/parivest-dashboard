import SidePanel from "./SidePanel"
import Dataview from "./Dataview"
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    <div className={styles.container}>
      <SidePanel />
      <Dataview />
    </div>
  )
}

export default Dashboard