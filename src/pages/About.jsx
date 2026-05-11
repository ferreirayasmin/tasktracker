import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page fade-in">
      <div className="about-card">
        <h2>Sobre o Sistema</h2>
        <div className="about-content">
          <p>
            O <strong>Agile TaskTracker</strong> é um sistema desenvolvido para a gestão de projetos e tarefas ágeis de uma equipe.
          </p>
          <p>
            Este projeto universitário de Front-end Web foi criado utilizando tecnologias modernas:
          </p>
          <ul className="tech-list">
            <li>React.js (Vite)</li>
            <li>React Router Dom v6</li>
            <li>Vanilla CSS para estilização</li>
            <li>LocalStorage API para persistência de dados</li>
          </ul>
          <div className="developer-info">
            <h3>Desenvolvido por</h3>
            <p>Yasmin Ferreira</p>
            <p className="version">Versão 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
