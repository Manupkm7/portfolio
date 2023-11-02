import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "12px",
    marginTop: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>Todos los derechos reservados 2023 © Manuel Espinoza🔥</p>
    </div>
  );
};

export default Footer;
