import { useState } from 'react'

//* Package Imports *//
import { Modal, Box, Typography, Button } from "@mui/material";

const EditPageModal = ({ card, handleUpdateCard }) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  const [formData, setFormData] = useState(card)

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleUpdateCard(formData)
    handleClose()
  }

  return (
    <div>
      <Button
        sx={{ p: 0 }}
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add New Card
          </Typography>
          <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
            <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Header <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Header"
                    name="header"
                    value={formData.header}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
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
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    URL
                  </label>
                  <input
                    type="text"
                    placeholder="URL"
                    name="url"
                    value={formData.url}
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

export default EditPageModal
