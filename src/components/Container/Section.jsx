import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import * as pageService from '../../services/pageService'
import AddCardModal from "./AddCardModal"
import EditSectionModal from "./EditSectionModal"
import Card from "./Card"

const Pages = ({ section, handleDeleteSection, handleUpdateSection }) => {

  const [cards, setCards] = useState()

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const fetchAllCards = async () => {
      const cardData = await pageService.getCards(section._id)
      setCards(cardData)
    }
    fetchAllCards()
  }, [])

  const handleAddCard = async (formData) => {
    const newCard = await pageService.createCard(formData, section._id)
    setCards([...cards, newCard])
  }

  const handleUpdateCard = async (updatedCardData) => {
    const newCard = await pageService.updateCard(updatedCardData);
    const newCardDataArray = cards.map((card) =>
      card._id === newCard._id ? newCard : card
    );
    setCards([...newCardDataArray]);
  };

  const handleDeleteCard= async (cardId) => {
    const deletedCard = await pageService.deleteCard(cardId);
    const newCardsArray = cards.filter(
      (card) => card._id !== deletedCard._id
    );
    setCards(newCardsArray);
  }

  return (
    <section>
      <Box sx={{ flexGrow: 0 }}>
        <div className="section-header-container">
          <h1 className="section-header-title">{section.title}</h1>
          <div className="section-option-menu">
            <Button
              sx={{ my: 2, color: 'black' }}
              onClick={handleOpenUserMenu}>
              <span className="text-lg">Options</span>
            </Button>
          </div>
        </div>

        {cards ?
          <>
            {cards.map((card, idx) => (
              <Card
                key={idx}
                card={card}
                handleDeleteCard={handleDeleteCard}
                handleUpdateCard={handleUpdateCard}
              />
            ))}
          </>
          :
          ""
        }

        {/* Menu options */}
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {/* Adds Card */}
          <MenuItem key='add-section-modal' onClick={handleCloseUserMenu}>
            <Typography textAlign="center" component={'span'}>
              <AddCardModal handleAddCard={handleAddCard} />
            </Typography>
          </MenuItem>

          {/* Edits Section */}
          <MenuItem key='edit-page-modal' onClick={handleCloseUserMenu}>
            <Typography textAlign="center" component={'span'}>
              <EditSectionModal section={section} handleUpdateSection={handleUpdateSection}/>
            </Typography>
          </MenuItem>

          {/* Delete Section */}
          <MenuItem key='delete-page' onClick={handleCloseUserMenu}>
            <Typography textAlign="center" component={'span'}>
              <Button
                sx={{ p: 0, color: 'red' }}
                onClick={() => handleDeleteSection(section._id)}
              >
                Delete Current Section
              </Button>
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </section>
  )
}

export default Pages