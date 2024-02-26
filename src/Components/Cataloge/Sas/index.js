import React from "react";
import laptop from "../Images/laptop.png"
import mainImage from "../Images/mainImage.jpeg"
import "./style.css"
import { Link } from "react-router-dom";

function Sas() {

    return (
        <div>
            <div className="image-container">
                <div className="text-overlay">
                <h4>Sankhyana Catalog for SAS</h4>
                <p>Follow guided learning paths at your own pace or sign up for expert-led classes.</p>
                </div>
                <img src={mainImage} alt="image" className="main-img"></img>
            </div>
            <div className="details">
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Base SAS</p>
                    {/* <a href="view" > View  </a> */}
                    <Link to="/sasdetails"> View </Link>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Advance SAS</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">Clinical SAS</p>
                    <a href="view" > View  </a>
                </div>
                <div className="view-box">
                    <img src={laptop} className="laptop"></img>
                    <p className="heading">SAS Viya</p>
                    <a href="view" > View  </a>
                </div>
            </div>
        </div>
    )
}

export default Sas;