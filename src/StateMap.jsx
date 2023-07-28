import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// import pic from'./src/images/pic2.jpg';

import { Link } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";

import AccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Avatar from "@mui/material/Avatar";

import { Card, CardContent, CardActions } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";

import { Button } from "@mui/material";

import karnatakadata from "./topojsons/states/karnatakadata.json";

import andamannicobar from "./topojsons/states/andamannicobar.json";

import andhrapradesh from "./topojsons/states/andhrapradesh.json";

import arunachalpradesh from "./topojsons/states/arunachalpradesh.json";

import assam from "./topojsons/states/assam.json";

import bihar from "./topojsons/states/bihar.json";

import chhattisgarh from "./topojsons/states/chhattisgarh.json";

import delhi from "./topojsons/states/delhi.json";

import goa from "./topojsons/states/goa.json";

import "./App.css";

import gujarat from "./topojsons/states/gujarat.json";

import haryana from "./topojsons/states/haryana.json";

import himachalpradesh from "./topojsons/states/himachalpradesh.json";

import jammukashmir from "./topojsons/states/jammukashmir.json";

import jharkhand from "./topojsons/states/jharkhand.json";

import karnataka from "./topojsons/states/karnataka.json";

import kerala from "./topojsons/states/kerala.json";

import lakshadweep from "./topojsons/states/lakshadweep.json";

import madhyapradesh from "./topojsons/states/madhyapradesh.json";

import maharashtra from "./topojsons/states/maharashtra.json";

import manipur from "./topojsons/states/manipur.json";

import meghalaya from "./topojsons/states/meghalaya.json";

import mizoram from "./topojsons/states/mizoram.json";

import nagaland from "./topojsons/states/nagaland.json";

import odisha from "./topojsons/states/odisha.json";

import punjab from "./topojsons/states/punjab.json";

import rajasthan from "./topojsons/states/rajasthan.json";

import sikkim from "./topojsons/states/sikkim.json";

import tamilnadu from "./topojsons/states/tamilnadu.json";

import telangana from "./topojsons/states/telangana.json";

import tripura from "./topojsons/states/tripura.json";

import uttarakhand from "./topojsons/states/uttarakhand.json";

import uttarpradesh from "./topojsons/states/uttarpradesh.json";

import westbengal from "./topojsons/states/westbengal.json";

import "./style.css";

