import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>yo</h1>
      <p>This is something that should be a paragraph so im just adding words just for the record</p>
      <p>This is another something that should be a paragraph so im just adding words just for the record</p>
      <Footer />
    </div>
  )
}
