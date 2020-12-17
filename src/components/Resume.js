import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    fontFamily: "Open Sans, sans-serif",
    background: "black",
    color:"white",
   
  },
  GridflexContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContaint:"cenetr",
    marginLeft:"3rem",
    marginRight:"2rem",
   
  },
  summaryclass:{
    textAlign:"left",
    marginRight:"2rem",
    marginLeft:"3rem",
  },
  h5text:{
    fontSize:"16px",
    background:"#e4edf9", 
    padding:"5px 15px", 
    display:"inline-block",
    fontWeight:600,
    marginBottom:"10px",
    color:"black",
  }

 
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
         <Grid container justify="center">                 
             <Grid style={{color:"white",fontSize:"20px"}}><h1>My Resume</h1></Grid>  

              <Grid className={classes.summaryclass}>
                <h2 style={{color:"#E52B50"}}>Career Summary</h2>
                <Typography>
                I am dedicated full-stack developer and designer with one year of experience in web design. My primary focus is on building Front-End Web Applications,
                hybrid, and Native Mobile Applications. My background in graphic design and web development allows me to fuse both the art and
                technology world together in perfect harmony making me a valuable asset for any team.
                </Typography>
              </Grid>
    
            <Grid item xs={12} className={classes.GridflexContainer}>                             
                                      
                         <Grid sm={6} style={{marginRight:"1rem"}}>
                                        
                            <h2 style={{color:"#E52B50"}}>Education</h2>
                                <Grid class="resume-item">
                                  <h3>Mobile Application Design &amp; Development</h3>
                                  <Typography><em>Algonquin college, Ottawa,ON,Canada</em></Typography>
                                  <h5 className={classes.h5text}>2018 - 2020</h5><br/>
                                  <h4 className={classes.h5text}>3.53/4</h4>
                                 
                                  <Typography>Learn user interface (UI) design, user experience(UX) design, responsive web design,full-stack web development, 
                                    hybrid mobile application development, native mobile application development, entrepreneurial business skills</Typography>
                                </Grid>
                                <Grid class="resume-item">
                                  <h3>Bachelor In Computer Application &amp; Information Technology</h3>
                                  <Typography><em>HNGU University,Patan,Gujarat,India</em></Typography>
                                  <h5 className={classes.h5text}>2014 - 2017</h5><br/>
                                  <h4 className={classes.h5text}>7.2/9</h4>
                                  
                                  <Typography>Study of computers, networks, computer languages, and databases within an organization to solve real problems. The major in applications programming, networking, systems administration, and internet development.</Typography>
                                </Grid>
                            <h2 style={{color:"#E52B50"}}>Volunteers Activities</h2>
                                <Grid class="resume-item">
                                      <h3>Help-desk Specialist</h3>
                                      <Typography><em>Algonquin College,Ottawa,ON,Canada</em></Typography>
                                      <h5 className={classes.h5text}>2019 - 2020</h5>
                                     
                                      <li>I helped as a volunteer for new students’ orientation event at Algonquin college</li>
                                      <li>Helped new students for their basic necessity around the campus and gave them online/off-line 24*7 support</li>
                                      <li>Actively supported special need students.Also, helped them to understand the college’s different streams. 
                                              </li>
                                    </Grid>
                                    <Grid class="resume-item">
                                          <h3>Social-Service</h3>
                                          <Typography><em>Vedic Sanskruti,Ottawa,ON,Canada</em></Typography>
                                          <h5 className={classes.h5text}>2018 - Current</h5>
                                         
                                          <li>Promote & Support Educational activities, Indian Heritage & Culture</li>
                                          <li>Promoting/ Supporting better Health and well-being, Yoga and Meditation activities</li>
                                          <li>Welcoming and help in integrating new Immigrants or International Students to the new region</li>
                                      </Grid>
                              
                              <h2 style={{color:"#E52B50"}}>Interests</h2>
                                    <Grid class="resume-item">
                                      <Typography>Love to Create UI for Web and Mobile</Typography>
                                      <Typography>Enjoy to create Logo for different Brand</Typography>
                                      <Typography>like to read motivational book and success people biography</Typography>
                                      <Typography>like to watch youtube videos about technologies</Typography>
                                      <Typography> love to do yoga</Typography>
                                      <Typography>Cooking</Typography>
                                    </Grid>
                                                   
                       </Grid>
                     <Grid sm={6}>
                        <h2 style={{color:"#E52B50"}}>Professional Experience</h2>
                          <div class="resume-item">
                            <h3>Full Stack Dveloper</h3>
                            <Typography><em>Algonquin College, Ottawa,ON,Canada</em></Typography>
                            <h5 className={classes.h5text}>Jan 2020 - April 2020</h5>
                          
                            <ul>
                              <li>Collaborated with a team of six developers to developed the Volunteers App for Experify Health Hospital</li>
                              <li>That app was specially created for volunteers for handling online events and activities to do online volunteering for residents’ homes and hospitals</li>
                              <li>In this app, we did user research and prepared UI and UX design. For the front end, we used React.js and for backed, we have used Node.js and Heroku server for deployed the app</li>
                              <li>Utilized technologies like GitHub, Trello, and Slack for collaborating with team members allowing efficient code and project management</li>
                            </ul>
                          </div>
                          <div class="resume-item">
                            <h3>Web Developer</h3>
                            <Typography><em>Outright Software,Gujarat,India</em></Typography>
                            <h5 className={classes.h5text}>August 2017 - May 2018</h5>
                           
                            <ul>
                              <li>Writing well designed, testable, efficient code by using best software development practices.</li>
                              <li>Creating website layout/user interfaces by using standard HTML/CSS practices.</li>
                              <li>Integrating data from various back-end services and databases</li>
                              <li>Create and maintain software documentation</li>
                              <li>Coordinating in a team to deliver friendly and efficient service for pleasant dining experience for all guests</li>
                            </ul>
                          </div>
                          <div class="resume-item">
                            <h3>Food Retail Supervisor</h3>
                            <Typography><em>Subway,Ottawa,ON,Canada</em></Typography>
                            <h5 className={classes.h5text}>Nov 2018 - Nov 2020</h5>
                            <ul>
                              <li>Supervises employees engaged in serving food</li>
                              <li>maintaining the cleanliness of food service areas and equipment</li>
                              <li>Trains workers in performance of duties.</li>
                              <li>Assigns and coordinates the work of employees to promote the efficiency of operations</li>
                              <li>Inspects kitchen and dining areas and kitchen utensils and equipment to ensure sanitary standards are met</li>
                            </ul>
                          </div>
                          <h2 style={{color:"#E52B50"}}>languages</h2>
                          <Grid class="resume-item">
                          <Typography>English</Typography>
                          <Typography>Hindi</Typography>
                          <Typography>Gujarati</Typography>
                          </Grid>
                    </Grid>         
              </Grid>
        </Grid>
       
    </Box>
  );
};

export default Resume;
