


import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      <div className="container py-5 text-center">
        {/* Header Section */}
        <h5 className="text-primary">Deploy Faster</h5>
        <h1 className="text-dark">Everything you need </h1>
        <h1 className="text-dark">to deploy your app </h1>
        <p className="text-dark fw-light py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam cum sint pariatur laborum aperiam..
        </p>

        {/* Features Grid */}
        <div className="row mt-5">
          {/* Feature 1 */}
          <div className="col-md-6 d-flex align-items-center mb-5 ">
            <i className="fa-solid fa-cloud-arrow-up text-primary mb-4"></i>
            <div>
              <p className="fw-bold text-dark  ">
                Push to Deploy</p>
              <p className="fw-light text-dark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis temporibus sunt itaque ea quasi?
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-6 d-flex align-items-start mb-4">
            <i className="fa-solid fa-lock text-primary mb-4 "></i>
            <div>
              <p className="fw-bold text-dark">SSL Certificates</p>
              <p className="fw-light text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores sunt, quod vel atque ex?
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-6 d-flex align-items-start mb-4">
            <i className="fa-solid fa-rotate text-primary me-4 "></i>
            <div>
              <p className="fw-bold text-dark">Simples Queues</p>
              <p className="fw-light text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur voluptatibus pariatur ipsa. Tempora, id.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-6 d-flex align-items-start mb-4">
            <i className="fa-solid fa-fingerprint text-primary me-4 "></i>
            <div>
              <p className="fw-bold text-dark">Advanced Security</p>
              <p className="fw-light text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam repellat quibusdam culpa esse quisquam, nam pariatur maxime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

