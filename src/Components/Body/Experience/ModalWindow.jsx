import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid aquamarine",
    boxShadow: 24,
    padding: 8,
  },
  buttonDesc: {
    padding: 4,
    color: "black",
    backgroundColor: "aquamarine",
    border: "none",
    width: "200px",
    height: "40px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  company: {
    fontWeight: "600 !important",
    margin: 4.5,
    textDecoration: "underline",
  },
  resposabilities: {
    margin: 4.5,
  },
}));

const BasicModal = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <button className={classes.buttonDesc} onClick={handleOpen}>
        Ver descipcion completa
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            className={classes.company}
          >
            {data.company}
          </Typography>
          {data.data.map((item) => (
            <Typography
              key={item}
              id="modal-modal-description"
              className={classes.resposabilities}
            >
              - {item.Resposabilities}
            </Typography>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
