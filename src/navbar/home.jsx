import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay'>
                <div className="content">
                    <h5 className="text-light fs-5 my-5">Announcing our next line of funding.<b>Read More</b></h5>
                    <h1>Data to Enrich Your Online Business</h1>
                    <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusamus ab atque debitis?</p>
                    <div className="button-group ">
                        <button className="btn btn-primary mt-4">Get Started</button>
                        <button className='btn btn-outline mt-4'> Learn More</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Home;
