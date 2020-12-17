import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ProjectDetails from "./projectDetails";


const useStyles = makeStyles((theme) => ({

    cardContainer: {

      maxWidth: 345,
      margin: "3rem auto",
      padding:"1rem",
      background:"#4c4c4d",
      color:"#DCDCDC",
      
    },
    
  }));

  


export default function CardProjects(props) {
    const classes = useStyles();
    

    const handalCard = (e) => {

        let projectDetailscopy = <ProjectDetails/>
        
        if(e.target.name === props.projects.name){
      
          return projectDetailscopy.name;
                
        }
        else{
        console.log("something worng")
        }  
      
      }
    
    return (
        
        <Grid item xs={12} sm={8} md={4}>
            <Card onClick={handalCard} className={classes.cardContainer}>

                 <CardActionArea>
                
                     
                    <CardMedia> 
                    <img  alt="project1" style={{ width: "100%",height:"250px"}} src={props.projects.image} />
                    </CardMedia>

                <CardContent>
                    <Typography variant="h5" gutterBottom>
                            {props.projects.name}
                    </Typography>
                      <Typography variant="body2" color="textSecondary">
                         {props.projects.description}
                       </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Live Demo
                </Button>
                </CardActions>
            </Card>
        </Grid>   
    )
}
