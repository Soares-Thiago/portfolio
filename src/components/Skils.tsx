import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/Skils.module.css' 

export function Skils(){
  const {hasSkilsPage} = useContext(IndexContext)
  console.log(hasSkilsPage)
  return(
    <>
     { hasSkilsPage && (
     <>
     <div className={styles.skilsHeader}>
    <h2>MINHAS HABILIDADES</h2>
    </div>
    <div className={styles.skilsContainer}>
      <p>TECNOLOGIAS</p>
      <ul>
        <li>
          PHP
        </li>
        <li>
          JAVASCRIPT (NODEJS / REACTJS)
        </li>  
        <li>
          TYPESCRIPT
        </li>   
        <li>
          HTML5 / CSS 
        </li>

        <li>
          C ++
        </li>
        <li>
          JAVA
        </li>  
        <li>
          ANDROID
        </li>   
      </ul>
    </div> 
    <div className={styles.skilsContainerTwo}>
    <div className={styles.skilsContainer}>
      <p>BANCO DE DADOS</p>
      <ul>
        <li>
        MYSQL / MARIADB
        </li>
        <li>
        POSTGRE SQL
        </li>  
        <li>
        MONGODB
        </li>   
      </ul>
    </div> 
    <div className={styles.skilsContainer}>
      <p>OUTROS</p>
      <ul>
        <li>
          GIT
        </li>
        <li>
          DOCKER
        </li>  
      </ul>
      <p>FRAMEWORKS</p>
      <ul>
        <li>
          LARAVEL
        </li>
        <li>
          BOOTSTRAP
        </li>  
        <li>
          JQUERY
        </li>
      </ul>
    </div> 
    </div>
    
    </>)}
  </>
  );
}