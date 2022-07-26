import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


const Cards = ({learn, handleDeleteLearn}) => {

  return(
    <>  
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {learn.header}
          </Typography>
          <Typography sx={{ mt: 1.5 }}>
            {learn.title}
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 12}}>
            {learn.description}
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 12 }} variant="body2" color="text.secondary">
            {learn.url}
          </Typography>
          <CardActions>
            <Button onClick={handleDeleteLearn}>
              Delete
            </Button>
          </CardActions>
          </CardContent>
      </Card>
    </>
  )
}

export default Cards


