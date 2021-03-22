import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/Footer.module.css' 

export function Footer(){
  return( 
    <div className={styles.Footer}><p>Projeto desenvolvido em NextJS por Thiago Pontes Soares</p></div>
  );
}