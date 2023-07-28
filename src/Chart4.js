import React from 'react'
import { Bar } from 'react-chartjs-2'
import "../src/style.css"

import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Bagalkotedata  from './topojsons/Districts/DistrictsData/Bagalkotedata.json'
import { useParams } from 'react-router-dom';
// import { Chart as ChartJS } from "chart.js";
function Chart1() {

    const { id } = useParams()
    
    console.log(id)

    const data = {

        labels: ['Male_Voters', 'Female_Voters'],

        datasets: [
            {
                labels: 'Male and Female Voters',
                data: [Bagalkotedata .assembly_constituencies[id].male_voters,Bagalkotedata.assembly_constituencies[id].female_voters],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                ]
            }
        ]
    }





    return (
        
    
            <div style={{backgroundColor:"white"}}>
                
            <Link
            id="link"
            to={{
             pathname: `/assembly/Bagalkot`,
             // state: { districtData },
            }}
            >
            <h2>BACK</h2>
            </Link>
                        <Bar data={data} />
                    </div>
                )
            }
            
export default Chart1;

