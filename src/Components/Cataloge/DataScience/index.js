import React from "react";
import laptop from "../Images/laptop.png"
import mainImage from "../Images/mainImage.jpeg"
import "./style.css"

function DataScience() {


    return (
        <div>
            <div className="image-container">
                <div className="text-overlay">
                <h4>Sankhyana Cataloge for Data Sceince</h4>
                <p>Follow guided learning paths at your own pace or sign up for expert-led classes.</p>
                </div>
                <img src={mainImage} alt="image" className="main-img"></img>
            </div>
            <div className="details">
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">DataMining with PYTHON</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Statics with PYTHON</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Artificial Intelligence</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Machine Learning</p>
                    <a href="view" > View  </a>
                </div>
            </div>
        </div>
    )
}

export default DataScience;