import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BoardDetail from '../pages/BoardDetail';
import { CardActionArea } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
      <CardActionArea href="https://youtu.be/8ofQSckaniE">
      <CardMedia
        component="img"
        width="400"
        height="300"
        image="https://i.ytimg.com/an_webp/8ofQSckaniE/mqdefault_6s.webp?du=3000&sqp=CNL38pEG&rs=AOn4CLDGGsj0G2buNbZP_qbYKGPZojSjxw"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dramatic Murray vs Djokovic Battle 😳 | Miami 2014 Highlights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The story of a controversial call as Novak Djokovic took on Andy Murray for a place in the 2014 Miami Open semi-finals
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}