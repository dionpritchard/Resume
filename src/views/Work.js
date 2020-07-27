import React from 'react';

//============[ Theme / CSS ]============
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//============[ React Components ]============
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import SkillIcon from '../Components/SkillIcon.js';

//============[ Icons ]============
import unitec_logo from '../images/workplaces/unitec_logo.png';
import concentrix_logo from '../images/workplaces/concentrix_logo.png';
import logo_html from '../images/skills/logos/html5.png';
import logo_css from '../images/skills/logos/css.png';
import logo_js from '../images/skills/logos/js.png';
import logo_github from '../images/skills/logos/github.png';
import logo_jquery from '../images/skills/logos/jquery.png';
import logo_bootstrap from '../images/skills/logos/bootstrap.png';
import logo_java from '../images/skills/logos/java.png';
import logo_python from '../images/skills/logos/python.png';
import logo_sqlite from '../images/skills/logos/sqlite.png';
import logo_ubuntu from '../images/skills/logos/ubuntu.png';
import logo_processing from '../images/skills/logos/processing.png';
import logo_word from '../images/skills/logos/word.png';
import logo_powerpoint from '../images/skills/logos/powerpoint.png';
import logo_excel from '../images/skills/logos/excel.png';
import logo_osx from '../images/skills/logos/osx.png';
import logo_ios from '../images/skills/logos/ios.png';






const courseStyling = makeStyles((theme) => ({
  courseName: {
     color:'#151515',
     fontFamily:'Roboto Condensed',
     fontSize:20,
  },
  courseCode: {
    color:'#757575',
    fontFamily:'Roboto Condensed',
    fontSize:18,
  },
  courseContainer: {
     margin:'0px 0px 48px 0px',
  },
  courseContainerHeader: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'baseline',
    marginBottom:8,
    borderBottom:'1px solid #d7d6d6',
  },
  skillsContainer: {
    display:'flex',
    justifyContent:'flex-start',
    flexWrap:'wrap',
    textAlign: 'center',
  },
  courseDescription: {
    fontFamily:'Roboto Condensed',
    textAlign:'justify',
    fontSize:16,
    marginBottom:16,
  },
}))
const workStyling = makeStyles((theme) => ({
  work_logo: {
    borderRadius: '100%',
    width: 64,
    height: 64,
  },
  workPlace: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    color: '#202020',
    letterSpacing: '-0.2px',
    textAlign: 'left',
    paddingTop: '4px',
  },
  workTitle: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    color: '#151515',
    fontWeight: 'bold',
    letterSpacing: '0.2px',
    padding: '4px 0px 8px 0px',
  },
  workYear: {
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    color: '#757575',
    letterSpacing: '0.2px',
    alignSelf: 'flex-end',
    marginRight: 0,
  },
  workContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  workAccordian: {
    padding:'8px 0px',
    boxShadow:'0px 2px 6px #e0e0e0',

  },
  workAccordianSummary: {
    margin: '0px 8px',
    [theme.breakpoints.only('sm')]: {
      margin: '0px 16px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0px 24px',
    }
  },
  workAccordianDetails: {
    display:'flex',
    flexWrap:'wrap',
    margin: '0px 8px',
    [theme.breakpoints.only('sm')]: {
      margin: '0px 32px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0px 48px',
    },
  },
  workDataContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 16,
    [theme.breakpoints.up('md')]: {
      marginLeft: 32,
    },

  },
  workDescription: {
    margin:'0px 0px 16px 0px',
    textAlign:'justify',
    fontFamily:'Roboto Condensed',

  },

}))
const phoneStyling = makeStyles({
  root: {
    marginTop: 8,
    color: 'black',
  },

  card: {
    backgroundColor: 'white',

    padding: 16,
    justifyContent: 'space-evenly',
  },

  gridItem: {
    marginBottom: 16,
  },
  yearContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#8a8a8a',
    alignSelf: 'center',
    borderRadius: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  yearText: {
    fontFamily: 'Bauhaus',
    color: '#d9d9d9',
    textShadow: '0px 1px #49494a',

  },

});

