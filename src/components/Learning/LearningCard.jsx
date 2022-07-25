import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function LearningCard() {
  return (
    <>
    <Card sx={{ maxWidth: 275, height: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Code Academy
        </Typography>
        <Typography sx={{ mt: 1.5 }} >
          Beginners Welcome
        </Typography>
        <Typography  sx={{ mt: 1.5, fontSize: 12 }} variant="body2" color="text.secondary">
          Start Coding in Seconds!
          <br />
          {`"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson"`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" component="a" href="https://www.codecademy.com/" >Learn More</Button>
      </CardActions>
    </Card>
    <>
    </>
    <Card sx={{ maxWidth: 275, height: 200 }}>
      <CardActions>
        <Button size="small" component="a" href="/add-learn-card" >+ ADD NEW CARD</Button>
      </CardActions>
    </Card>
    
    </>
  );
}


