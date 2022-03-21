import React from "react";
import $ from 'jquery';
import {Link} from 'react-router-dom';
import "./style/Footer.css";

function Footer() {
    const years = new Date().getFullYear();
    return (
        <footer className="footer-distributed" id="footer">

            <div className="footer-left">

                <h3>Company<span>logo</span></h3>

                <p className="footer-links">

                    <Link className="link-1 menu" to="/accueil">Accueil</Link>

                    <Link to="/a-propos" className="menu">A propos</Link>

                    <Link to="/list-etudiants" className="menu">CRUD Operation</Link>

                    

                    <Link to="/countries" className="menu">Countries</Link>

                </p>

                <p className="footer-company-name">&#169; {years}</p>

            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>2296 Rue Joliette</span> QC, J4K-4z8</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 (438) 346 8493</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:kolieyves@gmail.com">kolieyves@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>A propos</span>
                    Je suis un dévelopeur junior à la recherche d'un tout premier djob en programmation.
                </p>

                <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>
        </footer>
    );
}


$(document).ready(function()
    { 
        // Je positionne le footer en bas de page ici
        var docHeigth = $(window).height();
        var footerHeigth = $("#footer").height();
        var footerTop = $("#footer").position().top + footerHeigth;
        if(footerTop < docHeigth){
            $("#footer").css("margin-top", 10 + (docHeigth - footerTop) + "px");
        }
        // End footer position
    });

export default Footer;