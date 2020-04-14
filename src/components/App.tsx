import React from "react";

//MaterialUI Components
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  useScrollTrigger,
  Fade,
} from "@material-ui/core";

//Components
import Navbar from "./Navbar";

const useStyles = makeStyles({
  fullHeight: {
    height: "100vh",
  },
});

const sections = ["splash", "about", "projects", "skills", "contact"];

const App: React.FC = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          {sections.map((item) => (
            <Grid
              item
              xs={12}
              classes={{ root: classes.fullHeight }}
              container
              justify="center"
              alignItems="center"
            >
              <Typography variant="h3" align="center">
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Fade in={trigger}>
        <Navbar />
      </Fade>
    </>
  );
};

export default App;
