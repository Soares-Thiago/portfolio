import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { useContext, useState } from 'react'
import { AboutMe } from '../components/AboutMe'
import { IndexProvider } from '../contexts/IndexContext'
import { Portfolio } from '../components/Portfolio'
import { Experience } from '../components/Experience'
import { Skils } from '../components/Skils'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
export default function Home() { 
  
  return (
        <div className={styles.container}> 
        <IndexProvider>
            <div className={styles.navbar}>
              <NavBar/>
            </div>
            <div className={styles.content}>
              <AboutMe/>
              <Portfolio/>
              <Experience/>
              <Skils/>
              <Contact/>
              <Footer/>
            </div>
        </IndexProvider>
        
        </div>
  )
}
