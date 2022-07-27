import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Modal, Box, Typography, Backdrop, Fade } from '@mui/material'

import { useState } from "react"


const CardItem = ({card, handleDeleteCard, handleUpdateCard}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    p: 4,
    color: 'white',
  }

  return(
    <>  
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {card.header}
          </Typography>
          <Typography sx={{ mt: 1.5 }}>
            {card.title}
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 12}}>
            {card.description}
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 12 }} variant="body2" color="text.secondary">
            {card.url}
          </Typography>
          <CardActions>
            <Button onClick={() => handleDeleteCard(card._id)}>
              Delete
            </Button>
            <Button onClick={handleOpen}>
                Edit
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"span"}
            >
              <EditCardModal
              card={card}
              handleUpdateLearn={handleUpdateCard}
              handleClose={handleClose}
              />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default CardItem


