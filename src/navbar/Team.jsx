

import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <div className="container text-center py-5">
        <h1>Meet Our Team</h1>
        <p>We are a dynamic group of individuals who are passionate about what we do,<p/>
        <p/>and dedicated to delivering the best value for our clients.</p>

        <div className="row mt-5">
          
          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team1.png"
                alt="Team Member 1"
                className="team-image"
              />
              <p className="team-name">Leonard Krasner</p>
              <p className="team-role">Senior Designer</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Repeat for Other Team Members */}
          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team2.jpg"
                alt="Team Member 2"
                className="team-image"
              />
              <p className="team-name">Floyd Miles</p>
              <p className="team-role">Principal Designer</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team3.jpg"
                alt="Team Member 2"
                className="team-image"
              />
              <p className="team-name">Emert Selmon</p>
              <p className="team-role">Vp,user experience</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <div className="row mt-5">
          
          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team4.jpg"
                alt="Team Member 1"
                className="team-image"
              />
              <p className="team-name">Chriss Watson</p>
              <p className="team-role">Vp,Human Resorces</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team5.jpg"
                alt="Team Member 2"
                className="team-image"
              />
              <p className="team-name">Emman Dosley</p>
              <p className="team-role">Senior Developer</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="team-card">
              <img
                src="/team6.jpg"
                alt="Team Member 2"
                className="team-image"
              />
              <p className="team-name">Alicia Bell</p>
              <p className="team-role">Junior Copywrighter</p>
              <div className="team-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Team;
