import React from "react";
import "./About.css"
import Navbar from "../Header/Navbar";
import OfferNavbar from "../Header/OfferNavbar";
import banner from "./Images/banner.jpg"
import bg from "./Images/bg-img.jpeg"
import leadership from "./Images/leadership.png"


function About() {
    return (
        <div>
            <div>
                <OfferNavbar />
                <Navbar />
            </div>

            {/* About Section */}
            <div className="bgImg">
                {/* <img src={banner} alt="" /> */}
                <img src={bg} alt="" />
                
            </div>
            <div>
                <div className="About">
                    <div >
                        <h1>ABOUT US</h1>
                        <p>
                            <span className="topic-name">History: </span>Established in 2014, Sankhyana has evolved to meet the market's upskilling needs and has emerged as the largest SAS Authorized Training Partner. Sankhyana’s support extends across India and Kenya, making their services accessible to a wide audience. We support clients across India in obtaining actionable insights through the delivery of advanced analytics services and visualization.
                        </p>
                        <p>
                            <span className="topic-name">Company Culture and Work Environment:</span> At Sankhyana, our company culture is the cornerstone of our success. We believe that a positive and inclusive work environment is essential for fostering creativity, innovation, and collaboration. Our commitment to these values shapes every aspect of our organization.
                        </p>
                        <p>
                            <span className="topic-name">Expertise and Specialization:</span> Our team comprises industry experts with extensive knowledge in diverse sectors. From finance and healthcare to technology and beyond, our consultants bring a wealth of experience, enabling us to understand the unique challenges and opportunities each industry presents.
                        </p>
                    </div>
                    <button className="Downloadbut">Download Our Brochure</button>
                </div>

                {/* Mission Vision section */}
                <h3 className="mission">Mission</h3>
                <div className="mission-vision">
                    <div className=" mission-info">
                        <p>
                            To provide credible & reliable insights emphasizing “Data Driven Decision Science”.
                        </p>
                        <p>
                            To use state-of-the-art technology to envisage insights.
                        </p>
                        <p>
                            To build trust and long-term relationships with Client.
                        </p>
                        <p>
                            To envisage analytics to sectors unimagined and cater analytics to micro & small firms.
                        </p>
                        <p>
                            To actively cater value addition to the science of analytics.
                        </p>
                    </div>
                    <div className="vertical-line1"></div>

                    <h3 className="vision">Vision</h3>
                    <div className="vertical-line2">
                        {/* animate__animated animate__backInRight animate__delay-6s */}
                        <div className="vision-info">
                            <p>
                                To be recognized as an analytic firm globally amongst the top 100 pedigrees.
                            </p>
                            <p>
                                To emerge as an accredited center of learning that provides value-based technical education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <section class="lead">
                <div className="leadership">
                    <h1> Leadership</h1>
                    <p className="leadership-info"><span className="leadership-point">Team and Leadership: </span>
                        At Sankhyana Consultancy Services, our leadership team embodies a wealth of experience, expertise, and a shared commitment to excellence. Our leaders are visionaries who steer our company towards innovation and success, ensuring that we consistently exceed the expectations of our clients.
                    </p>
                    <ul>
                        <li>
                            Founder and CEO-Sajal Kumar. With a visionary approach, Sajal Kumar founded Sankhyana with the mission of delivering unparalleled consultancy services. Their leadership sets the tone for our organization's growth and client-centric approach.
                        </li>
                        <li>
                            We believe in fostering a work environment that encourages creativity, continuous learning, and a sense of ownership among our team members.
                        </li>
                        <li>
                            Our leadership team champions innovation as a guiding principle. Whether it's adopting emerging technologies or pioneering new methodologies, we are committed to staying ahead of the curve.
                        </li>
                        <li>
                            Above all, our leaders are deeply committed to our clients' success. They understand that the success of our clients is intricately linked to our own, and this client-centric approach is embedded in every facet of our organization.
                        </li>
                    </ul>
                    {/* <img className="baseline-img" src="baseline.jpg" alt="" /> */}
                </div>
                <div>
                    <img src={leadership} alt="" className="lead-img" />
                </div>
            </section>

            <section className="p-5">
                <h1>We are Trusted Consulting Company</h1>
                <div className="row text-center g-4 p-5 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 ">
                        <div className="card bg-light text-dark h-100 goals">
                            <div className="card-body text-center">
                                <h4 className="card-title">Received Goals</h4>
                                <p className="card-text text-left">Strategic skill enhnacement</p>
                                <p className="card-text text-left">Data Driven Decision Making</p>
                                <p className="card-text text-left">Industry Relevant Certifications</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="card bg-light text-dark h-100 result">
                            <div className="card-body text-center">
                                <h4 className="card-title">Results</h4>
                                <p className="card-text text-left">Empowered professionals</p>
                                <p className="card-text text-left">Data-Driven Impact</p>
                                <p className="card-text text-left">Certification success stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* call to action section */}
            <div className="call-action">
                <h1> Call To Action </h1>
                <div>
                    <p>
                        Take the next step towards success! Explore our solutions, unleash innovation, and elevate your business. Contact us now for a consultation tailored to your needs. Let's embark on a journey of growth together!
                    </p>
                </div>
                <div>
                    <button className="btn call">Call To Action </button>
                </div>
            </div>
        </div>
    )
}

export default About;




