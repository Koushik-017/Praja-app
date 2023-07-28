import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import CloseIcon from '@material-ui/icons/Close';
import Slide from "@material-ui/core/Slide";
import DistrictChart from "./DistrictChart";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    backgroundColor: "#509609",
  },

  container: {
    margin: " 0 auto 0 0 ",
    padding: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MapDialog1 = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={props.show}
      style={{ backgroundColor: "black !important" }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link
            id="link"
            to={{
              pathname: `/`,
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <HomeIcon style={{ color: "#511a8b" }} />
            <h2 style={{ marginRight: "20px" }}>Home</h2>
          </Link>

          <Typography
            variant="h4"
            style={{
              marginLeft: "2px",
              flex: 1,
              fontSize: "20px",
              fontWeight: "700",
              color: "#511a8b",
              marginRight: "20px",
            }}
          >
            {props.DistrictName}
          </Typography>
        </Toolbar>
      </AppBar>

      <CssBaseline />

      <div style={{ height: "2000px" }}>
        <Container maxWidth={false} className={classes.container}>
          <DistrictChart selectedDistrict={props.DistrictName} />
        </Container>
      </div>
    </Dialog>
  );
};

export default MapDialog1;
