
export const Skills = () => {
  return (
    <div className="main-container d-flex justify-content-center align-items-center">
      <div className="main-card">
        <div className="main-title d-flex justify-content-center align-items-center">
          <h2>Habilidades</h2>
        </div>
        <div className="experiences-list">
          <div className="experience">
            <h3>Linguagens de programação, banco de dados e estilos</h3>
            <ul>
              <li>
                <span>Javascript (Node.js, React e Angular)</span>
              </li>
              <li>
                <span>MySQL e MongoDB</span>
              </li>
              <li>
                <span>HTML, CSS e Bootstrap</span>
              </li>
              <li>
                <span>PHP (Laravel)</span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="experience">
            <h3>Metodologias ágeis</h3>
            <ul>
              <li>
                <span>Scrum</span>
              </li>
              <li>
                <span>Kanban</span>
              </li>
              <li>
                <span>Lean</span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="experience">
            <h3>Idiomas</h3>
            <ul>
              <li>
                <span>Inglês (avançado)</span>
              </li>
              <li>
                <span>Espanhol (intermediário)</span>
              </li>
              <li>
                <span>Libras (básico)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
