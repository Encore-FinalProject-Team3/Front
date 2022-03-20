import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import FreeBoard from './FreeBoard';

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
      <div container spacing={2}>
      <Button item xs={3} variant="outlined" href='/FreeBoard'>등록</Button>
      &nbsp;
      <Button item xs={3} variant="outlined" onClick={FreeBoard}>취소</Button>
      </div>
    </Box>
    
  );
}

export default CreateBoard;