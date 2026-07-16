import styles from './StatBlock.module.css'

export default function StatBlock({ value, label }) {
  return (
    <div className={styles.stat}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
