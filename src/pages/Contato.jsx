import { useState } from 'react'
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'
import styles from '../styles/pages/contato.module.css'

export function Contato() {
  return (
    <>
      <Header title="Chama no contatinho" image={contatoImg} />
      <div>
        <form className={styles.form} >
          <input
            className={styles.formInput}
            placeholder="Digite seu nome"
          />
          <input
            className={styles.formInput}
            placeholder="Digite seu email"
          />
          <textarea
            className={styles.formTextArea}
            placeholder="Digite sua mensagem"
          />
          <button type="submit" className={styles.formButton}>Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}