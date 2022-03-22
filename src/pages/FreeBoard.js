import * as React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
  createData(1, '안녕하세요', 'jaeny', '2022-03-22', 54, 3),
  createData(2, 'hello', 'mmimo', '2022-03-22', 12, 1),
  createData(3, 'bonjour', 'abib', '2022-03-22', 30, 0),
  createData(4, 'aloha', 'tori', '2022-03-22', 125, 25),
  createData(5, 'konnitsiha', 'jamie', '2022-03-22', 0, 0),
  createData(6, 'hello everyone', 'jason', '2022-03-22', 1, 0),
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
        <Tab label="지식공유" {...a11yProps(0)} />
        <Tab label="중고거래" {...a11yProps(1)} />
        <Tab label="플레이메이트" {...a11yProps(2)} />
        <Tab label="플레이그라운드" {...a11yProps(3)} />
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
          <Link to='/createBoard' >
            <Button variant="outlined" >
              글쓰기
            </Button>
          </Link>
        </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}