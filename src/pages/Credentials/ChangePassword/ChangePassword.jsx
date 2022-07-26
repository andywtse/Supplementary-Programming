import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../../services/authService";

//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade } from "@mui/material";

const ChangePassword = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  const [message, setMessage] = useState([""]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pw: "",
    newPw: "",
    newPwConf: "",
  });

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      pw: "",
      newPw: "",
      newPwConf: "",
    });
    setMessage("");
    setOpen(false);
  };

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    try {
      await authService.changePassword(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { pw, newPw, newPwConf } = formData;

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf);
  };

  return (
    <div>
      <button onClick={handleOpen} className="nav-button | rounded">
        Change Password
      </button>
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign Up
            </Typography>
            <Typography >
              {message}
            </Typography>
            <Typography id="modal-modal-description" component={'span'} sx={{ mt: 2 }}>
              <form
                className="flex flex-col gap-6 pt-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Current Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Current Password"
                      name="pw"
                      value={formData.pw}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      New Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="New Password"
                      name="newPw"
                      value={formData.newPw}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="newPwConf"
                      value={formData.newPwConf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button
                  className="modal-button submit | rounded"
                  onClick={() => handleSubmit()}
                  disabled={isFormInvalid()}
                >
                  SUBMIT
                </button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChangePassword;
