import * as React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ExpertList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [valueHorizon, setValueHorizon] = React.useState(0);
  const [valueVertical, setValueVertical] = React.useState(0);

  const handleChangeVertical = (event, newValueVertical) => {
    setValueVertical(newValueVertical);
  };

  const handleChangeHorizontal = (event, newValueHorizon) => {
    setValueHorizon(newValueHorizon);
  };

  return (
    <Box>
      <Tabs
      value={valueHorizon}
      onChange={handleChangeHorizontal}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
      >
        <Tab label="인기 강사" {...a11yProps(0)} />
        <Tab label="신규 강사" {...a11yProps(1)} />
        <Tab label="이달의 강사" {...a11yProps(2)} />
      </Tabs>
      <div>&nbsp;</div>
      <Grid container spacing={2} sx={{width: '100%', height: 1000}}>
        <Grid item xs={2}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={valueVertical}
            onChange={handleChangeVertical}
            aria-label="Vertical tabs example"
            sx={{borderRight: 1, borderColor: 'divider'}}
          >
            <Tab label="축구" {...a11yProps(4)} />
            <Tab label="야구" {...a11yProps(5)} />
            <Tab label="농구" {...a11yProps(6)} />
            <Tab label="테니스" {...a11yProps(7)} />
            <Tab label="수영" {...a11yProps(8)} />
            <Tab label="태권도" {...a11yProps(9)} />
            <Tab label="필라테스" {...a11yProps(10)} />
            <Tab label="자전거" {...a11yProps(11)} />
        </Tabs>
        </Grid>
        <Grid item xs={10}>
        <Paper sx={{ marginLeft: 'auto', marginRight: 'auto'}}>
        <Grid container >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="너의이름은"
                subheader="회원"
              />
              <CardMedia
                component="img"
                height="194"
                image=""
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  잘해봅시다 빠샤
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}