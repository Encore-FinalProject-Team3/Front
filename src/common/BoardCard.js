import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BoardCard() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={6} md={4}>
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
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_1280.jpg"
                alt="football_ex"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  FootBall
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally..
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2016/05/22/01/38/hit-1407826_1280.jpg"
                alt="baseball_ex"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Baseball
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Baseball is a bat-and-ball game played between two opposing teams, of nine players each, that take turns batting and fielding.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2017/09/06/14/51/archery-2721785_1280.jpg"
                alt="archery_ex"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Archery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Archery is the sport, practice, or skill of using a bow to shoot arrows. The word comes from the Latin arcus, meaning bow. Historically, archery has...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.koreatimes.co.kr/upload/newsV2/images/202202/3bce87eb6ad94963a62af1833f08ff30.jpg/dims/resize/740/optimize"
                alt="shortTrackSpeedSkating_ex"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Short-track speed skating
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Short-track speed skating is a form of competitive ice speed skating. In competitions, multiple skaters (typically between four and six) skate on...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2018/02/23/17/56/snowboarding-3176182_1280.jpg"
                alt="snowboarding_ex"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Snowboarding
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Snowboarding is a recreational and competitive activity that involves descending a snow-covered slope while standing on a snowboard...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <div>&nbsp;</div>
    </Box>
  );
}