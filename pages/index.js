import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my home page</h1>

        <div className={styles.grid}>
          <div className={styles.grid_container} style={{display:"grid"}}>
              <div className={styles.grid_item}>
                <h2>What does C.R.U.D. stand for?</h2>
              </div>
            <div className={styles.grid_item}>
                <ul>
                  <li>Create</li>
                  <li>Read</li>
                  <li>Update</li>
                  <li>Delete</li>
                </ul>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <Link href="/about">About page</Link>
        </div>
        <div className={styles.grid}>
          <Link href="/grades">Grades page</Link>
        </div>

        <button>View all this info</button>
      </main>
      
      <footer>In Class Example #1</footer>
    </div>
    
  )
}
