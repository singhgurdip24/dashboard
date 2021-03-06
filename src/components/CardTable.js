import React from "react";

import { Card } from "antd";
import "antd/dist/antd.css";
import './component.css';

const CardTable = (props) => {
    return(
        <div className='card-table'>
            <Card title="Total Cases" className="maincounter-wrap">
                <h1 style ={{color:'blue'}}>{props.totalCases}</h1>
            </Card>
            <Card title="Total Recovered" className="maincounter-wrap">
                <h1 style ={{color:'green'}}>{props.totalRecovered}</h1>
            </Card>
            <Card title="Total Deaths" className="maincounter-wrap">
                <h1 style ={{color:'red'}}>{props.totalDeaths}</h1>
            </Card>
        </div>
    );
}

export default CardTable;
