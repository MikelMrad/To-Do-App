import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <button className={styles.buttons}>
          Add Task +
        </button>
        <h1>Hey, What's on your mind today ?</h1>
        <button className={styles.buttons}>
          Log In
        </button>
      </div>
      <div className={styles.todoContainer}>
        
      </div>
    </div>
  )
}
