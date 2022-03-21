import React from "react";
import "./style/Accueil.scss"; // J'utilise dans ce component du sass pour styliser ma vue
import {Helmet} from "react-helmet";

function Accueil()
{
    return(
        <div className="container-accueil">
            <Helmet>
                <title>Accueil</title>
            </Helmet>
            

            <div className="div-left">
                <p>
                    N'importe quel idiot peut écrire du code qu'un 
                    ordinateur peut comprendre. 
                    Les bons programmeurs écrivent du code que les humains peuvent comprendre.
                </p>
                
            </div>                     

        </div>
        
    );
}

export default Accueil;