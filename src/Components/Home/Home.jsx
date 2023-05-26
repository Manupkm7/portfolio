import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.only("md")]: {
      width: "90%",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.home}>
        <Header />
      </div>
      <div className={classes.home}>
        <Body />
      </div>
      <div className={classes.home}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
