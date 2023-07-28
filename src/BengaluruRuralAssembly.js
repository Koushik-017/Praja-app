import React from "react";
import BengaluruRuraldata from'../src/topojsons/Districts/DistrictsData/Bengaluru Ruraldata.json';
import BoyIcon from '@mui/icons-material/Boy';
import Accordion from '@mui/material/Accordion';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import GirlIcon from '@mui/icons-material/Girl';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
 function AssemblyListBengaluruRural  (){

  const navigate = useNavigate()
  const submit = (id) => {
    navigate(`/population-graph/Belgaum/${id}`)
  }
  // navigate(`popuplation-graph?id=${index}`)

  // navigation.setParams({
  //   query: 'someText',
  // });
  let districtData;

  districtData = BengaluruRuraldata;

  const column1 = districtData.assembly_constituencies.slice(0, 15);
  // const column2 = districtData.assembly_constituencies.slice(5,);

  return (
   
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1}}>
      
      <HomeIcon style={{color:"white"}}/><Link
id="link"
to={{
 pathname: `/react-india-region-selector`,
 // state: { districtData },
}}
>
<h2>Home </h2>
</Link>
      <Avatar sx={{ bgcolor: "green" }}>BR</Avatar>
       <h1 style={{textAlign:'center',color:'white'}}>Assembly Constituencies of {districtData.name}</h1>
        {column1.map((assembly,index)=> (
         
          // <> <h3>{assembly.name}</h3>
          // <h4>MLA:{assembly.mla}<br />Population:{assembly.population}<br />Male Voters:{assembly.male_voters}<br />Female Voters:{assembly.female_voters}</h4></>
           
          
           <><Accordion sx={{ 
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
       
         
         </>
           
         











        ))}
      </div>
      {/* <div style={{ flex: 1}}>
      

     
      
        {column2.map((assembly,index)=> (
         
          // <> <h3>{assembly.name}</h3>
          // <h4>MLA:{assembly.mla}<br />Population:{assembly.population}<br />Male Voters:{assembly.male_voters}<br />Female Voters:{assembly.female_voters}</h4></>
           
          
           <><Accordion sx={{ 
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
       
         
         </>
           
         











        ))}
      </div> */}
    </div>
  );
};

export default AssemblyListBengaluruRural;