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
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
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
        </Grid>
      </Grid>
      <div>&nbsp;</div>
      <Grid container spacing={2}>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height=""
              image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
              alt=""
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  V
                </Avatar>
              }
              title="조용기 코치"
              subheader="테니스"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                잘 부탁드립니다!!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}