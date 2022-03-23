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
import Api from '../utils/Api';
import { useEffect } from 'react';

/*
const columns = [
  { id: 'idx', label: '정렬', minWidth: 70 },
  { id: 'title', label: '제목', minWidth: 170 },
  { id: 'createId', label: '작성자', minWidth: 70 },
  { id: 'createDate', label: '작성일', minWidth: 100 },
  { id: 'hits', label: '조회수', minWidth: 70 },
  { id: 'likes', label: '좋아요', minWidth: 70 },
];



*/

const columns = [
  { id: 'id', label: 'no', maxWidth: 50, align: 'center'},
  { id: 'title', label: '제목', minWidth: 200, align: 'center' },
  { id: 'memberEmail', label: '작성자', maxWidth: 50, align: 'center' },
  { id: 'createdAt', label: '작성일', maxWidth: 70, align: 'center' },
  { id: 'hit', label: '조회수', maxWidth: 50, align: 'center' },
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

/*
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
*/

export default function FreeBoard() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [rows, setRows] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [subCategories, setSubCategories] = React.useState([])
  const [valueHorizon, setValueHorizon] = React.useState(0)
  const [valueVertical, setValueVertical] = React.useState(0)

  const getBoardData = async (category) => {
    try {
      console.log('getBoardData', category)
      const result = await Api.getFreeBoard()
      const datas = result.data?.result?.data;
      if (datas) {
        setRows(
          datas.map(r=>{
            r['memberEmail'] = r.member.email
            return r
          })
        )
      }
    } catch {
      console.error('get board error')
    }
  }
  const getCategories = async () => {
    try {
      const result = await Api.getCatetories()
      if (result.data.success) {
        setCategories(result.data.result.data || [])
        if (result.data.result.data[0].children) {
          setSubCategories(result.data.result.data[0].children)
          if (result.data.result.data[0].children[0]) {
            getBoardData(result.data.result.data[0].children[0].id)
          }
        }
      }
    } catch {
      console.error('category error')
    }
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const handleChangeVertical = (event, idx) => {
    setValueVertical(idx);
    if (categories[idx].children) {
      setSubCategories(categories[idx].children)
      if (typeof categories[idx].children.length === 'number' && categories[idx].children.length > 0) {
        getBoardData(categories[idx].children[valueHorizon].id)
      }
    }
  };
  const handleChangeHorizontal = (event, idx) => {
    setValueHorizon(idx);
    getBoardData(categories[valueVertical].children[idx].id)
  };

  useEffect(() => {
    getCategories()
    
  }, [])

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
        {subCategories.map(category => (
          <Tab label={category.name} />
        ))}
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
            {categories.map(category => (
              <Tab label={category.name} />
            ))}
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
                      width={column.width}
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