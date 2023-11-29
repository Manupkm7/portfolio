import { SocialDetail } from "../../Data/Index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  socialContact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIconDiv: {
    padding: "6px",
    cursor: "pointer",
    margin: "6px",
  },
  socialIcon: {
    height: "48px",
  },
}));

const SocialContact = () => {
  const data = SocialDetail;
  const classes = useStyles();
  return (
    <div className={classes.socialContact}>
      {data.map((item) => {
        return (
          <a key={item.icon} href={item.link} rel="noreferrer" target="_blank">
            <div className={classes.socialIconDiv}>
              <img
                src={item.icon}
                alt="social media"
                className={classes.socialIcon}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
