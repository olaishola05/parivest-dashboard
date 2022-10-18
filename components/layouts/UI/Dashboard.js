import SidePanel from "./SidePanel"
import Dataview from "./Dataview"
import styles from './Dashboard.module.css'
import axios from 'axios'

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