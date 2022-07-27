//* File Imports *//
import "./Posts.css";
import * as postService from "../../services/postsService";

//* React Hooks *//
import { useState, useEffect } from "react";

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//* Components *//
import PostItem from "./PostItem";
import AddPost from "./AddPost";

const PostBoard = ({ user }) => {
  //* Modal State and Style *//
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  //* State *//
  const [posts, setPosts] = useState([]);

  //* useEffect *//
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await postService.getAll();
      setPosts(postData);
    };
    fetchAllPosts();
  }, []);

  //* Backend Functions *//
  const handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData);
    setPosts([...posts, newPost]);
    handleClose()
  };

  const handleUpdatePost = async (updatedPostData) => {
    const newPost = await postService.update(updatedPostData);
    const newPostDataArray = posts.map((post) =>
      post._id === newPost._id ? newPost : post
    );
    setPosts([...newPostDataArray]);
    handleClose()
  };

  const handleDeletePost = async (postId) => {
    const deletedPost = await postService.deletePost(postId);
    const newPostsArray = posts.filter(
      (post, idx) => post._id !== deletedPost._id
    );
    setPosts(newPostsArray);
    handleClose()
  };

  return (
    <div>
      <header>
        <h1>
          Posts
        </h1>
        {user ?
          <button
            onClick={handleOpen}
          >
            <AddCircleOutlineIcon />
          </button>
          :
          ""
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
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >

              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                component={"span"}
              >
                <AddPost handleAddPost={handleAddPost} />
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </header>
      <div>
        <>
          {posts.map((post, idx) =>
            <PostItem
              key={idx}
              post={post}
              user={user}
              handleUpdatePost={handleUpdatePost}
              handleDeletePost={handleDeletePost}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default PostBoard;
