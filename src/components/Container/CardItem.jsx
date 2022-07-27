import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Typography } from '@mui/material'

import EditCardModal from './EditCardModal'

const CardItem = ({ card, handleDeleteCard, handleUpdateCard, user }) => {

  return (
    <>
      <div className="card-item-container">
        <CardContent>
          <Typography className="card-item" variant="h4" color="text.secondary" gutterBottom>
            {card.header}
          </Typography>
          <Typography className="card-item" variant="h6" component="div">
            {card.title}
          </Typography>
          <Typography className="card-item" sx={{ mb: 1.5 }} color="text.secondary">
            {card.description}
          </Typography>
          {card.url ?
            <Typography className="card-link" variant="body2">
              <a href={card.url} target="_blank" rel="noopener noreferrer">{card.url}</a>
            </Typography>
            :
            ""
          }

        </CardContent>
        {user && user.admin ? <CardActions>
          <Button size="small">
            <EditCardModal
              card={card}
              handleUpdateCard={handleUpdateCard}
            />
          </Button>
          <Button size="small" onClick={() => handleDeleteCard(card._id)}>Delete</Button>
        </CardActions>
          : ""}

      </div>
    </>
  )
}

export default CardItem


