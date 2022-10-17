import styles from './Dashboard.module.css'

function Dataview(props){
  return (
    <div className={styles.dataview}>
      <div className={styles.datatop}>
        <div className={styles.customselect}>
          <select name="dataview" id="dataview">
            <option className={styles.options} value="all">All</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="review">In-review</option>
          </select>
        </div>

        <div className={styles.search}>
          <div className={styles.date}>
            <label htmlFor="date">From </label>
            <input type="date" name="from" id="from" />
            <label htmlFor="date">To </label>
            <input type="date" name="to" id="to" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default Dataview