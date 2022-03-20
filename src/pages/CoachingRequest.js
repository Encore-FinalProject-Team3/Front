import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Button from '@mui/material/Button';
import FreeBoard from './FreeBoard';

const Input = styled('input')({
  display: 'none',
});

function CoachingRequest() {
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
      >
        <Input accept="image/*" id="icon-button-file" type="file" />
      </TextField>
      <div>&nbsp;</div>
      <div container spacing={2}>
      <Button item xs={3} variant="outlined" href='/Coaching'>등록</Button>
      &nbsp;
      <Button item xs={3} variant="outlined" onClick={FreeBoard}>취소</Button>
      </div>
    </Box>
    
  );
}

export default CoachingRequest;
