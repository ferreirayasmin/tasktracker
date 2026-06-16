import './About.css';

function About() {
  return (
    <div className="about-page fade-in">
      <div className="about-card">
        <h2>Sobre o Sistema</h2>
        <div className="about-content">
          <p>
            O <strong>Agile TaskTracker</strong> é um sistema para gestão de tarefas ágeis de equipes de desenvolvimento.
          </p>
          <p>
            Na Sprint 3, o front-end React consome uma API RESTful do back-end para operações de CRUD completas.
          </p>
          <ul className="tech-list">
            <li>React.js + Vite</li>
            <li>React Router Dom</li>
            <li>Fetch API para consumo REST</li>
            <li>Arquitetura em camadas (services, hooks, components, pages)</li>
            <li>Vanilla CSS para estilização</li>
          </ul>
          <div className="developer-info">
            <h3>Integrante</h3>
            <p>Yasmin Ferreira</p>
            <p className="version">Versão Sprint 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
