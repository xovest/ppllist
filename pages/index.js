import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>yo</h1>
      <p>This is something that should be a paragraph so im just adding words just for the record</p>
      <p>This is another something that should be a paragraph so im just adding words just for the record</p>
      <Link href="/people">
        <a>See Ppl Listing</a>
      </Link>
    </div>
  )
}
