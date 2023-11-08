import styles from './serviceCircle.module.css'

export default function ServiceCircle({ data }) {
  return (
    <div className={`group ${styles.group}`}>
      <div className={`${styles.groupHover}`}>
        <div className={styles.groupContent}>
          <h2>{data.title}</h2>
          <p>{data.sub}</p>
          <p>{data.details}</p>
        </div>
      </div>
    </div>
  )
}
