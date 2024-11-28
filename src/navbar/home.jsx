import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay'>
                <div className="content">
                    <h5 className=" d-flex align-items-center gap-3 mx-auto text-white fs-6 fw-light my-5 text-lowercase " >Announcing our next line of funding.
                        <Link className="underline">
                            <b className='text-white fw-bold d-flex gap-2 align-items-center'>Read More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </b>
                        </Link>
                    </h5>
                    <h1 className='w-75' id="hero-text">Data to Enrich Your Online Business</h1>
                    <p className="mt-3 w-50 mx-auto opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, maiores nam dolor dolorem illum sapiente earum velit </p>
                    <div className="button-group d-flex gap-2 align-items-center justify-content-center">
                        <Link className="btn btn-primary mt-4">Get Started</Link>
                        
                        <Link className='btn  mt-4 d-flex gap-2 align-items-center underline'>
                            <b className='text-white'>Learn More</b>
                            <FontAwesomeIcon  className="text-white "  icon={faArrowRight} />                
                        </Link>
                       
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Home;
