import styles from './Dashboard.module.css'

function Dataview({ data, children }) {
  return (
    <div className={styles.dataview}>
      {children}
    </div>
  )
}


export default Dataview