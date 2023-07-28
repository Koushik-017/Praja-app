import React, { useState } from "react";

import ReactTooltip from "react-tooltip";

import IndiaMap from "./IndiaMap";

import MapDialog from "./MapDialog";

import { Container } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import "./india.css";

const AreaSelector = () => {
  const [content, setContent] = useState("");
  const [STName, setSTName] = useState("");
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <AppBar style={{ position: "fixed", backgroundColor: "skyblue" }}>
        {/* ,height:"90px" */}

        <Toolbar height={50}>
          <Typography variant="h4" className="style">
            PRAJA APP
          </Typography>
        </Toolbar>
      </AppBar>

      <CssBaseline />

      {/* <div style={{ height: "1000px" }}> */}

      <Container style={{ marginTop: "68px", marginLeft: "-180px" }}>
        <IndiaMap
          setTooltipContent={setContent}
          setStateName={setSTName}
          setShowDistrict={setShow}
        />

        <ReactTooltip>{content}</ReactTooltip>
      </Container>

      <MapDialog show={show} StateName={STName} />

      {/* </div> */}
    </React.Fragment>
  );
};

export default AreaSelector;