const StateMap = ({
  setTooltipContent,

  setDistrictName,

  selectedState,

  setShowDistrict,
}) => {
  let geoURL;

  let zoomMap = 1;

  let centerMap = [80, 22];

  let scaleMap = 400;

  if (selectedState === "Andaman & Nicobar Island") {
    geoURL = andamannicobar;

    scaleMap = 1000;

    centerMap = [93, 10];
  } else if (selectedState === "Andhra Pradesh") {
    geoURL = andhrapradesh;

    scaleMap = 800;

    centerMap = [80, 17];
  } else if (selectedState === "Arunachal Pradesh") {
    geoURL = arunachalpradesh;

    scaleMap = 1200;

    centerMap = [94.5, 28];
  } else if (selectedState === "Assam") {
    geoURL = assam;

    scaleMap = 1350;

    centerMap = [92.9, 26];
  } else if (selectedState === "Bihar") {
    geoURL = bihar;

    scaleMap = 1300;

    centerMap = [85.5, 26];
  } else if (selectedState === "Chhattisgarh") {
    geoURL = chhattisgarh;

    scaleMap = 1100;

    centerMap = [82, 21];
  } else if (selectedState === "NCT of Delhi") {
    geoURL = delhi;

    scaleMap = 11000;

    centerMap = [77.05, 28.6];
  } else if (selectedState === "Goa") {
    geoURL = goa;

    scaleMap = 6000;

    centerMap = [74, 15.25];
  } else if (selectedState === "Gujarat") {
    geoURL = gujarat;

    scaleMap = 1000;

    centerMap = [71.5, 22];
  } else if (selectedState === "Haryana") {
    geoURL = haryana;

    scaleMap = 1700;

    centerMap = [76, 29];
  } else if (selectedState === "Himachal Pradesh") {
    geoURL = himachalpradesh;

    scaleMap = 2000;

    centerMap = [77.4, 31.8];
  } else if (selectedState === "Jammu & Kashmir") {
    geoURL = jammukashmir;

    scaleMap = 1000;

    centerMap = [76.3, 35];
  } else if (selectedState === "Jharkhand") {
    geoURL = jharkhand;

    scaleMap = 1700;

    centerMap = [85.7, 23.6];
  } else if (selectedState === "Karnataka") {
    geoURL = karnataka;

    scaleMap = 1100;

    centerMap = [76.5, 15];
  } else if (selectedState === "Kerala") {
    geoURL = kerala;

    scaleMap = 1800;

    centerMap = [76, 10.5];
  } else if (selectedState === "Lakshadweep") {
    geoURL = lakshadweep;

    scaleMap = 2300;

    centerMap = [73, 11];
  } else if (selectedState === "Madhya Pradesh") {
    geoURL = madhyapradesh;

    scaleMap = 900;

    centerMap = [78.5, 24];
  } else if (selectedState === "Maharashtra") {
    geoURL = maharashtra;

    scaleMap = 1000;

    centerMap = [76.8, 19.3];
  } else if (selectedState === "Manipur") {
    geoURL = manipur;

    scaleMap = 3400;

    centerMap = [93.8, 24.7];
  } else if (selectedState === "Meghalaya") {
    geoURL = meghalaya;

    scaleMap = 2500;

    centerMap = [91.3, 25.4];
  } else if (selectedState === "Mizoram") {
    geoURL = mizoram;

    scaleMap = 2900;

    centerMap = [92.8, 23.25];
  } else if (selectedState === "Nagaland") {
    geoURL = nagaland;

    scaleMap = 4000;

    centerMap = [94.3, 26.1];
  } else if (selectedState === "Odisha") {
    geoURL = odisha;

    scaleMap = 1300;

    centerMap = [84.4, 20.25];
  } else if (selectedState === "Punjab") {
    geoURL = punjab;

    scaleMap = 2300;

    centerMap = [75.35, 31.1];
  } else if (selectedState === "Rajasthan") {
    geoURL = rajasthan;

    scaleMap = 900;

    centerMap = [74, 26.3];
  } else if (selectedState === "Sikkim") {
    geoURL = sikkim;

    scaleMap = 6000;

    centerMap = [88.45, 27.6];
  } else if (selectedState === "Tamil Nadu") {
    geoURL = tamilnadu;

    scaleMap = 1300;

    centerMap = [78.25, 10.8];
  } else if (selectedState === "Telangana") {
    geoURL = telangana;

    scaleMap = 1200;

    centerMap = [78, 17.9];
  } else if (selectedState === "Tripura") {
    geoURL = tripura;

    scaleMap = 4500;

    centerMap = [91.75, 23.75];
  } else if (selectedState === "Uttarakhand") {
    geoURL = uttarakhand;

    scaleMap = 2000;

    centerMap = [79.3, 30];
  } else if (selectedState === "Uttar Pradesh") {
    geoURL = uttarpradesh;

    scaleMap = 1000;

    centerMap = [80.8, 27];
  } else if (selectedState === "West Bengal") {
    geoURL = westbengal;

    scaleMap = 1200;

    centerMap = [87.7, 24.2];
  }

  const stateData = selectedState === "Karnataka" ? karnatakadata : {};

  const styles = {
    media: {
      height: 0,

      paddingTop: "56.25%", // 16:9,

      marginTop: "30",
    },
  };

  return (
    <div
      style={{ display: "flex", marginTop: "50px", backgroundColor: "#b8bfc4" }}
      className="parent"
    >
      

      {/* <Link
        id="link"
        to={{
          pathname: `/`,

          // state: { districtData },
        }}
      >
        <h2>BACK</h2>
      </Link> */}

      {/* backgroundImage:`url(${pic})` */}

      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={250}
        height={250}
        projectionConfig={{ scale: scaleMap }}
      >
        <ZoomableGroup zoom={zoomMap} center={[76, 13]}>
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  style={{
                    default: {
                      fill: "black",

                      outline: "none",
                    },

                    hover: {
                      fill: "white",

                      outline: "none",
                    },

                    // pressed: {

                    //   fill: "aqua",

                    //   outline: "none"

                    // }
                  }}
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { district } = geo.properties;

                    setDistrictName(`${district}`);

                    setTooltipContent(`${district}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    setShowDistrict(true);
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <div className="name">
        <h1>{selectedState}</h1>
      </div>

      <div style={{ marginRight: 20 }}>
        <Card
          sx={{
            minWidth: "1000",

            minHeight: "600",

            marginRight: 10,

            marginTop: 5,

            marginBottom: 25,
          }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image={require("./assets/textures/OIP.jfif")}
          />

          <CardContent>
            <Accordion
              sx={{
                backgroundColor: "lightgreen",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">{selectedState}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="h6">Capital:</Typography>

                <Typography> {stateData.capital}</Typography>

                <Typography variant="h6">Population:</Typography>

                <Typography> {stateData.population}</Typography>

                <Typography variant="h6">Chief Minister</Typography>

                <Typography>
                  {stateData.chief_minister}

                  <br />
                </Typography>

                <Typography variant="h6">Deputy Chief Minister:</Typography>

                <Typography>
                  {stateData.deputy_chief_minister} <br />
                </Typography>

                <Typography variant="h6">Assembly Constituencies:</Typography>

                <Typography>{stateData.assembly_constituencies}</Typography>

                <Typography variant="h6">
                  {" "}
                  Parliamentary Constituencies:
                </Typography>

                <Typography>
                  {stateData.parliamentary_constituencies}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </div>

      {/* <Card  className="container"   sx={{ minWidth: 150,minHeight:200,backgroundColor:'black' }} > */}

      {/* <CardContent className="card" >




   

        <CardContent className="card-inner">

        <CardContent className="front" >

        <Typography fontSize={40}> {selectedState}</Typography>

        </CardContent>

        <CardContent className="back">

        <Typography sx={{ fontSize: 20 }} color="text.secondary">Capital: {stateData.capital}</Typography>

        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>

        Population: {stateData.population}

        </Typography>

          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>

          Chief Minister: {stateData.chief_minister}

        </Typography>

           

        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>

        Deputy Chief Minister: {stateData.deputy_chief_minister}

        </Typography>

        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>

        Assembly Constituencies: {stateData.assembly_constituencies}

        </Typography>

        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>

        Parliamentary Constituencies: {stateData.parliamentary_constituencies}

        </Typography>

       </CardContent></CardContent>

       

      </CardContent> */}

      {/* </Card> */}

      {/* <Container maxWidth={false} style={{textAlign:'center',marginTop:'250px'}} >

        <h2>Capital: {stateData.capital}</h2>

        <h2>Population: {stateData.population}</h2>

       

        <h2>Chief Minister: {stateData.chief_minister}</h2>

        <h2>Deputy Chief Minister: {stateData.deputy_chief_minister}</h2>

        <h2>Assembly Constituencies: {stateData.assembly_constituencies}</h2>

        <h2>Parliamentary Constituencies: {stateData.parliamentary_constituencies}</h2>

       

        </Container> */}
    </div>
  );
};

export default StateMap;
