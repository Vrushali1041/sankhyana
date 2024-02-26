import React from "react";
import laptop from "../Images/laptop.png"
import mainImage from "../Images/mainImage.jpeg"
import "./style.css"

function Scholarship() {


    return (
        <div>
            <div className="image-container">
                <div className="text-overlay">
                <h4>Sankhyana Cataloge for Scholarship</h4>
                <p>Follow guided learning paths at your own pace or sign up for expert-led classes.</p>
                </div>
                <img src={mainImage} alt="image" className="main-img"></img>
            </div>
            <div className="details">
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Data Science</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Full Stack</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Base SAS+Macros+SQL+DS</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Clinical SAS Internship</p>
                    <a href="view" > View  </a>
                </div>
            </div>

            <div className="details">
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Base SAS+Macros+SQL+CS+CSI</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Data Enginneering Courses</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Base SAS + DS</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Base SAS + DS</p>
                    <a href="view" > View  </a>
                </div>
            </div>
        </div>
    )
}

export default Scholarship;