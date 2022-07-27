import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../../services/authService";

//* Package Imports *//
import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";

const Signup = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  //Sign Up
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    code: "",
  });

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConf: "",
      code: "",
    });
    setOpen(false);
  };

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const { name, email, password, passwordConf } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.signup(formData);
      window.location.reload();
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const handleChange = (e) => {
    updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormInvalid = () => {
    return !(
      name &&
      email &&
      password &&
      password === passwordConf
    );
  };

  return (
    <div>
      <button
        className="nav-button | flex justify-center items-center text-base rounded px-5 py-1"
        onClick={handleOpen}
      >
        Sign Up
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Sign Up
            </Typography>
            <Typography>
              {message}
            </Typography>
            <Typography id="transition-modal-description" component={'span'} sx={{ mt: 2 }}>
              <form
                className="flex flex-col gap-6 pt-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Confirm Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="passwordConf"
                      value={formData.Conf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category-input">
                      Admin Code
                    </label>
                    <input
                      type="password"
                      placeholder="Admin Code"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
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

export default Signup;
