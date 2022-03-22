import * as React from 'react';
import { Theme, useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FreeBoard from './FreeBoard';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const category =[
  '축구',
  '야구',
  '농구',
  '배구',
  '수영',
  '테니스',
  '태권도',
  '스키',
  '스노우보드'
]

const names = [
  '조용기',
  '민야령',
  '김래현',
  '이예지',
  '강재균',
  '전재연'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getCategoryStyles(category, categoryName, theme) {
  return {
    fontWeight:
    categoryName.indexOf(category) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CoachingRequest() {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const categoryHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">종목선택</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={categoryName}
                onChange={categoryHandleChange}
                input={<OutlinedInput id="select-multiple-chip" label="종목선택" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {category.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    style={getStyles(category, categoryName, theme)}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">강사선택</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="강사선택" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <div>&nbsp;</div>
        <TextField fullWidth sx={9} label="Title" id="Title" />
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

export default CoachingRequest;
