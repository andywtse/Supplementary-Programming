import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../../../services/authService'

//* Package Imports *//
import { Modal, Box, Typography } from "@mui/material";

const Login = props => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      email: '',
      pw: '',
    })
    setOpen(false);
  }

  const updateMessage = msg => {
    setMessage(msg)
  }

  const handleChange = e => {
    updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      window.location.reload();
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  return (
    <div>
      <button className='nav-button | flex justify-center items-center text-base rounded px-5 py-1' onClick={handleOpen}>
        Log In
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Log In
          </Typography>
          <Typography>
            {message}
          </Typography>
          <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
            <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
              <div className="flex justify-between w-full gap-6">
                <div className="flex flex-col gap-2 w-2/4">
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
                <div className="flex flex-col gap-2 w-2/4">
                  <label htmlFor="category-input">
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="pw"
                    value={formData.pw}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button onClick={() => handleSubmit}>
                SUBMIT
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div >
  )

}

export default Login
