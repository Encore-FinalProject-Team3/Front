import * as React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';


const columns = [
  { id: 'idx', label: '정렬', minWidth: 70 },
  { id: 'title', label: '제목', minWidth: 170 },
  { id: 'createId', label: '작성자', minWidth: 70 },
  { id: 'createDate', label: '작성일', minWidth: 100 },
  { id: 'hits', label: '조회수', minWidth: 70 },
  { id: 'likes', label: '좋아요', minWidth: 70 },
];

function createData(idx, title, createId, createDate, hits, likes) {
  return { idx, title, createId, createDate, hits, likes };
}

const rows = [
  createData(1, '안녕하세요', '너의이름은', '2022-03-22', 54, 3),
  createData(2, '무엇', '너의이름은', '2022-03-22', 12, 1),
  createData(3, 'React뽀개기', '너의이름은', '2022-03-22', 30, 0),
  createData(4, 'VSCod뽀개기', '너의이름은', '2022-03-22', 125, 25),
  createData(5, '내 머리 뽀개기', '너의이름은', '2022-03-22', 0, 0),
  createData(6, '혼자 일하기 vs 같이하기', '너의이름은', '2022-03-22', 1, 0),
];

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

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [valueVertical, setValueVertical] = React.useState(0);

  const handleChangeVertical = (event, newValueVertical) => {
    setValueVertical(newValueVertical);
  };

  return (
    <Box>
      <Button variant='outlined'>마스터 페이지</Button> &nbsp; <Button href='/createBoard' variant='outlined'>영상업로드</Button>
      <Grid container spacing={2} sx={{width: '100%', height: 1000}}>
        <Grid item xs={3}>
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
          <div>&nbsp;</div>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={valueVertical}
              onChange={handleChangeVertical}
              aria-label="Vertical tabs example"
              sx={{borderRight: 1, borderColor: 'divider'}}
            >
              <Tab label="내가 쓴 글" {...a11yProps(4)} />
              <Tab label="내가 쓴 댓글" {...a11yProps(5)} />
              <Tab label="요청한 코칭" {...a11yProps(6)} />
              <Tab label="도착한 코칭" {...a11yProps(7)} />
              <Tab label="보낸 쪽찌함" {...a11yProps(8)} />
              <Tab label="받은 쪽찌함" {...a11yProps(9)} />
          </Tabs>
        </Grid>
        <Grid item xs={9}>
        <Paper sx={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}