function PhoneWork(props) {
  const classes = phoneStyling()
  const workClasses = workStyling()
  const courseClasses = courseStyling()

	return (
		<div className={classes.root}>

      <Grid container className={classes.card}>

        <Grid item xs={12} sm={8} md={7} className={classes.gridItem} >
            <Accordion className={workClasses.workAccordian}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:'#d9d9d9'}} />}
                aria-controls="unitec-content"
                id="workplace-unitec-header"
                className={workClasses.workAccordianSummary}
              >
                <div className={workClasses.workContainer}>
                  <img src={unitec_logo} className={workClasses.work_logo} />
                  <div className={workClasses.workDataContainer}>
                    <span className={workClasses.workPlace}>Unitec Institute of Technology</span>
                    <span className={workClasses.workTitle}>Lecturer</span>
                    <span className={workClasses.workYear}>2016-18</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className={workClasses.workAccordianDetails}>
                <Typography className={workClasses.workDescription}>Entered the Lecturer role in March 2016, teaching beginner to intermediate students computing skills, such as web dev, programming, databases, and game development.</Typography>
                <Typography className={workClasses.workDescription}>Responsibilities included creating lesson plans, worksheets, powerpoint presentations, assignments, tests, exams, marking/grading</Typography>
                <div className={courseClasses.skillsContainer} style={{flexGrow:1,marginBottom:32,}}>
                  <SkillIcon color='#295697' img={logo_word} text='Word' />
                  <SkillIcon color='#D14625' img={logo_powerpoint} text='Powerpoint' />
                  <SkillIcon color='#1F7246' img={logo_excel} text='Excel' />
                </div>
                <Typography style={{flexGrow:1,margin:'0px 0px 32px 0px',textAlign:'center',fontFamily:'Roboto Condensed',marginBottom:16,fontStyle:'italic'}}>Courses delivered and topics covered may be seen below.</Typography>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Web Project</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Monitoring and advising beginner students’ group projects over an 8 week period as they develop a front-end website using skills they acquired in Web Foundations </Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#E65027' img={logo_html} text='Html' />
                    <SkillIcon color='#1572B6' img={logo_css} text='Css' />
                    <SkillIcon color='#E5A228' img={logo_js} text='JavaScript' />
                    <SkillIcon color='#333' img={logo_github} text='GitHub' />
                  </div>
                </div>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Web Foundations</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Teaching beginner students the fundamental web development languages, design practices such as wireframes, mockups, including version control.</Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#E65027' img={logo_html} text='Html' />
                    <SkillIcon color='#1572B6' img={logo_css} text='Css' />
                    <SkillIcon color='#E5A228' img={logo_js} text='JavaScript' />
                    <SkillIcon color='#333' img={logo_github} text='GitHub' />
                  </div>
                </div>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Internet & Web Design</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Teaching intermediate students modern web frameworks & technologies. Guiding students through implementing their own portfolio pages featuring CSS3 animations, and web-based games using HTML5 canvas.</Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#E65027' img={logo_html} text='Html' />
                    <SkillIcon color='#1572B6' img={logo_css} text='Css' />
                    <SkillIcon color='#E5A228' img={logo_js} text='JavaScript' />
                    <SkillIcon color='#193556' img={logo_jquery} text='jQuery' />
                    <SkillIcon color='#563E7C' img={logo_bootstrap} text='Bootstrap' />
                  </div>
                </div>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Programming Principles & Practice</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Introduces students to Object Oriented Programming (OOP) practices, teaching intermediate skills such as polymorphism, inheritance, and GUIs</Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#FD910B' img={logo_java} text='Java' />

                  </div>
                </div>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Programming Fundamentals</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Covers fundamental programming techniques, using Python to create simple CLI programs</Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#FFD041' img={logo_python} text='Python' />

                  </div>
                </div>

                <div className={courseClasses.courseContainer}>
                  <div className={courseClasses.courseContainerHeader}>
                    <Typography className={courseClasses.courseName}>Introduction to I.T.</Typography>
                  </div>
                  <Typography className={courseClasses.courseDescription}>Covers fundamental web dev technologies, databases, and unix operating systems</Typography>
                  <div className={courseClasses.skillsContainer}>
                    <SkillIcon color='#E65027' img={logo_html} text='Html' />
                    <SkillIcon color='#1572B6' img={logo_css} text='Css' />
                    <SkillIcon color='#E5A228' img={logo_js} text='JavaScript' />
                    <SkillIcon color='#0F80CC' img={logo_sqlite} text='SQLite' />
                    <SkillIcon color='#DD4714' img={logo_ubuntu} text='Ubuntu' />
                    <SkillIcon color='#010408' img={logo_processing} text='Processing' />

                  </div>
                </div>

              </AccordionDetails>
            </Accordion>
        </Grid>

        <Grid item xs={12} sm={8} md={7} className={classes.gridItem} >
          <Accordion className={workClasses.workAccordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:'#d9d9d9'}} />}
              aria-controls="concentrix-content"
              id="workplace-concentrix-header"
              className={workClasses.workAccordianSummary}
            >
              <div className={workClasses.workContainer}>
                <img src={concentrix_logo} className={workClasses.work_logo} />
                <div className={workClasses.workDataContainer}>
                  <span className={workClasses.workPlace}>Concentrix</span>
                  <span className={workClasses.workTitle}>Technical Advisor</span>
                  <span className={workClasses.workYear}>2015-16</span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails className={workClasses.workAccordianDetails}>
              <Typography className={workClasses.workDescription}>Providing hardware & software troubleshooting steps for a wide variety of Apple devices over the phone. Devices such as Macbooks, iMacs, iPads, iPhones, iPods, & Apple Watches.</Typography>
              <div className={courseClasses.skillsContainer} style={{flexGrow:1,marginBottom:32,}}>
                <SkillIcon color='#757575' img={logo_osx} text='Mac OS' />
                <SkillIcon color='#757575' img={logo_ios} text='iOS' />
              </div>

            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
		</div>
	);
}

function Work () {
	const classes = phoneStyling()

  const theme = useTheme()
  const usingPhone = useMediaQuery(theme.breakpoints.down('xs'));
  const usingTablet = useMediaQuery(theme.breakpoints.only('sm'));

  if (usingPhone == true)
    return <PhoneWork />
  else if (usingTablet == true)
    return <PhoneWork />
  else
    return <PhoneWork />


}

export default Work;
