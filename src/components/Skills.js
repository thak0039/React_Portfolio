import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./skills.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";



const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
            fontSize:"12px",
			opacity: 1,
            width: `${done}%`,
            
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}



const Skills = () => {

const classes = useStyles();
  
    return (
        <Box component="div" className={classes.mainContainer}>
         <Grid container>
                <Grid container justify="center">
                <h2 className={classes.skillTitle}>My Skills</h2>
                </Grid >

                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                        <Grid sm={3}>   
                         <h3>HTML5 / CSS3</h3>
                         </Grid>
                       <Grid sm={3}>   
                         <Progress done="90"/>
                        </Grid> 
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                       <Grid sm={3}>   
                        <h3 >Bootstrap</h3>
                        </Grid>
                        <Grid sm={3}>   
                        <Progress done="80"/>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>JavaScript (ES6)</h3>
                     </Grid>
                        <Grid sm={3}>   
                        <Progress done="85"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>ReactJS</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="75"/>
                      </Grid>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>React Native</h3>
                         </Grid>
                         <Grid sm={3}>   
                        <Progress done="65"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>NodeJS</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="60"/>
                      </Grid>
                      </div>
                    </Grid>
               
                
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>Git</h3>
                         </Grid>
                         <Grid sm={3}>   
                        <Progress done="95"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>Firebase</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="80"/>
                      </Grid>
                      </div>
                    </Grid>
            
               
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>MongoDB</h3>
                         </Grid>
                         <Grid sm={3}>   
                        <Progress done="90"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>MySQL</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="80"/>
                      </Grid>
                      </div>
                    </Grid>
             
                
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>UI Developing</h3>
                         </Grid>
                         <Grid sm={3}>   
                        <Progress done="90"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>UX Developing</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="90"/>
                      </Grid>
                      </div>
                    </Grid>
          
                
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>illustrator</h3>
                         </Grid>
                        <Grid sm={3}>   
                        <Progress done="95"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>Photoshop</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="95"/>
                      </Grid>
                      </div>
                    </Grid>
                
                
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>Adobe XD</h3>
                         </Grid>
                        <Grid sm={3}>   
                        <Progress done="90"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>Sketch</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="75"/>
                      </Grid>
                      </div>
                    </Grid>
               
              
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>Java</h3>
                         </Grid>
                        <Grid sm={3}>   
                        <Progress done="55"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>C#</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="60"/>
                      </Grid>
                      </div>
                    </Grid>
              
       
                    <Grid item xs={12} sm={6}>   
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                            <h3>Xamrin</h3>
                     </Grid>
                            <Grid sm={3}>   
                            <Progress done="55"/>
                            </Grid>
                        </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>Restfull API</h3>
                      </Grid>
                      <Grid sm={3}>   
                      <Progress done="60"/>
                      </Grid>
                      </div>
                    </Grid>
            
                    <Grid item xs={12} sm={6}>   
                      <div className={classes.filledBarOnLine}>
                      <Grid sm={3}>   
                         <h3>NPM</h3>
                         </Grid>
                         <Grid sm={3}>   
                        <Progress done="55"/>
                        </Grid>
                      </div>              
                    </Grid>
                    <Grid item xs={12} sm={6}Col>
                    <div className={classes.filledBarOnLine}>
                    <Grid sm={3}>   
                      <h3>Ajax</h3>
                    </Grid>
                      <Grid sm={3}>   
                      <Progress done="60"/>
                      </Grid>
                      </div>
                    </Grid>
                
            </Grid>             
     </Box>               
    );
  };
  export default Skills;
  

  const useStyles = makeStyles((theme) => ({
    skillTitle: {
      fontSize:"26px",
      textAlign:"center",
      color:"white",
    },
      mainContainer: {
        background: "black",
        height: "180vh",
        color:"white",
      },
    filledBarOnLine:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    ArangeText:{
        textAlign:"left",
    }
    
  }));