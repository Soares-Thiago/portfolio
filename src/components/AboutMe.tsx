import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/AboutMe.module.css' 

export function AboutMe(){
  const {hasAboutPage} = useContext(IndexContext)
  return(
    <>
     { hasAboutPage && (
     <>
     <div className={styles.aboutMeHeader}>
    <h2>SOBRE MIM</h2>
    </div>
    <div className={styles.aboutMeContainer}>
      <p>Olá, sou Thiago Pontes Soares, sou um desenvolvedor Back-end.</p>
      <p>Possuo experiência com desenvolvimento em geral (front-end & back-end), trabalhando com tecnologias como PHP, HTML, CSS, JavaScript (NodeJS, ReactJS).</p>
      <p>“Sou um profissional muito dedicado e disposto a aprender novas tecnologias a fim de aprimorar minhas habilidade, buscando sempre dar o meu melhor no projeto ou organização na qual estou inserido.”</p>
    </div> 
    <div className={styles.aboutMeSchoolContainer}>
      <p><img src='/fatec.png' className={styles.fatec}/>Análise e Desenvolvimento de Sistemas, FATEC Ourinhos (2018-2020).</p>
      <p><img src='/etec.png' className={styles.etec}/>Técnico em Informática para Internet Integrado ao Ensino Médio- ETEC JACINTO FERREIRA DE SÁ. (2015-2017).</p>
    </div> 
    </>)}
  </>
  );
}