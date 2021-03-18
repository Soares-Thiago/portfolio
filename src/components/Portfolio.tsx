import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/Portfolio.module.css' 

export function Portfolio(){
  const {hasPortfolioPage} = useContext(IndexContext)
  return(
    <>
     { hasPortfolioPage && (
     <>
     <div className={styles.portfolioHeader}>
    <h2>MEU PORTFOLIO</h2>
    </div>
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContainerPhoto}>
        <img src='/portfolio/rota.png'/>
        <a href="https://rotaourinhos.com.br/" target='?Blank'>VISITAR</a>
      </div>
      <div className={styles.portfolioContainerText}>
      <p>Rota Ourinhos</p>
        <hr />
        <p>Participação - 2020:</p>
        <p>
        Participei no desenvolvimento deste MarketPlace WEB focado para a região de Ourinhos-SP;
        Com ele, as empresas da região podem se cadastrar, cadastrar seus produtos, definir valores de entrega e controlar estoques e pedidos;
        Os clientes podem visualizar as grades de produtos e recebê-los tanto por delivery quanto por retirada no local da compra;
        Possui integração com o portal de pagamentos do PagSeguro.
        </p>
      </div>
      
    </div> 
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContainerPhoto}>
        <img src='/portfolio/qw.png'/>
        <a href="https://innovation.quimiweb.com/" target='?Blank'>VISITAR</a>
      </div>
      <div className={styles.portfolioContainerText}>
      <p>QUIMIWEB</p>
        <hr />
        <p>11/2020 - Atualmente:</p>
        <p>
        Atuo como Desenvolvedor Web Pleno na empresa Quimiweb, fazendo uso tecnologias como NodeJS e ReactJS;
        Elaboro plataformas em prol da criação de um ecossistema da indústria química baseado na criação e manutenção de API´s REST com NodeJS desenvolvendo front-end com ReactJS;
        Participo do processo de definição dos projetos desde a sua concepção, e desenvolvo uma plataforma de Open Innovation interligada a uma Social Network;
        Tecnologias utilizadas: NodeJS, ReactJS, MongoDB e Docker.
        </p>
      </div>
      
    </div> 
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContainerPhoto}>
        <img src='/portfolio/mcerp.png'/>
      </div>
      <div className={styles.portfolioContainerText}>
      <p>McErp</p>
        <hr />
        <p>2018 - 11/2020:</p>
        <p>
        Participei do desenvolvimento do Morcode ERP, um sistema ERP WEB desenvolvido utilizando tecnologias como PHP, JQuery, Bootstrap, SGBD MariaDB, entre outras;
        No projeto, desenvolvi diversas funcionalidades, entre elas, se encontram o gerenciamento de contratos, gerenciamento de usuários e grupos de acesso, gerenciamento de tabelas base (CRUDS) , controle de despesas, processo de romaneio, tabelas de precificação e agrupamento de produtos.
        </p>
      </div>
    </div> 
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContainerPhoto}>
        <img src='/portfolio/sfgd.png'/>
        <a href="https://psthiago.azurewebsites.net/sfgd/index/index.php" target='?Blank'>VISITAR</a>
      </div>
      <div className={styles.portfolioContainerText}>
      <p>SFGD</p>
        <hr />
        <p>Desenvolvido - 2020:</p>
        <p>
        Sistema de Formação de Grupos de Desenvolvedores;
        Trabalho de Graduação desenvolvido para o curso Análise e Desenvolvimento de Sistemas da FATEC OURINHOS-SP;
        É um sistema WEB capaz de criar e gerenciar grupos de desenvolvimento de Sistemas da Informação, visando o rápido e eficiente recrutamento de membros específicos para uma determinada vaga em um projeto.
        </p>
      </div>
    </div> 

    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContainerPhoto}>
        <img src='/portfolio/fatecard.png'/>
      </div>
      <div className={styles.portfolioContainerText}>
      <p>FATECARD</p>
        <hr />
        <p>Desenvolvido - 2019:</p>
        <p>
        Sistema WEB de controle de débitos para a FATEC Ourinhos-SP;
        Os funcionários da instituição podem cadastrar serviços (débitos), pacotes (créditos), setores, realizar movimentações na conta dos alunos e gerar relatórios;
        Os estudantes da faculdade, vinculados ao R.A. (Registro do Aluno fornecido pela Fatec), podem requisitar seus créditos, adquirindo pacotes, além da compra de serviços ministrados pelos setores da instituição;
        O sistema foi desenvolvido para a matéria de Engenharia de Software, com o intuito de facilitar a venda de serviços dentro da faculdade.
        </p>
      </div>
      
    </div> 
    
    </>)}
  </>
  );
}