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
        <img src='/portfolio/anota.png'/>
      </div>
      <div className={styles.experienceContainerText}>
      <p>Head de desenvolvimento Back-end - Abril/2023 - Até o momento</p>
        <p>
        Atuo liderando o time de back-ends do Anota AI, que vai desde o cardápio digital, gestor do restaurante, módulos promocionais, sistema de pedidos.
        </p>
        <hr />
        <p>Tech Lead  Outubro de 2022 - Novembro de 2023</p>
        <p>
        • Gestão de demandas cross, desenvolvimento de projetos que ajudam os restaurantes e seus clientes a terem uma melhor relação. <br />
        • Trabalhei organizando e com a mão na massa em projetos como o desenvolvimento do back-end da plataforma do gestor do restaurante.<br />
        • Lidero um time de desenvolvedores back-end, priorizando demandas, desenhando arquitetura dos sistemas, revisando código, e atuando na definição das demandas com outras áreas da empresa.<br />
        </p>
        <hr />

        <p>Back-end Developer - Março de 2021 - Setembro de 2022</p>
        <p>
        • Desenvolvi soluções escaláveis ​para sistemas de restaurantes, incluindo a plataforma Orders, orientada a eventos, usando SQS/SNS, Rabbit MQ, Kafka, Node JS e Reddis.<br />
        • Gateways de pagamento integrados para cardápio digital com monitoramento em tempo real e alertas para desempenho ideal.• Contribui para criar uma plataforma de catálogo de restaurante personalizável e escalável.<br />
        • Contribui no desenvolvimento de diversas features integradas com o cardápio digital, como promoções (cupons, cashback, programa fidelidade)<br />
        </p>
      </div>
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