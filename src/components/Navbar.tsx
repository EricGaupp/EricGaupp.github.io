import React from "react";

//MaterialUI Components
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar: React.FC = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} color="secondary">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
