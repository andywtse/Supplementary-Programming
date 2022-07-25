//* React Hooks *//
import { useState } from "react"

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from '@mui/material'

//* Components *//
import EditPost from "./EditPost"

const PostItem = ({ post, handleUpdatePost, handleDeletePost }) => {
  //* Modal State & Style *//
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
      <div 
        className="post-item | flex w-full justify-between items-start"
        onClick={handleOpen}
      >
        <div className="post-item-divider-container | flex items-center justify-center">
          <div className="post-item-vertical-line"></div>
        </div>
        <div className="post-item-description">
          <h2 className="post-item-title | text-sm" >
            {post.title} post.title
          </h2>
          <h1 className="post-item-post-name | text-base">
            {post.content} post.body
          </h1>
        </div>
      </div>
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
                Edit {post.title}
              </span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <EditPost handleUpdatePost={handleUpdatePost} post={post} />
              <button onClick={() => handleDeletePost(post._id)}>
                DELETE
              </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default PostItem