import * as postService from "../../services/postsService";

//* React Hooks *//
import { useState, useEffect } from "react"

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from '@mui/material'

//* Components *//
import EditPost from "./EditPost"
import ReplyButton from "./ReplyButton"
import ReplyItem from "./ReplyItem"

const PostItem = ({ post, handleUpdatePost, handleDeletePost, user }) => {

  const [replies, setReplies] = useState([])

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

  //* useEffect *//
  useEffect(() => {
    const fetchAllPosts = async () => {
      const replyData = await postService.getReplies(post._id);
      setReplies(replyData);
    };
    fetchAllPosts();
  }, [post]);

  const handleAddReply = async (newReplyData, id) => {
    const newReply = await postService.createReply(newReplyData, id);
    setReplies([...replies, newReply]);
    handleClose()
  };

  return (
    <>
      {user ?
        <div className="posts-container" id="scrollbar">
          <div
          >
            <header className="post-title" onClick={handleOpen}>
              {post.title}
            </header>
            <content className="post-content">
              {post.content}
              <button className="reply-button"><ReplyButton post={post} handleAddReply={handleAddReply} /></button>
            </content>
          </div>
          <content className="post-replies">
            <>
              {replies.map(reply => (
                <ReplyItem reply={reply} />
              ))
              }
            </>
          </content>
          
        </div>
        :
        <div className="posts-container" id="scrollbar">
          <div
          >
            <header className="post-title">
              {post.title}
            </header>
            <content className="post-content">
              {post.content}
            </content>
          </div>
          <content className="post-replies">
            <>
              {replies.map(reply => (
                <ReplyItem reply={reply} />
              ))
              }
            </>
          </content>
        </div>
      }
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
              <span>
                Edit Post
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