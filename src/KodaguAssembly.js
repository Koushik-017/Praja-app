import React from "react";
import Kodagudata from'./topojsons/Districts/DistrictsData/Kodagudata.json';
import BoyIcon from '@mui/icons-material/Boy';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import { Container } from "@material-ui/core";
import GirlIcon from '@mui/icons-material/Girl';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import { useNavigate } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
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
 function KodaguAssembly (){
  const classes = useStyles();
  const navigate = useNavigate()
  const submit = (id) => {
    navigate(`/population-graph/Kodagu/${id}`)
  }
  // navigate(`popuplation-graph?id=${index}`)

  // navigation.setParams({
  //   query: 'someText',
  // });
  let districtData;

  districtData = Kodagudata ;

  const column1 = districtData.assembly_constituencies.slice(0, 20);
//   const column2 = districtData.assembly_constituencies.slice(10,);

  return (
   
    <div style={{ backgroundColor:"white"}}>
      <div style={{ flex: 1}}>
      <Toolbar style={{ display: "flex", alignItems: "center" }}>
      <HomeIcon style={{ color: "#511a8b", }} />

<Link
  id="link"
  to={{
    pathname: `/`,
  }}
>
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
 
</Typography>
      <Avatar sx={{ bgcolor: "green" }}>KD</Avatar>
      </Toolbar>
       <h1 style={{textAlign:'center',color:'black'}}>Assembly Constituencies of {districtData.name}</h1>
        {column1.map((assembly,index)=> (
         
          // <> <h3>{assembly.name}</h3>
          // <h4>MLA:{assembly.mla}<br />Population:{assembly.population}<br />Male Voters:{assembly.male_voters}<br />Female Voters:{assembly.female_voters}</h4></>
           
          
          <Container maxWidth={false} className={classes.container}>
           <Accordion sx={{ 
            backgroundColor: 'lightgreen'
            }}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <Typography variant="h5">{assembly.name}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography variant="h5">
             MLA:{assembly.mla}
             </Typography>
             <Typography variant="h5">
             <GroupIcon/>:{assembly.population}
             </Typography>
             
             <Button type='Submit' onClick={()=>{submit(index)}} variant="outlined" color="success">Click Here</Button>


             <Typography variant="h5">
            <BoyIcon/> :{assembly.male_voters}<br />
            <GirlIcon/>{assembly.female_voters}
             </Typography>
             <Typography variant="h5">
           Schools:{assembly.schools}<br />
           <SchoolRoundedIcon/>:{assembly.colleges}
             </Typography>
             <Typography variant="h5">
            <LocalHospitalIcon/> {assembly.Hospitals}<br />
           <TempleHinduIcon/> {assembly.Temples}
             </Typography>
             
           </AccordionDetails>
         </Accordion>
       
         </Container>
         
           
         






        ))}
      </div>

      {/* <div style={{ flex: 1}}>
      

     
      
        {column2.map((assembly,index)=> (
         
         
           
          
           <Accordion sx={{ 
            backgroundColor: 'lightgreen'
            }}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <Typography variant="h5">{assembly.name}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography variant="h5">
             MLA:{assembly.mla}
             </Typography>
             <Typography variant="h5">
             <GroupIcon/>:{assembly.population}
             </Typography>
             
             <Button type='Submit' onClick={()=>{submit(index)}}>Click Here</Button>


             <Typography variant="h5">
            <BoyIcon/> :{assembly.male_voters}<br />
            <GirlIcon/>{assembly.female_voters}
             </Typography>
             <Typography variant="h5">
           Schools:{assembly.schools}<br />
           <SchoolRoundedIcon/>:{assembly.colleges}
             </Typography>
             <Typography variant="h5">
            <LocalHospitalIcon/> {assembly.Hospitals}<br />
           <TempleHinduIcon/> {assembly.Temples}
             </Typography>
             
           </AccordionDetails>
         </Accordion>
       
         
         
           
         











        ))}
        
      </div> */}
    </div>
  );
};

export default KodaguAssembly ;