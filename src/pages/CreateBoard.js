import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FreeBoard from './FreeBoard';

const Input = styled('input')({
  display: 'none',
});

function CreateBoard() {
  return (
    <Box
      sx={{
        display: 'block',
        marginTop:'0.7em',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Title" id="Title" />
      <div>&nbsp;</div>
      <TextField fullWidth
          id="filled-multiline-static"
          label="Content"
          multiline
          rows={10}
          variant="filled"
      />
      <div>&nbsp;</div>
      <Grid container>
        <Grid item xs={10}>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />&nbsp;파일첨부
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" href='/FreeBoard'>등록</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" onClick={FreeBoard}>취소</Button>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default CreateBoard;