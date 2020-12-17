import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardProjects from "./CardProjects";

// import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#242325",
    height: "200vh",
  },

  subMenuGrid:{
    textAlign:"center",
    cursor:"pointer",
    padding:"1rem",
    background:"#3c3b3c",
    
  },
  subMenuBtns:{
    padding:"1rem",
    marginLeft:"1rem",
    // background:"#211f1d",
    background:"none",
    width:"20rem",
    color:"#DCDCDC",
    cursor:"pointer",
    border:"1px solid #DCDCDC",
    // boxShadow:"1px 0.5px #827e7b",
  }
}));



function Portfolio(props) {

  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>

        <Grid className={classes.subMenuGrid}>
                    <button value="All" className={classes.subMenuBtns} onClick={props.handalbtns}>All</button>
                    <button value="Mobile" className={classes.subMenuBtns}  onClick={props.handalbtns}>Mobile</button>
                    <button value="Web" className={classes.subMenuBtns}  onClick={props.handalbtns}>Web/Window</button>
                    <button value="UX" className={classes.subMenuBtns}  onClick={props.handalbtns}>UX/UI</button>
                  </Grid>
        <Grid container justify="center">
        {/* Projects */}
           {props.projects.map(projects => {
             return <CardProjects key={projects.id} projects={projects} />
                  
           })}d
      
      </Grid>
    </Box>
  );
};

export default Portfolio;
