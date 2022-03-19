import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Divider } from '@mui/material';
import { TextField } from '@mui/material';

export default function BoardDetail() {
  return (
    <Box>
      <Paper sx={{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '0.5em',
        display: 'block',
        width: 450,
        height: 550
        }} elevation={3}>
          <div>안녕하세요</div>
          <Divider/>
          <div>
              처음뵙겠습니다!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
              함께 즐겁게 운동하면 좋겠습니다!!
          </div>
      </Paper>
      <Paper sx={{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '0.5em',
        display: 'block',
        width: 550,
        height: 80
        }} elevation={3}>
        <span>3팀</span><Divider /><span>댓글입니다</span>
      </Paper>
      <Paper sx={{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '0.5em',
        display: 'block',
        width: 550,
        height: 80
        }} elevation={3}>
        <TextField fullWidth sx={{verticalAlign:'middle'}} label="content" id="content" />
        <Button variant="outlined" sx={{float:'right'}}>댓글등록</Button>
      </Paper>
    </Box>
  );
}