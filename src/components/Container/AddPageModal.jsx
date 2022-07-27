import { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//* Package Imports *//
import { Modal, Box, Typography } from "@mui/material";

const AddPageModal = ({handleAddPage}) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
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
    handleAddPage(formData)
    handleClose()
  }

  return (
    <div>
      <button className='nav-button | flex justify-center items-center text-base rounded px-5 py-1' onClick={handleOpen}>
        <AddCircleOutlineIcon/>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add New Page
          </Typography>
          <Typography>
            {message}
          </Typography>
          <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
            <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Title <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
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

export default AddPageModal
