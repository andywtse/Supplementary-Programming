//* React Hooks *//
import { useState } from "react"

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade, } from '@mui/material'
import AddCommentIcon from '@mui/icons-material/AddComment';

import AddReply from "./AddReply"


const ReplyButton = ({post, handleAddReply}) => {
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

return (
  <>
  <AddCommentIcon sx={{ color: "white" }} onClick={handleOpen}></AddCommentIcon>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <span className='form-header'>
              </span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <>
              <AddReply post={post} handleAddReply={handleAddReply}/>
              </>
            </Typography>
          </Box>
        </Fade>
      </Modal>
  </>
)

}

export default ReplyButton