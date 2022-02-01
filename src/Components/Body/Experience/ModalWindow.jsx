import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Experience.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid aquamarine',
  boxShadow: 24,
  p: 4,
};
const button ={
  p: 1.3,
  color: 'black',
  bgcolor: 'aquamarine'
}

export default function BasicModal({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data)
  return (
    <div>
      <Button  sx={button} onClick={handleOpen}>Ver descipcion completa</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.company}
          </Typography>
          {data.data.map((item)=>(
          <Typography key={item} id="modal-modal-description" sx={{ mt: 2 }}>
            {item.Resposabilities}
          </Typography>
          ))}

        </Box>
      </Modal>
    </div>
  );
}