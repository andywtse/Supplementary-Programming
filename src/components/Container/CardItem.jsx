import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography} from '@mui/material'

import EditCardModal from './EditCardModal'

const CardItem = ({ card, handleDeleteCard, handleUpdateCard }) => {

  return (
    <>
      <div className="card-item-container">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {card.header}
          </Typography>
          <Typography variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {card.description}
          </Typography>
          <Typography variant="body2">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <EditCardModal
              card={card}
              handleUpdateCard={handleUpdateCard}
            />
          </Button>
          <Button size="small" onClick={() => handleDeleteCard(card._id)}>Delete</Button>
        </CardActions>
      </div>
    </>
  )
}

export default CardItem


