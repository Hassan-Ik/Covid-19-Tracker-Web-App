import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: `7rem`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links:{
      color:`white`,
      marginLeft: `1rem`,
      textDecoration: `none`,
  },
  a:{
    textDecoration:`none`,
  }
  ,
  nav:{
      backgroundColor:`goldenrod`,
  }
}));

  
const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.nav}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Covid Tracker
            </Typography>
            <a href = "../What-is-Covid/" className={classes.a}><Typography variant="p" className={classes.links}>
            What is Covid
            </Typography></a>
            <Typography variant="p" className={classes.links}>
              Blog
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
export default Header