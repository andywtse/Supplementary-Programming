//* File Imports *//
import * as learningService from "../../services/learningService"
//* React Hooks *//
import { useState, useEffect } from "react";
//* Package Imports *//
import { Modal, Box, Typography, Backdrop, Fade, Card, CardActions, Button} from "@mui/material";
//* Components *//
import AddLearnCard from "../../components/Learning/AddLearnCard";
import Cards from "../../components/Card/Card"
import LearningCard from "../../components/Learning/LearningCard"


const Learning = () => {
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
  };

  //* State *//
  const [learns, setLearns] = useState([]);

  //* useEffect *//
  useEffect(() => {
    const fetchLearnData = async () => {
      const learnData = await learningService.getLearns();
      setLearns(learnData);
    };
    fetchLearnData();
  }, []);

  const handleAddLearn = async (newLearnData) => {
    const newLearnCard = await learningService.create(newLearnData)
    console.log(newLearnData)
    setLearns([...learns, newLearnCard])
    setOpen(false)
  }

  const handleUpdateLearn = async (updatedLearnData) => {
    const newLearnCard = await learningService.update(updatedLearnData);
    const newLearnDataArray = learns.map((learn) =>
      learn._id === newLearnCard._id ? newLearnCard : learn
    );
    setLearns([...newLearnDataArray])
    
  };

  const handleDeleteLearn = async (learnId) => {
    const deleteLearn = await learningService.deleteLearns(learnId);
    const newLearnsArray = learns.filter(
      (learn, idx) => learn._id !== deleteLearn._id
    );
    setLearns(newLearnsArray);
  };

  return (
    <main>
      <h1>
        Front End Learning
      </h1>

      <LearningCard/>

      <Card sx={{ maxWidth: 275, height: 200 }}>
        <CardActions>
          <Button size="small" onClick={(handleOpen)}>+ ADD NEW CARD</Button>
        </CardActions>
      </Card>
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
                <span className="form-header"/>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                component={"span"}
              >
                <AddLearnCard 
                handleAddLearn={handleAddLearn}
                />
              </Typography>
            </Box>
          </Fade>
        </Modal>

        {learns.map((learn, idx) =>
        <Cards
        key={idx}
        learn={learn}
        handleUpdateLearn={handleUpdateLearn}
        handleDeleteLearn={handleDeleteLearn}
        />

        )}
    </main>
  )
}

export default Learning