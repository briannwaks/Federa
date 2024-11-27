
import './Footer.css'; // Optional: Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer  text-white py-5">
      <div className='row align-items-center'>

        <div className='col-md-2 ms-5 '>
          <p><b>Solutions</b></p>
          <li className='opacity-50 list-unstyled '>
            <p>Marketing </p>
            <p>Analytics</p>
            <p>Automation</p>
            <p>Commerce</p>
            <p>Insights</p>
          </li>
        </div>

        <div className='col-md-2 mb-5'>
          <p><b>Support</b></p>
          <li className='opacity-50 list-unstyled '>
            <p>Submit Ticket </p>
            <p>Documentation</p>
            <p>Guides</p>
          </li>
        </div>

        <div className='col-md-2 py-5'>
          <p><b>Company</b></p>
          <li className='opacity-50 list-unstyled '>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
          </li>
        </div>

        <div className='col-md-2 mb-5'>
          <p><b>Legal</b></p>
          <li className='opacity-50 list-unstyled '>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>License</p>
          </li>
        </div>

        <div className='col mb-5'>
          <p><b>Subscribe to our Newsletter</b></p>
          <p className='opacity-50'>The latest news,articles and resources sent to your inbox weekly.</p>
          <div className="email-form mt-1">

            <form className="d-flex justify-justify-content-end ">
              <input
                type="email"
                className="form-control w-50 opacity-75 bg-secondary text-bg-secondary"
                placeholder="Enter your email "
                required
              />
              <button type="submit" className="btn btn-primary ms-2"><b>Subscribe</b></button>
            </form>
          </div>
        </div>

      </div>

      <div className='last'>
        <div className='row '>
          <div className="col-md ms-3 "><img src="/federalogo2.png" style={{ height: '70px', width: 'auto' }} alt="Federa" /></div>
          <div className='col-md  '><p className='text-start'>&copy; 2024 Federa ltd. All rights reserved.</p></div>

          <div className=" col-md footer-right text-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            
          </div>
        </div>
      </div>
    </footer >

  );
};

export default Footer;
