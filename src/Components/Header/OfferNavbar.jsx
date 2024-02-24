import { useState } from "react";
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faX, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Flag from "react-world-flags/";
import canada from './Images/canada.png'
import india from './Images/india.png'
// import email from './Images/email.svg'

function OfferNavbar() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible((prevVisibility) => !prevVisibility);
    };

    return (
        <>
            {isVisible && (
                <nav className="navbar navbar-expand-lg">

                    <div className="container-fluid" style={{ backgroundImage: "linear-gradient(to left, red , yellow)", height: "30px" }}>
                        <div className=" w-100 d-flex justify-content-center">
                            <div className="offer-content" id="">
                                You're invited to claim your special offer! : Flat 20% Off | OFFER
                                ENDING IN :{" "}
                                <strong id="grabedate">
                                    <span>1</span> D <span>23</span> H <span>41</span> M <span>18</span> S{" "}
                                </strong>
                                <span
                                    class="badge badge-secondary fs-6 font-weight-bold text-decoration-underline ml-5"
                                >
                                    Enroll Now!
                                </span>


                            </div>

                        </div>
                        {/* <span class="fs-5 text-right" onClick={toggleVisibility}>X</span> */}

                        <FontAwesomeIcon className="close-icon" onClick={toggleVisibility} icon={faX} />

                    </div>
                </nav>

            )}

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="w-100 d-flex justify-content-between">
                        <div className="icons"> 
                            <a href="https://www.facebook.com/SankhyanaConsultancyServices" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faFacebook} className="nav-icon1"/>

                            </a>
                            <a href="https://twitter.com/sankhayana" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faTwitter} className="nav-icon2" />
                            </a>
                            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F13343717%2Fadmin%2Ffeed%2Fposts%2F" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faLinkedin} className="nav-icon3"  />
                            </a>

                            <a href="https://twitter.com/sankhayana" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faPinterest} className="nav-icon4"  />
                            </a>


                            <a href="https://www.instagram.com/sankhyanakenya/" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faInstagram} className="nav-icon5" />
                            </a>


                            <a href="https://twitter.com/sankhayana" className="text-decoration-none text-dark me-2">
                                <FontAwesomeIcon icon={faYoutube} className="nav-icon6" />
                            </a>

                        </div>
                        <div className="d-flex">

                            <div className="contact-container">
                                <div className="contact-item">
                                    {/* <Flag code="bgd"/> */}

                                    <img src={canada} className="whatsappImg w-8" alt="whatsapp" title="WhatsApp" />

                                    <a href="" className="contact-link">+91 9591295524</a>
                                </div>

                                <div className="contact-item">
                                    {/* <FontAwesomeIcon icon={faPhone} style={{ color: '#1DA1F2', fontSize: '24px' }} /> */}
                                    <img src={india} className="whatsappImg w-8" alt="whatsapp" title="WhatsApp" />
                                    <a href="" className="contact-link">+91 9591295524</a>
                                </div>

                                <div className="contact-item">
                                    {/* <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> */}
                                    <FontAwesomeIcon icon={faEnvelope} className="custom-icon" />
                                    {/* <img src={email} class="whatsappImg w-8" alt="whatsapp" title="WhatsApp"/> */}

                                    <a href="www.info@sankhyana.com" className="contact-link ml-2">info@sankhyana.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isVisible ? <FontAwesomeIcon onClick={toggleVisibility} icon={faEye} /> : " "}
            </nav>

        </>
    );
}

export default OfferNavbar;