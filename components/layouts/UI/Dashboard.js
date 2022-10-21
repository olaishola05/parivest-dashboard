import SidePanel from "./SidePanel"
import Dataview from "./Dataview"
import styles from './Dashboard.module.css'

function Dashboard({ newData, children }) {
  return (
    <div className={styles.container}>
      <SidePanel />
      <Dataview>
        {children}
      </Dataview>
    </div>
  )
}

export default Dashboard