import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';



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

export default function MediaPage() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [valueHorizon, setValueHorizon] = React.useState(0);

  const handleChangeHorizontal = (event, newValueHorizon) => {
    setValueHorizon(newValueHorizon);
  };

  return (
    <Box>
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
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/aMLxXxYMHoo">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/aMLxXxYMHoo/mqdefault_6s.webp?du=3000&sqp=CPzd8pEG&rs=AOn4CLCzvkxlo1gKFYc-MOf1eAX0q-U8Tg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Kyrgios vs Mannarino; Kokkinakis, Goffin Play | Miami 2022 Day 1 Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Highlights from day 1 of the 2022 Miami Openi!
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/ijxRVosOqXs">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/ijxRVosOqXs/mqdefault_6s.webp?du=3000&sqp=CO_e8pEG&rs=AOn4CLBdwU1Cw8G1N2-Dfvau0cda_OMyMA"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            GENERATION GAME: Federer vs Kuerten | Indian Wells 2003 2nd Round Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The first in our series looking back on some special cross-generational match ups we've been lucky to see on the ATP Tour over the years!
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/dilLNo2tXaE">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/dilLNo2tXaE/mqdefault_6s.webp?du=3000&sqp=CJqB85EG&rs=AOn4CLCfeKEmE47qiHLHmdYjQTPlG4_2sw"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            [월드컵최종예선] 이란 VS 대한민국 4차전 H/LㅣAFC 아시아지역 월드컵 최종예선
            </Typography>
            <Typography variant="body2" color="text.secondary">
            [월드컵최종예선] 이란 VS 대한민국 4차전 H/L
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/CTnShqfp1Xo">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/CTnShqfp1Xo/mqdefault_6s.webp?du=3000&sqp=CLzY8pEG&rs=AOn4CLAjsghzLQvq-bnAXFDEivlf9moPOw"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            #AsianQualifiers - Group A | Korea Republic 2 - 0 Islamic Republic of Iran
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Korea Republic moved to the top of Group A in the AFC Asian Qualifiers – Road to Qatar™
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/f9UbVRqd9YY">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/f9UbVRqd9YY/mqdefault_6s.webp?du=3000&sqp=CLrX8pEG&rs=AOn4CLCtk0yl5e3hCShHxf1hOnkxceGczQ"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            15 MIN PILATES WORKOUT - Slow Full Body Toning / knee friendly, low impact
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Floor Only ♥︎ a Pilates-inspired workout that is slow (still hard) and a wonderful mix out of strength, balance, stretching & a serious buuuurn! / Werbung
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/oaIZI3yjUlM">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/oaIZI3yjUlM/mqdefault_6s.webp?du=3000&sqp=CIv78pEG&rs=AOn4CLCXyVHLAvY06OsUAprZJlEITzf3iA"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            필라테스vs헬스 구분해드림!!!!! 어떤 운동이 살이 더 잘 빠질까?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            🏆홈트계의 끝판왕🏃 운동/필라테스 카테고리 1위!🥇 힙으뜸 클래스101 들으러 가기
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/aMLxXxYMHoo">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/aMLxXxYMHoo/mqdefault_6s.webp?du=3000&sqp=CPzd8pEG&rs=AOn4CLCzvkxlo1gKFYc-MOf1eAX0q-U8Tg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Kyrgios vs Mannarino; Kokkinakis, Goffin Play | Miami 2022 Day 1 Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Highlights from day 1 of the 2022 Miami Openi!
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/ijxRVosOqXs">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/ijxRVosOqXs/mqdefault_6s.webp?du=3000&sqp=CO_e8pEG&rs=AOn4CLBdwU1Cw8G1N2-Dfvau0cda_OMyMA"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            GENERATION GAME: Federer vs Kuerten | Indian Wells 2003 2nd Round Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The first in our series looking back on some special cross-generational match ups we've been lucky to see on the ATP Tour over the years!
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/dilLNo2tXaE">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/dilLNo2tXaE/mqdefault_6s.webp?du=3000&sqp=CJqB85EG&rs=AOn4CLCfeKEmE47qiHLHmdYjQTPlG4_2sw"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            [월드컵최종예선] 이란 VS 대한민국 4차전 H/LㅣAFC 아시아지역 월드컵 최종예선
            </Typography>
            <Typography variant="body2" color="text.secondary">
            [월드컵최종예선] 이란 VS 대한민국 4차전 H/L
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/CTnShqfp1Xo">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/CTnShqfp1Xo/mqdefault_6s.webp?du=3000&sqp=CLzY8pEG&rs=AOn4CLAjsghzLQvq-bnAXFDEivlf9moPOw"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            #AsianQualifiers - Group A | Korea Republic 2 - 0 Islamic Republic of Iran
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Korea Republic moved to the top of Group A in the AFC Asian Qualifiers – Road to Qatar™
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/f9UbVRqd9YY">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/f9UbVRqd9YY/mqdefault_6s.webp?du=3000&sqp=CLrX8pEG&rs=AOn4CLCtk0yl5e3hCShHxf1hOnkxceGczQ"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            15 MIN PILATES WORKOUT - Slow Full Body Toning / knee friendly, low impact
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Floor Only ♥︎ a Pilates-inspired workout that is slow (still hard) and a wonderful mix out of strength, balance, stretching & a serious buuuurn! / Werbung
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card sx={{ border: 'currentcolor', maxHeight: 600 }}>
          <CardActionArea href="https://youtu.be/oaIZI3yjUlM">
          <CardMedia
            component="img"
            width="300"
            height="250"
            image="https://i.ytimg.com/an_webp/oaIZI3yjUlM/mqdefault_6s.webp?du=3000&sqp=CIv78pEG&rs=AOn4CLCXyVHLAvY06OsUAprZJlEITzf3iA"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            필라테스vs헬스 구분해드림!!!!! 어떤 운동이 살이 더 잘 빠질까?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            🏆홈트계의 끝판왕🏃 운동/필라테스 카테고리 1위!🥇 힙으뜸 클래스101 들으러 가기
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      <div>&nbsp;</div>
    </Grid>
    </Box>
  );
}