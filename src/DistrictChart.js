import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "./index.css";
import { Link } from "react-router-dom";
import Bagalkot from "../src/topojsons/Districts/DistrictsTopozsons/Bagalkote.json";
import Belgaum from "../src/topojsons/Districts/DistrictsTopozsons/Belgaum.json";
import Bellary from "../src/topojsons/Districts/DistrictsTopozsons/Bellary.json";
import BengaluruRural from "../src/topojsons/Districts/DistrictsTopozsons/Bengaluru Rural.json";
import Bangalore from "../src/topojsons/Districts/DistrictsTopozsons/Bengaluru.json";
import Bidar from "../src/topojsons/Districts/DistrictsTopozsons/Bidar.json";
import Bijapur from "../src/topojsons/Districts/DistrictsTopozsons/Bijapura.json";
import Chamrajnagar from "../src/topojsons/Districts/DistrictsTopozsons/Chamrajnagara.json";
import Chikkaballapura from "../src/topojsons/Districts/DistrictsTopozsons/Chikballapura.json";
import Chikmagalur from "../src/topojsons/Districts/DistrictsTopozsons/Chikmagalur.json";
import Chitradurga from "../src/topojsons/Districts/DistrictsTopozsons/Chitradurga.json";
import Dakshina_Kannada from "../src/topojsons/Districts/DistrictsTopozsons/Dakshina Kannada.json";
import Davanagere from "../src/topojsons/Districts/DistrictsTopozsons/Davanagere.json";
import Dharwad from "../src/topojsons/Districts/DistrictsTopozsons/Dharwad.json";
import Gadag from "../src/topojsons/Districts/DistrictsTopozsons/Gadag.json";
import Gulbarga from "../src/topojsons/Districts/DistrictsTopozsons/Gulbarga.json";
import Hassan from "../src/topojsons/Districts/DistrictsTopozsons/Hassan.json";
import Haveri from "../src/topojsons/Districts/DistrictsTopozsons/Haveri.json";
import Kodagu from "../src/topojsons/Districts/DistrictsTopozsons/Kodagu.json";
import Kolar from "../src/topojsons/Districts/DistrictsTopozsons/Kolar.json";
import Koppal from "../src/topojsons/Districts/DistrictsTopozsons/koppala.json";
import Mandya from "../src/topojsons/Districts/DistrictsTopozsons/Mandya.json";
import Mysore from "../src/topojsons/Districts/DistrictsTopozsons/Mysore.json";
import Raichur from "../src/topojsons/Districts/DistrictsTopozsons/Raichur.json";
import Ramanagara from "../src/topojsons/Districts/DistrictsTopozsons/Ramnagara.json";
import UttaraKannada from "../src/topojsons/Districts/DistrictsTopozsons/UttarKannada.json";
import Accordion from "@mui/material/Accordion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea, CardActions, Button } from "@mui/material";
import Tumkur from "../src/topojsons/Districts/DistrictsTopozsons/Tumkur.json";
import Yadgir from "../src/topojsons/Districts/DistrictsTopozsons/yadgir.json";

import Belgaumdata from "../src/topojsons/Districts/DistrictsData/Belgaumdata.json";
import Udupi from "../src/topojsons/Districts/DistrictsTopozsons/Udupi.json";
import Shimoga from "../src/topojsons/Districts/DistrictsTopozsons/shimoga.json";
import shimogadata from "../src/topojsons/Districts/DistrictsData/shimogadata.json";
import udupidata from "../src/topojsons/Districts/DistrictsData/udupidata.json";
import Bagalkotedata from "../src/topojsons/Districts/DistrictsData/Bagalkotedata.json";

import Chikkaballapuradata from "../src/topojsons/Districts/DistrictsData/Chikkaballapuradata.json";
import Bellarydata from "../src/topojsons/Districts/DistrictsData/Bellarydata.json";
import Bengalurudata from "../src/topojsons/Districts/DistrictsData/Bengaluruurbandata.json";
import Bidardata from "../src/topojsons/Districts/DistrictsData/Bidardata.json";
import Bijapuradata from "../src/topojsons/Districts/DistrictsData/Bijapuradata.json";
import  Chamarajanagaradata from "../src/topojsons/Districts/DistrictsData/Chamarajanagaradata.json";
import  Chikmagalurdata from "../src/topojsons/Districts/DistrictsData/Chikmagalurdata.json";
import  Chitradurgadata from "../src/topojsons/Districts/DistrictsData/Chitradurgadata.json";
import  DakshinaKannadadata from "../src/topojsons/Districts/DistrictsData/Dakshina Kannadadata.json";
import  Davanageredata from "../src/topojsons/Districts/DistrictsData/Davanageredata.json";
import  Dharwaddata from "../src/topojsons/Districts/DistrictsData/Dharwaddata.json";
import  Gadagdata from "../src/topojsons/Districts/DistrictsData/Gadagdata.json";
import  Gulbargadata from "../src/topojsons/Districts/DistrictsData/Gulbargadata.json";
import  Hassandata from "../src/topojsons/Districts/DistrictsData/Hassandata.json";
import  Haveridata from "../src/topojsons/Districts/DistrictsData/Haveridata.json";
import Kodagudata from "../src/topojsons/Districts/DistrictsData/Kodagudata.json";
import Kolardata from "../src/topojsons/Districts/DistrictsData/Kolardata.json";
import Koppaladata from "../src/topojsons/Districts/DistrictsData/Koppaladata.json";
import Mandyadata from "../src/topojsons/Districts/DistrictsData/Mandyadata.json";
import Mysoredata from "../src/topojsons/Districts/DistrictsData/Mysoredata.json";
import Raichurdata from "../src/topojsons/Districts/DistrictsData/Raichurdata.json";
import Ramanagaradata from "../src/topojsons/Districts/DistrictsData/Ramanagaradata.json";
import Tumkurdata from "../src/topojsons/Districts/DistrictsData/Tumkurdata.json";
import Uttarkannadadata from "../src/topojsons/Districts/DistrictsData/Uttarkannadadata.json";
import Yadgirdata from "../src/topojsons/Districts/DistrictsData/yadgirdata.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import download from "./assets/textures/download.jfif";

