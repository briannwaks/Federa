
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="footer  text-white p-5">

      <div className='row align-items-center'>
        {/* solutions */}
        <ul className='col d-flex flex-column gap-3'>
          <li className='text-white'><b>Solutions</b></li>
          <li>
            <Link>Marketing</Link>
          </li>
          <li>
            <Link>Analytics</Link>
          </li>
          <li>
            <Link>Automation</Link>
          </li>
          <li>
            <Link>Commerce</Link>
          </li>
          <li>
            <Link>Marketing</Link>
          </li>
        </ul>

        {/* support */}
        <ul className='col d-flex flex-column gap-3'>
          <li className='text-white'><b>Support</b></li>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Submit Ticket</Link>
          </li>
          <li>
            <Link>Documentation</Link>
          </li>
          <li>
            <Link>Guides</Link>
          </li>
        </ul>

        {/* company */}
        <ul className='col d-flex flex-column gap-3'>
          <li className='text-white'><b>Company</b></li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Press</Link>
          </li>
        </ul>


        {/* Legal */}

        <ul className='col d-flex flex-column gap-3'>
          <li className='text-white'><b>Legal</b></li>
          <li>
            <Link>Terms of Service</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>License</Link>
          </li>
          <li>
            <Link>Press</Link>
          </li>
        </ul>



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

          <div className=" col-md  text-end d-flex align-items-center justify-content-end gap-5">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </Link>

            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Link>

            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Link>

          </div>
        </div>

      </div>
    </footer >

  );
};

export default Footer;
