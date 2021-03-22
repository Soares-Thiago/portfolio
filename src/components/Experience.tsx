import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/Experience.module.css' 

export function Experience(){
  const {hasExperiencePage} = useContext(IndexContext)
  return(
    <>
     { hasExperiencePage && (
     <>
     <div className={styles.experienceHeader}>
    <h2>EXPERIÊNCIA PROFISSIONAL</h2>
    </div>
    <div className={styles.experienceContainer}>
      <div className={styles.experienceContainerPhoto}>
        <img src='/portfolio/qw.png'/>
      </div>
      <div className={styles.experienceContainerText}>
      <p>Web Developer Pleno - 11/2020 - 03/2021</p>
        <hr />
        <p>
        Developer Web Pleno em Quimiweb
        </p>
      </div>
    </div>

    <div className={styles.experienceContainer}>
      <div className={styles.experienceContainerPhoto}>
        <img src='/portfolio/mcerp.png'/>
      </div>
      <div className={styles.experienceContainerText}>
      <p>Desenvolvedor Web - 04/2018 – 11/2020</p>
        <hr />
        <p>
        Atuei na empresa Fox Informática em Ourinhos-SP como Desenvolvedor Web PHP;<br/>
        Análise e desenvolvimento de módulos e soluções para um sistema ERP em ambiente Web;<br/>
        Desenvolvimento de um MarketPlace com integrações de portais de pagamento;<br/>
        Tecnologias utilizadas: Linguagem PHP, Framework Bootstrap, JavaScript / JQuery, SGBD Maria DB.
        </p>
      </div>
    </div>  
    
    </>)}
  </>
  );
}