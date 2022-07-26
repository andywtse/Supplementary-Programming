import * as postService from "../../services/postsService";

//* React Hooks *//
import { useState } from "react"

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from '@mui/material'

//* Components *//
import EditPost from "./EditPost"
import ReplyButton from "./ReplyButton"
import ReplyItem from "./ReplyItem"

const PostItem = ({post, handleUpdatePost, handleDeletePost }) => {

  const [replies,setReplies] = useState([])

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


  const handleAddReply = async (newReplyData, id) => {
    console.log(newReplyData)
    const newReply = await postService.createReply(newReplyData, id);
    setReplies([...replies, newReply]);
    handleClose()
  };
  
  return (
    <>
      <div 
        className="post-item | flex w-full justify-between items-start"
        >
        <div className="post-item-divider-container | flex items-center justify-center">
          <div className="post-item-vertical-line"></div>
        </div>
        <div className="post-item-description"
        onClick={handleOpen}
        >
          <h1 className="post-item-title | text-lg" >
            TITLE: {post.title}
          </h1>
          <h2 className="post-item-post-name | text-sm">
            CONTENT: {post.content}
          </h2>
        </div>
          <h2 className="post-item-post-name | text-sm">
            REPLIES:
            <>
              {post.replies.map(reply => (
                <ReplyItem reply={reply}/>
                ))
              }
          </> 
          </h2>
        <button><ReplyButton post={post} handleAddReply={handleAddReply}/></button>
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
                {post.title}
              </span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <EditPost handleUpdatePost={handleUpdatePost} post={post} />
              <button onClick={() => handleDeletePost(post._id)}>
                DELETE
              </button>
              <div className=" replies-container">
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  // <AddReply handleAddReply={handleAddReply} post={post} />
  )
}

export default PostItem