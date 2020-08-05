import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
        <img src="https://avatars1.githubusercontent.com/u/44358797?s=460&u=92c21a0ebaaa422df3ca83ba2bab8ea838a7cf7e&v=4" alt="João Paulo"/>
        <div>
            <strong>Joao</strong>
            <span>Programacao</span>
        </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
        </footer>
    </article>
  );
}

export default TeacherItem;