import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BoardDetail from '../pages/BoardDetail';
import { CardActionArea } from '@mui/material';

export default function MediaCardEx() {
  return (
    <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
      <CardActionArea href="https://youtu.be/-81ZLrafO_k">
      <CardMedia
        component="img"
        width="400"
        height="300"
        image="https://i.ytimg.com/an_webp/-81ZLrafO_k/mqdefault_6s.webp?du=3000&sqp=CIW55pEG&rs=AOn4CLC_ND7ZjcDDX6Obd1mV2bgR44e30g"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          [2022 호주오픈] 결승전 라파엘 나달 vs 다닐 메드베데프 H/L l Australian Open 2022 남자 단식 결승
        </Typography>
        <Typography variant="body2" color="text.secondary">
          [2022 호주오픈] 남자 단식 결승 라파엘 나달 vs 다닐 메드베데프 H/L
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}