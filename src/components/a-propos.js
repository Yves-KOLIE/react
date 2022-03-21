import React from "react";
import {Helmet} from "react-helmet";
import "./style/A-propos.css";

function Apropos(){
    return(
        <div className="container-a-propos">

            <Helmet>
                <title>A propos</title>
            </Helmet>
            

            <p>Bonjour monsieur,</p> <br/>

            <p>
                Je m'appelle <strong>Yves KOLIE.</strong> Je suis un nouveau
                diplômé de l'Institut Teccart à Montréal au Canada en Informatique 
                de Gestion.
                Après avoir suivi une solide formation en programmation informatique, je suis à la recherche
                de mon tout premier emploi dans mon domaine d'études.
            </p> <br/>

            <p>
                Comme vous pouvez le constater à la lecture de mon CV, je possède un BAC en génie
                électrique et un DEC en Informatique de gestion (DEC de trois ans) à l’Institut Teccart de
                Montréal. J’ai acquis au fil des années et grâce aux nombreux projets personnels et scolaires
                auxquels j’ai participé toutes les compétences nécessaires afin d’occuper le poste de
                programmeur analyste. Je travaille continuellement avec plusieurs langages de
                programmation et technologies tels que le C/C++, Java, C#, PHP, JavaScript, HTML 5, CSS3, JQuery, Node
                Js, React Js, Asp.Net Core 5 ou 6 et sans oublier les systèmes de gestion de bases de données relationnelles comme
                MySQL, Oracle et SQL Server par exemple et aussi la suite Office (Word, Excel,
                PowerPoint). Cela m’a permis d’acquérir une solide expérience dans le domaine.
            </p> <br/>
            
            <p>
                Relevé de nouveaux défis a toujours été une véritable passion pour moi car ils me permettent 
                d'accroître de jour en jour mes compétences et de restez à jour dans les différentes technologies
                avec lesquelles je travaille. J'ai aussi une très bonne capacité de vite apprendre de nouvelles
                choses et de m'y adapter dans un délais record.
            </p> <br/>

            <p>
                Dans les prochaines années, je veux être dans un emploi très stable, convivial où la couleur de peau et l'origine des uns et des autres n'a aucune importance au yeux de tous sinon que la parfaite réussite des objectifs fixés
                par la compagnie et où le travail d'équipe est apprécié afin d'évoluer avec mes collègues de service.
            </p>

            <div id="cv">
                <p>
                    <a href="../../files/CV KOLIE Yves.pdf" download="CV KOLIE Yves">Télécharger mon CV ici</a>
                </p>
            </div>


        </div>
    );
}

export default Apropos;