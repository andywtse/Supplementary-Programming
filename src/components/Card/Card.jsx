import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = (props) => {

  return(
    <>
    <Card sx={{ maxWidth: 275, height: 200 }}>
    Card
    <CardActions>
      {props.title}
      {props.description}
      {props.url}
    </CardActions>
    </Card>
    </>
  )
}

export default Cards