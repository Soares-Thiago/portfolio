import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/NavBar.module.css' 

export function NavBar(){

  const { handleNavBav, 
          hasNavBar, 
          handleAboutPage, 
          handlePortfolioPage, 
          handleExperiencePage,
          handleSkilsPage,
          handleContactPage
        } = useContext(IndexContext)
  return(
    <>
    {hasNavBar && (<div className={styles.navBarContainer}>
      <img src="/me.jpg" alt="thiago soares" />
      <p> THIAGO PONTES </p>
      <p className={styles.lastName}> SOARES </p>

      <div className={styles.navBarItens}>
        <button onClick={handleAboutPage}>SOBRE MIM</button>
        <button onClick={handlePortfolioPage}>PORTIFOLIO</button>
        <button onClick={handleSkilsPage}>HABILIDADES</button>
        <button onClick={handleExperiencePage}>EXPERIENCIA</button>
        <button onClick={handleContactPage}>CONTATOS</button>
      </div>  
      
    </div> )}
    <button className={styles.navBarButton} onClick={handleNavBav} >
      <img src="/list.png" alt="fechar modal"/>
    </button>
    </>
  );
}