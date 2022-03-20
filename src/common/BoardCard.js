import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BoardCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2020/04/08/19/04/tennis-5018589_1280.jpg"
          alt="tennis_ex"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tennis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles).
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}