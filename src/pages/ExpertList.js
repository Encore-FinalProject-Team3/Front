import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
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
    <Box sx={{mr: 'auto', ml: 'auto'}}>
      <Grid container>
          <Tabs
          value={valueHorizon}
          onChange={handleChangeHorizontal}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          >
            <Tab label="골프" {...a11yProps(0)} />
            <Tab label="테니스" {...a11yProps(1)} />
            <Tab label="탁구" {...a11yProps(2)} />
            <Tab label="농구" {...a11yProps(3)} />
            <Tab label="축구" {...a11yProps(4)} />
            <Tab label="야구" {...a11yProps(5)} />
            <Tab label="스쿼시" {...a11yProps(6)} />
            <Tab label="필라테스" {...a11yProps(7)} />
            <Tab label="요가" {...a11yProps(8)} />
            <Tab label="배구" {...a11yProps(9)} />
          </Tabs>
      </Grid>
      <div>&nbsp;</div>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/c578507fd95ab15f089d1b8e5050a64a.jpg"
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="조용기"
                 subheader="테니스"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   잘 부탁드립니다!!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/527827867fadea4b94d05a85bb97a602.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="써니"
                 subheader="골프"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   더 쉽고 재밌는 골프! 함께해요!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/d91c5c9ef845f0bbc504c809daac6d3c.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="샐리"
                 subheader="배드민턴"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   배드민턴 잘하는 법! 맡겨주세요!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/4f578f73081e47cc804aca46faca0beb.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="리차드"
                 subheader="탁구"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   탁구는 저에게 배우시면 됩니다!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/341484e0e7c3c203800717f3a5530838.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="블리"
                 subheader="필라테스"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   전국민 속성 다이어트의 시작!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/d106080d67a3d8814099ba069ea5f576.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="다온"
                 subheader="요가"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   보다 건강한 몸을 위해! 시작하세요!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/69913e52f0cb4c9f19e4b8d1d847ef94.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="케이"
                 subheader="배구"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   강스파이크!! 가르쳐드립니다.
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://s3.ap-northeast-2.amazonaws.com/wizschool-images/profile-image-07.png"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="로지"
                 subheader="스쿼시"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   드라마 처럼 예쁘게 치고 싶죠? come on!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>
        <Grid item xs={6} md={4} sx={{mr:'auto', ml:'auto'}}>
          <Card sx={{ maxWidth: 300 }}>
           <Link to={'/CoachingRequest'}>  
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="300"
                 image="https://wizschool-images.s3.ap-northeast-2.amazonaws.com/3acae086c62d176250d85d8f0107bf87.jpg"
                 alt=""
               />
               <CardHeader
                 avatar={
                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     V
                   </Avatar>
                 }
                 title="세이디"
                 subheader="골프"
                 />
               <CardContent>
                 <Typography variant="body2" color="text.secondary">
                   저와 함께 필드까지 가보시죠!
                 </Typography>
               </CardContent>
           `</CardActionArea>
           </Link>
          </Card>
        </Grid>        
      </Grid>
    </Box>
  );
}