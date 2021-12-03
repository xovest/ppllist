import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>yo</h1>
      <p className={styles.text}>This is something that should be a paragraph so im just adding words just for the record</p>
      <p className={styles.text}>This is another something that should be a paragraph so im just adding words just for the record</p>
      <Link href="/people">
        <a className={styles.btn}>See Ppl Listing</a>
      </Link>
    </div>
  )
}
