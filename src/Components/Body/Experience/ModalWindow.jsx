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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            Techo | Teto
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Participación de un equipo de desarrollo ágil con sprints de una semana presentando a un Product Owner avances 
          sobre el desarrollo de los componentes de Administradores para seleccionar, y ordenar candidatos. <br />
          -Optimización de código. <br />
          -Implementación de nuevas funcionalidades como por ejemplo: <br />
          -Rechazar/Aceptar candidatos mediante un botón que actualice su estado en una Base de datos <br />
          -Agilizar la selección y comunicación con candidatos para el voluntariado. <br />
          -Envío de Mails automáticos y personalizados con una plantilla especifica.<br />
          -Capacidad de entrevistar a candidatos para una posición.<br />
          -Creación de nuevos trabajos.<br />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}