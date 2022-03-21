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
    HeaderFilter,
    Sorting,
    Format,
    Export,
    Selection
} from "devextreme-react/data-grid";
import 'devextreme/data/odata/store';
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import $ from "jquery";
import "./style/Countries.css"
import { etudiants } from "../data/etudiants";


// Je change la couleur de l'entête de la grille de données ici
const universiteRowPrepared = (e) => {
    if (e.rowType === "header") 
    {
        e.rowElement.bgColor = "#3341FF";
        e.rowElement.style.color = "white";
    }
}

// Je retourne les image dans une balise img ici
const cellRender = (data)  => {
    return <img src={data.displayValue} className="flag" />;
}

function Countries() 
{
    const [data, setData] = useState([]);
    const [playOne, setPlayOne] = useState(true);

    useEffect(() => {

        // Je me rassure ici qu'on appelle une seule fois l'API
        if (playOne) 
        {
            axios.get("https://restcountries.com/v2/all")
                .then((res) => {
                    setData(res.data);
                    setPlayOne(false);
                });
        }
    }, [data]);

    return (

        <Fragment>

            <Helmet>
                <title>Countries</title>
            </Helmet>
            
            <div className="container-countries">


                <h1 id="title">Liste des pays</h1>


                <DataGrid
                    id={"gridCountries"}
                    height={440}
                    showBorders={true}
                    remoteOperations={true}
                    repaintChangesOnly={true}
                    noDataText={"Aucune données"}
                    rowAlternationEnabled={true}
                    dataSource={data}
                    key={"name"}
                    onRowPrepared={universiteRowPrepared}
                >
                    <SearchPanel visible={true} placeholder={"Rechercher..."} />
                    <HeaderFilter visible={true} allowSearch={true} />
                    <Selection mode="multiple" />
                    <Sorting mode="none" />
                    <Scrolling mode="virtual" />

                    <Editing
                        //mode={"batch"}
                        allowAdding={false}
                        allowUpdating={false}
                        allowDeleting={false}
                        useIcons={true}
                    //startEditAction={"click"}
                    />

                    <Export enabled={true} allowExportSelectedData={true} />

                    <Column
                        dataField={"flag"}
                        caption={"DRAPEAU"}
                        alignment={"center"}
                        width={200}
                        allowFiltering={false}
                        cellRender={cellRender}
                    />

                    <Column
                        dataField={"name"}
                        caption={"PAYS"}
                        alignment={"center"}
                        width={200}
                    />

                    <Column
                        dataField={"capital"}
                        caption={"CAPITALE"}
                        alignment={"center"}
                        width={200}
                    />

                    <Column
                        dataField={"subregion"}
                        caption={"REGION"}
                        alignment={"center"}
                        width={200}
                    />

                    <Column
                        dataField={"population"}
                        caption={"POPULATION"}
                        alignment={"center"}
                        width={200}
                        allowFiltering={false}
                        dataType={"population"}
                    />

                    <Column
                        dataField={"timezones"}
                        caption={"FUSEAU HORAIRE"}
                        alignment={"center"}
                        width={200}
                    />


                </DataGrid>
            </div>

        </Fragment>

    );
}

export default Countries;