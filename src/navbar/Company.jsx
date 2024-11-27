
import "./Company.css"; 

const Company = () => {
    return (
        <div
            className="company-page "
            style={{
                backgroundColor: "rgba(42, 19, 91, 1)", 
                color: "white",
                padding: "100px 0",
            }}
        >
            <div className="container">
                {/* Section 1:*/}
                <h1 className="text-center mb-4">We Love Creators</h1>
                <p className="text-center mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae est magna.
                </p>

                {/* Section 2:*/}
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    {[...Array(4)].map((_, idx) => (
                        <div className="col" key={idx}>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius incidunt tenetur sequi nam dicta est. Placeat est possimus praesentium labore, temporibus veritatis fuga cum eos unde.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Section 3: */}
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                    {[...Array(4)].map((_, idx) => (
                        <div className="col text-center" key={idx}>
                            <h5>2012</h5>
                            <p>Lorem</p>
                        </div>

                    ))}
                </div>

                {/* Section 4:*/}
                <div className="text-center mb-5">
                    <img
                        src="/office-meeting.jpg"
                        alt="Rounded "
                        className="img-fluid rounded"
                        style={{ maxWidth: "100%", }}
                    />
                </div>

                {/* Section 5: */}
                <div className="mb-5 py-5">
                    <h2 className="text-start">Our Values</h2>
                    <p className="text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas odio dignissimos quae labore ad,
                    </p>
                    <p className="text-start">
                        explicabo eos libero a architecto id sapiente?
                    </p>
                </div>

                {/* Section 6:*/}
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {[...Array(6)].map((_, idx) => (
                        <div className="col d-flex align-items-center" key={idx}>
                            <i className="bi bi-star-fill text-white me-3" style={{ fontSize: "2rem" }}></i>
                            <p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Dolores eos esse perferendis hic. Maxime perspiciatis aut cupiditate. Quis saepe eos temporibus architecto?</p>
                        </div>
                    ))}
                </div>

                
                {/* Section 7:*/}
                <div className="mb-5">
                    <h2 className="text-start">Our Team</h2>
                    <p className="text-start">
                        Meet the exceptional people who make our company great.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                        {[
                            { src: "/team1.png", name: "Leonard Krasner", role: "Senior Designer" },
                            { src: "/team2.jpg", name: "Floyd Miles", role: "Principal Designer" },
                            { src: "/team3.jpg", name: "Emert Selmon", role: "Vp,user experience" },
                            { src: "/team4.jpg", name: "Chriss Watson", role: "Vp,Human Resorces" },
                            { src: "/team5.jpg", name: "Emman Dosley", role: "Senior Developer" },
                            { src: "/team6.jpg", name: "Alicia Bell", role: "Junior Copywrighter" },
                        ].map((member, idx) => (
                            <div className="col text-center text-start" key={idx}>
                                <img
                                    src={member.src}
                                    alt={member.name}
                                    className="img-fluid rounded"
                                    style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
                                />
                                <p>{member.name}</p>
                                <h3>{member.role}</h3>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Section 8:*/}
                <div
                    className="rounded mx-auto p-4"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        width: "100%",
                    }}
                >
                    <div className="d-flex align-items-center">
                        <img
                            src="/vacationcom.jpg"
                            alt="Highlight"
                            className="img-fluid rounded me-4"
                            style={{ maxWidth: "30%" }}
                        />
                        <div>
                            <h2>Join Our Team</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit placeat autem suscipit quos eum odio. Magnam voluptatibus aperiam eveniet autem iusto ipsum.
                            </p>
                            <div className="row row-cols-1 row-cols-md-3 g-3">
                                {[...Array(9)].map((_, idx) => (
                                    <div className="col d-flex align-items-center" key={idx}>
                                        <i
                                            className="bi bi-star-fill text-dark me-2"
                                            style={{ fontSize: "1.5rem" }}
                                        ></i>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                ))}
                            </div>
                            <p
                                className="text-primary text-end mt-3"
                                style={{ cursor: "pointer", textDecoration: "underline" }}
                            >
                                Get Started
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
