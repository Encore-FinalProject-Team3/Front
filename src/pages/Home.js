import React from 'react';
import Carousel from '../common/Carousel';
import MediaCard from '../common/MediaCard';
import MediaCardEx from '../common/MediaCardEx';
import BoardCard from '../common/BoardCard';
import {Grid} from '@mui/material';

export default function Home() {
  return (  
    <div>
      <Carousel/>
      <div>&nbsp;</div>
      <Grid container spacing={3}>
        <Grid item xs={6} >
          <MediaCard />
        </Grid>
        <Grid item xs={6} >
          <MediaCardEx />
        </Grid>
      </Grid>
      <div>&nbsp;</div>
      <BoardCard/>
    </div>
  )
};
