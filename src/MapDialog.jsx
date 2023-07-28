import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import CloseIcon from '@material-ui/icons/Close';
import Slide from "@material-ui/core/Slide";
import ReactTooltip from "react-tooltip";
import MapDialog1 from "./MapDialog1";
import StateMap from "./StateMap";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    backgroundColor: "#509609",
  },

  // title: {

  //   marginLeft: theme.spacing(2),

  //   flex: 1,

  //   textAlign: 'right'

  // },

  container: {
    margin: " 0 auto 0 0",
    padding: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MapDialog = (props) => {
  const classes = useStyles();

  const [contentD, setContentD] = useState("");

  const [DTName, setDTName] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={props.show}
      onClose={props.closeModal}
      style={{ backgroundColor: "black !important" }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar height={30}>
          <HomeIcon  style={{ color: "#511a8b", }}/>
          <Link
            id="link"
            to={{
              pathname: `/`,
            }}
          >
            <h2 style={{ marginRight: "20px" }}>HOME</h2>
          </Link>

          <Typography variant="h4"
          style={{
            marginLeft: "2px",
            flex: 1,
            fontSize: "20px",
            fontWeight: "700",
            color: "#511a8b",
            marginRight: "20px",
          }}
          
          >{props.StateName}</Typography>

          {/* {!DTName && (

            <Typography variant="h6" className={classes.title}>

              No district selected

            </Typography>

          )}

          {DTName && (

            <Typography variant="h6" className={classes.title}>

              Selected District: {DTName}

            </Typography>

          )}  */}
        </Toolbar>
      </AppBar>

      <CssBaseline />

      <MapDialog1 show={show} DistrictName={DTName} />

      {/* <div style={{ height: '2000px'}}> */}

      <Container maxWidth={false} className={classes.container}>
        <StateMap
          setTooltipContent={setContentD}
          setDistrictName={setDTName}
          selectedState={props.StateName}
          setShowDistrict={setShow}
        />
        <ReactTooltip>{contentD}</ReactTooltip>
      </Container>

      {/* </div> */}
    </Dialog>
  );
};

export default MapDialog;
