// import React from "react";
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { projects } from "./components/projectData";
// import projectDetails from "./components/projectDetails";




import "./App.css";
  
  export default class App extends Component {
    
 
    constructor(props) {
      super(props);
  
      this.state = {
        projects:projects,
        projectscopy:[],
        // projectDetails:projectDetails,
        // projectDetailscopy:[],
        
      };
    }
    
//   handalProjectDetail = (e) => {
   
//     let projectDetailscopy;

//     if(e.target.name === this.state.projects.name ){

//       projectDetailscopy = this.projectDetails.name
      
      
//     }
//   else{
//     console.log("something worng")
//   }
//   this.setState({
//     projectDetailscopy:projectDetailscopy
//   }) 

// }


    handalbtns=(e)=>{

      e.preventDefault();
      let projectscopy;
      
      if(e.target.value === "All"){
        projectscopy = this.state.projects;
    
    
      }else{
        projectscopy =this.state.projects.filter(item=>item.cat === e.target.value)
      }
      this.setState({
        projectscopy:projectscopy
      })
    
    }

    render() {
     
      return (
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio">
                <Portfolio projects={this.state.projectscopy} handalbtns={this.handalbtns} />
            </Route>
            <Route exact path="/Skills" component={Skills}/>
            <Route exact path="/contact" component={Contact} />
          
          </Switch>
        </React.Fragment>
      );

    }
  }
  