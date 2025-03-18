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
    <p>Olá! Me chamo Thiago, sou um desenvolvedor com mais de 7 anos de experiência.</p>
<p>Sou formado em Informática para Internet integrado ao Ensino Médio pela ETEC Jacinto Ferreira de Sá (2015-2017), tendo feito em seguida o Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas pela FATEC - Faculdade de Tecnologia de Ourinhos (2018-2020).</p>
<p>Possuo experiência com desenvolvimento web (front-end & back-end), já tendo trabalhado com tecnologias como JavaScript (Node.js, React.js), PHP, MongoDB e PostgreSQL.</p>
<p>Hoje atuo remotamente como Head de Desenvolvimento Back-end na Anota AI, utilizando tecnologias como Node.js e MongoDB, além de gerenciar times e projetos.</p>
    </div> 
    <div className={styles.aboutMeSchoolContainer}>
      <p><img src='/fatec.png' className={styles.fatec}/>Análise e Desenvolvimento de Sistemas, FATEC Ourinhos (2018-2020).</p>
      <p><img src='/etec.png' className={styles.etec}/>Técnico em Informática para Internet Integrado ao Ensino Médio- ETEC JACINTO FERREIRA DE SÁ. (2015-2017).</p>
    </div> 
    </>)}
  </>
  );
}