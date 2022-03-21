// import DevExpress from "devextreme";
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel,
    Editing, 
    Scrolling,
    LoadPanel,
    HeaderFilter
} from "devextreme-react/data-grid";
import 'devextreme/data/odata/store';
import React, { Fragment } from "react";
import {Helmet} from "react-helmet";
import "./style/Etudiants.css"
import {etudiants} from "../data/etudiants";


const etudiantsRowPrepared = (e) => {
    if(e.rowType === "header")
    {
        e.rowElement.bgColor = "#3341FF";
        e.rowElement.style.color = "white";
    }
}

// je reduis ici la largeur de la colonne de suppression
const etudiantsOnInitialized = (e) =>{
    //e.component.columnOption("command:select", "width", 30);
    e.component.columnOption("command:edit", "width", 45);
}


function Etudiants() {
    return (
        <Fragment>

            <Helmet>
                <title>Student</title>
            </Helmet>

            <h1 id={"title"}>Liste des étudiants</h1>

            <div className="container-etudiants">

                <DataGrid
                    id={"gridEtudiant"}
                    showBorders={true}
                    remoteOperations={true}
                    repaintChangesOnly={true}
                    noDataText={"Aucune données"}
                    rowAlternationEnabled={true}
                    dataSource={etudiants}
                    key={"id"}
                    onRowPrepared={etudiantsRowPrepared}
                    onInitialized={etudiantsOnInitialized}
                >
                
                    <Paging defaultPageSize={5} />
                    <SearchPanel visible={true} placeholder={"Rechercher..."} />
                    <HeaderFilter visible={true} allowSearch={true} />

                    <Editing
                        mode={"batch"}
                        allowAdding={true}
                        allowUpdating={true}
                        allowDeleting={true}
                        useIcons={true}
                        startEditAction={"click"}
                    />

                    <Column
                        dataField={"nom"}
                        caption={"NOM"}
                        alignment={"center"}
                        width={160}
                    />

                    <Column
                        dataField={"prenom"}
                        caption={"PRENOM"}
                        alignment={"center"}
                        width={160}
                    />

                    <Column
                        dataField={"age"}
                        caption={"AGE"}
                        alignment={"center"}
                        width={80}
                    />

                    <Column
                        dataField={"departement"}
                        caption={"DEPARTEMENT"}
                        alignment={"center"}
                        width={180}
                    />

                </DataGrid>

            </div>
        </Fragment>
    );
}

export default Etudiants;