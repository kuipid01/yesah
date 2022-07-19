import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header/Header'
import Mainbdy from './components/MAinbody/Mainbdy'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Test App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

    <Navbar/>
    <Header/>
    <Mainbdy/>
    </div>
  )
}