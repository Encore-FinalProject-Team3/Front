import React from 'react';
import Carousel from '../common/Carousel';
import BoardCard from '../common/BoardCard';
import {Box, Divider, Grid} from '@mui/material';

export default function Home() {
  return (  
    <div>
      <Carousel/>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
          <Grid item xs={6} md={4}>
            <BoardCard/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};
