import React from "react";
import "./style.css"
import OfferNavbar from "../Header/OfferNavbar";
import Navbar from "../Header/Navbar";
import sas from "./Images/sas.png";
import datascience from "./Images/data-science.png";
import fullStack from "./Images/full-stack.png";
import internship from "./Images/internship.png";
import demo from "./Images/free-demo.png";
import liveWeb from "./Images/live-web.png";
import classroom from "./Images/classroom.png";
import trainers from "./Images/trainers.png";
import handOnTraining from "./Images/Hands-on_Training.png";
import fees from "./Images/fees.png";




function Training() {
    return (
        <div>
            <div>
                <OfferNavbar />
                <Navbar />
            </div>

            <section className="course-details">
                <div className="detail">
                    <h2>SAS Courses</h2>
                    <p>
                        SAS Courses typically cover various topics, including data manipulation, statistical techniques, machine learning, and data visualization using SAS software. Whether you're looking to start your career in data analytics, enhance your statistical skills, or become a certified SAS professional, these courses offer a valuable learning experience. Experience a digital-first approach to learning designed to help you master new skills online, with hands-on practice during virtual lab hours and easy access to your online course materials. With a blend of theory and hands-on practice, participants gain the expertise to make data-driven decisions, solve complex business problems, and extract meaningful insights from data using SAS.
                    </p>
                    <button className="sas-btn">More</button>
                </div>
                <div className="img">
                    <img src={sas} alt="img1" className="course-images"/>
                </div>
            </section>

            <section className="course-details">
                <div className="img">
                    <img src={datascience} alt="img1" className="course-images"/>
                </div>
                <div className="detail data">
                    <h2>Data Science</h2>
                    <p>
                        Data Science Courses provide a comprehensive education in the rapidly growing field of data science. Data science is an interdisciplinary domain that combines knowledge from statistics, computer science, mathematics, and domain expertise to analyze and derive valuable insights from data. Data Science as a career in data analysis will suit you if you are highly analytical, have high mathematical skills, and are curious and interested. Managers from any field, as Analytics is the best tool for managers these days who love solving challenging programs. Fresh graduates who wish to make a career in the field of Big Data and Data Science.
                    </p>
                    <button className="sas-btn">More</button>
                </div>
            </section>

            <section className="course-details">
                <div className="detail">
                    <h2>Full Stack Developer</h2>
                    <p>
                        Full Stack Developer courses offer training to individuals who aspire to become proficient in front-end and back-end web development. Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface and the back end takes care of the business logic and application workflows. These Full Stack Developer courses often include hands-on projects, real-world applications, and collaborative work to simulate a professional development environment. These courses provide a well-rounded education in various programming languages, frameworks and tools commonly used in web development.
                    </p>
                    <button className="sas-btn">More</button>
                </div>
                <div className="img">
                    <img src={fullStack} alt="img1" className="course-images"/>
                </div>
            </section>

            <section className="course-details">
                <div className="img">
                    <img src={internship} alt="img1" className="course-images"/>
                </div>
                <div className="detail internship">
                    <h2>Internship</h2>
                    <p>
                        An Internship is work experience provided by companies or organizations for individuals, typically students and recent graduates to gain practical exposure and hands-on experience in a specific field. Internships are a structured form of on-the-job training where interns work closely with professionals in their chosen field, applying theoretical knowledge to real-world tasks and projects. Internships can vary in duration, ranging from a few weeks to several months, and they are an excellent way for individuals to explore their career interests, develop skills, and establish professional connections.                    </p>
                    <button className="sas-btn">More</button>
                </div>
            </section>

            <section className="course-details">
                <div className="detail">
                    <h2>Scholarship</h2>
                    <p>
                        Our company offers a unique scholarship program that covers a remarkable 50% to 100% of tuition fees. This program is designed to support students across various disciplines, from Datascience to Fullstack development. By providing substantial financial aid, we aim to foster a diverse and an inclusive learning environment where students can thrive and reach their full potential.
                    </p>
                    <button className="sas-btn">More</button>
                </div>
                <div className="img">
                    <img src={fullStack} alt="img1" className="course-images"/>
                </div>
            </section>


            <div className="skills"> 
                <div className="skill-box">
                <img src={demo}  alt="img2" className="images"/>
                    <h3> Free Demo</h3>
                    <p>Elevate your educational journey with our cutting-edge solution. Experience the future of possibilities with our free demo.

                    </p>
                </div>

                <div className="skill-box"> 
                <img src={liveWeb}  alt="img2" className="images"/>
                    <h3> Live Web</h3>
                    <p>
                        Explore our groundbreaking solution with a free demo. Unleash innovation instantly, at no cost just click and experience.
                    </p>
                </div>

                <div className="skill-box">
                    <img src={classroom}  alt="img2" className="images"/>
                    <h3> Classroom </h3>
                    <p>
                        Transform your classroom experience effortlessly–join our live demo for free. Discover a new era of interactive learning without any cost.
                    </p>
                </div>
            </div>

            <div className="skills">
                <div className="skill-box">
                <img src={trainers}  alt="img2" className="images"/>
                    <h3>IT experts as trainers</h3>
                    <p>
                        Learning a technology with an experienced professional enhances understanding.
                    </p>
                </div>

                <div className="skill-box">
                <img src={handOnTraining}  alt="img2" className="images"/>
                    <h3> Fully Hands-on Training</h3>
                    <p>
                        Support any training with more practical classes. So, we always prefers to give hands-on training.
                    </p>
                </div>

                <div className="skill-box">
                <img src={fees}  alt="img2" className="images"/>
                    <h3> Affordable Fees</h3>
                    <p>
                        We are dead cheap in fees. Quality training with less price is only at Sankhyana Education.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Training;