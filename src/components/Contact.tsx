import { useContext } from 'react';
import { IndexContext } from '../contexts/IndexContext';
import styles from '../styles/components/Contact.module.css' 

export function Contact(){
  const {hasContactPage} = useContext(IndexContext)
  return(
    <>
     { hasContactPage && (
     <>
     <div className={styles.contactHeader}>
    <h2>CONTATOS</h2>
    </div>
    <div className={styles.contactContainer}>
      <div>
        <img src='/contacts/linkedin.png' />
        <a href="https://www.linkedin.com/in/thiago-pontes-soares-a59646179/" target='?Blank'>ACESSAR</a>
      </div>
      <div>
        <img src='/contacts/github.png' />
        <a href="https://github.com/Soares-Thiago" target='?Blank'>ACESSAR</a>
      </div>
      <div>
        <img src='/contacts/email.png' />
        <a href="mailto:thiagodevps@gmail.com">thiagodevps@gmail.com</a>
      </div>
      <div>
        <img src='/contacts/smartphone.jpg' />
        <a href="tel:+55014998106073" target='?Blank'>+55 (014) 99810-6073</a>
      </div>
    </div> 
    
    </>)}
  </>
  );
}