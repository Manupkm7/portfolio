import React, { useState } from 'react'
import { Box, Typography, Button, Modal } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: 'white',
      border: '2px solid aquamarine',
      boxShadow: 24,
      padding: theme.spacing(2),
    },
    buttonDesc: {
      padding: theme.spacing(1),
      color: 'black',
      backgroundColor: 'aquamarine',
      "&:hover": {
        color: 'black',
        backgroundColor: 'aquamarine'
      },
    },
    company: {
      fontWeight: 600,
      margin: theme.spacing(1.5),
      textDecoration: "underline",
    },
    resposabilities: {
      margin: theme.spacing(1.5),
    },
}))

const BasicModal = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.buttonDesc} onClick={handleOpen}>Ver descipcion completa</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" className={classes.company}>
            {data.company}
          </Typography>
          {data.data.map((item)=>(
          <Typography key={item} id="modal-modal-description" className={classes.resposabilities}>
            {item.Resposabilities}
          </Typography>
          ))}

        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;