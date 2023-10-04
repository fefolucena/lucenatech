export const Author = () => {
  return (
    <div className="main-container d-flex justify-content-center align-items-center">
      <div className="main-card">
        <div className="author-info-box">
          <div className="author-info">
            <div className="author-image-box d-flex justify-content-center align-items-center">
              <div className="author-image ">
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src="../../../assets/images/profile.jpg"
                  alt="Foto de perfil Cesar de Lucena"
                />
              </div>
            </div>
            <div className="author-np">
              <h1>Cesar de Lucena</h1>
              <span>Desenvolvedor fullstack e Product owner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
