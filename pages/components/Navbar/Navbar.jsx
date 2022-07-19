import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <div className={styles.navcontainer}>
        <div className={styles.container}>
            <div> <Image src="/assets/logo.png" alt="log" layout="fill" /> </div>
        </div>
    </div>
    </>
  )
}

export default Navbar