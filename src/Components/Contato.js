import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.png';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Router | Contato" description="Entre em contato" />
      <img src={foto} alt="contato" />
      <div>
        <h1>Entre em contato conosco</h1>
        <ul className={styles.dados}>
          <li>sergio.ltnj@gmail.com</li>
          <li>(11)99999-9999</li>
          <li>Av. Paulista, 666 - SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