const DistrictChart = ({ selectedDistrict }) => {
  let geoURL;
  let zoomMap = 1;
  let centerMap = [80, 22];
  let scaleMap = 400;
  if (selectedDistrict === "Chamrajnagar") {
    geoURL = Chamrajnagar;

    scaleMap = 2000;

    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Shimoga") {
    geoURL = Shimoga;

    scaleMap = 2000;

    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Udupi") {
    geoURL = Udupi;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Belgaum") {
    geoURL = Belgaum;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Bagalkot") {
    geoURL = Bagalkot;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Bellary") {
    geoURL = Bellary;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "BengaluruRural") {
    geoURL = BengaluruRural;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Bangalore") {
    geoURL = Bangalore;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Chikkaballapura") {
    geoURL = Chikkaballapura;
    scaleMap = 1000;
    centerMap = [73.791, 19.9973];
  }
  if (selectedDistrict === "Bidar") {
    geoURL = Bidar;
    scaleMap = 4000;
    centerMap = [76, 14];
  }


  

  if (selectedDistrict === "Bijapur") {
    geoURL = Bijapur;
    scaleMap = 3000;
    centerMap = [76, 14];
  }

  if (selectedDistrict === "Chikmagalur") {
    geoURL = Chikmagalur;
    scaleMap = 3000;
    centerMap = [76, 14];
  }

  if (selectedDistrict === "Bijapur") {
    geoURL = Bijapur;
    scaleMap = 3000;
    centerMap = [76, 14];
  }
  if (selectedDistrict === "Chitradurga") {
    geoURL = Chitradurga;
    scaleMap = 3000;
    centerMap = [76, 14];
  }
  if (selectedDistrict === "Dakshina_Kannada") {
    geoURL =Dakshina_Kannada;
    scaleMap = 3000;
    centerMap = [76, 14];
  }
  if (selectedDistrict === "Davanagere") {
    geoURL = Davanagere;
    scaleMap = 3000;
    centerMap = [76, 14];
  }
  if (selectedDistrict === "Dharwad") {
    geoURL = Dharwad;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Gadag") {
    geoURL = Gadag;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Gulbarga") {
    geoURL = Gulbarga;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Hassan") {
    geoURL = Hassan;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Haveri") {
    geoURL = Haveri;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Kodagu") {
    geoURL = Kodagu;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Kolar") {
    geoURL = Kolar;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Koppal") {
    geoURL = Koppal;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Mandya") {
    geoURL = Mandya;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Mysore") {
    geoURL = Mysore;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Raichur") {
    geoURL = Raichur;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Mandya") {
    geoURL = Mandya;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Ramanagara") {
    geoURL = Ramanagara;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  if (selectedDistrict === "Tumkur") {
    geoURL = Tumkur;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "Yadgir") {
    geoURL = Yadgir;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }
  if (selectedDistrict === "UttaraKannada") {
    geoURL = UttaraKannada;
    scaleMap = 3000;
    centerMap = [73.847, 18.5236];
  }

  
  















  let districtData;
  if (selectedDistrict === "UttaraKannada") {
    districtData = Uttarkannadadata;
  }
  if (selectedDistrict === "Yadgir") {
    districtData = Yadgirdata;
  }
  if (selectedDistrict === "Tumkur") {
    districtData = Tumkurdata;
  }

  if (selectedDistrict === "Ramanagara") {
    districtData = Ramanagaradata;
  }

  if (selectedDistrict === "Raichur") {
    districtData = Raichurdata;
  }

  if (selectedDistrict === "Mysore") {
    districtData = Mysoredata;
  }

  if (selectedDistrict === "Mandya") {
    districtData = Mandyadata;
  }

  if (selectedDistrict === "Koppal") {
    districtData = Koppaladata;
  }

  if (selectedDistrict === "Kolar") {
    districtData = Kolardata;
  }

  if (selectedDistrict === "Kodagu") {
    districtData = Kodagudata;
  }

  if (selectedDistrict === "Haveri") {
    districtData = Haveridata;
  }

  if (selectedDistrict === "Hassan") {
    districtData = Hassandata;
  }

  if (selectedDistrict === "Gulbarga") {
    districtData = Gulbargadata;
  }
  if (selectedDistrict === "Gadag") {
    districtData = Gadagdata;
  }
  if (selectedDistrict === "Davanagere") {
    districtData = Davanageredata;
  }
  if (selectedDistrict === "Dharwad") {
    districtData = Dharwaddata;
  }
  if (selectedDistrict === "Dakshina_Kannada") {
    districtData = DakshinaKannadadata;
  }
  if (selectedDistrict === "Chikmagalur") {
    districtData = Chikmagalurdata;
  }
  if (selectedDistrict === "Shimoga") {
    districtData = shimogadata;
  }
  if (selectedDistrict === "Udupi") {
    districtData = udupidata;
  }
  if (selectedDistrict === "Belgaum") {
    districtData = Belgaumdata;
  }
  if (selectedDistrict === "Bagalkot") {
    districtData = Bagalkotedata;
  }
  if (selectedDistrict === "Chikkaballapura") {
    districtData = Chikkaballapuradata;
  }
  if (selectedDistrict === "Chitradurga") {
    districtData = Chitradurgadata;
  }
 if (selectedDistrict === "Bellary") {
    districtData = Bellarydata;
  }
  if (selectedDistrict === "Bangalore") {
    districtData = Bengalurudata;
  }
  if (selectedDistrict === "Bidar") {
    districtData = Bidardata;
  }
  if (selectedDistrict === "Bijapur") {
    districtData = Bijapuradata;
  }
  if (selectedDistrict === "Chamrajnagar") {
    districtData = Chamarajanagaradata;
  }



  console.log("selectedDistrict", selectedDistrict);

  return (
    <div style={{ display: "flex", marginTop: "80px" }} id="map">
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={250}
        height={250}
        projectionConfig={{ scale: 3500 }}
      >
        <ZoomableGroup zoom={zoomMap} center={[76, 14]}>
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "rgb(125, 122, 122)",
                      outline: "none",
                    },
                    // hover: {
                    //   // fill: "forestgreen",
                    //   outline: "none",
                    // },
                    pressed: {
                      fill: "#2E8B57",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="name">
        <h1>{districtData.name}</h1>
      </div>

      <div style={{ marginRight: 50 }}>
        <Card
          sx={{
            minWidth: "800",
            minHeight: "400",
            marginRight: 10,
            marginTop: 5,
            marginBottom: 25,
          }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image={require("./assets/textures/download.jfif")}
          />
          <CardContent>
            {/* //className="card" */}

            {/* className="card-inner" */}

            {/* className="front" */}
            {/* <Typography sx={{ fontSize: 40 }} >{selectedDistrict}</Typography>
      

      
    
      {/* className="back" */}

            <Accordion
              sx={{
                backgroundColor: "green",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5"> {districtData.state}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">Population:</Typography>
                <Typography> {districtData.population}</Typography>
                <Typography variant="h6">
                  {" "}
                  Parliamentary Constituencies:
                </Typography>
                <Typography variant="h6">
                  {districtData.parliamentary_constituencies.map(
                    (parliamentary) => (
                      <>
                        <center>
                          {parliamentary.name}:<br />
                          Mp:{parliamentary.mp}
                          <br />
                          Population:{parliamentary.population}
                          <br />
                          Male Voters:{parliamentary.male_voters}
                          <br></br>
                          Female Voters:{parliamentary.female_voters}
                        </center>
                      </>
                    )
                  )}
                </Typography>
                <Link
                  id="link"
                  to={{
                    pathname: `/assembly/${selectedDistrict}`,
                    state: { districtData },
                  }}
                >
                  <h2>Assembly Constituencies</h2>
                </Link>
              </AccordionDetails>
            </Accordion>

            <Typography
              sx={{ fontSize: 22 }}
              color="text.secondary"
            ></Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </div>

      {/* 

    <CardContent className="card">
      <CardContent className="card-inner"> 
    
 <CardContent className="front">
     
        <Typography sx={{ fontSize: 40 }} >{selectedDistrict}</Typography>
      </CardContent>

      
      <CardContent className="back">
      <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
      State: {districtData.state}
      </Typography>
        <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
      Population: {districtData.population}
      </Typography>
      
      <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                        Parliamentary Constituencies: <br/>
                       
      {districtData.parliamentary_constituencies.map(parliamentary => (
            <> <center>{parliamentary.name}:<br/>
               Mp:{parliamentary.mp}<br></br> Population:{parliamentary.population}<br></br> Male Voters:{parliamentary.male_voters}<br></br> Female Voters:{parliamentary.female_voters}</center></>
            ))}
      </Typography>
      
      <Link id="link"
    to={{
      pathname: `/assembly/${selectedDistrict}`,
      state:{districtData}
    }}> 
    <h2>Assembly Constituencies</h2>
  </Link></CardContent></CardContent>
     
      

    </CardContent>
    
       */}
    </div>
  );
};

export default DistrictChart;
