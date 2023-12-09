import Image from 'next/image'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Card from './components/imagesComponent/Card'
import Faq from './components/faq/faq'

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Card/>
    <Faq/>
    <Footer />

    </>
  )
}
