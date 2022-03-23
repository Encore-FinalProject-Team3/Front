import * as React from 'react';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, ButtonBase, Typography, Container, Divider } from '@mui/material';
import CreateComment from './CreateComment';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import FreeBoard from './FreeBoard';
import CreateMessage from './CreateMessage';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const otherUser = [
  {to: 'FreeBoard', name: '게시글목록'},
  {to: 'CreateMessage', name: '쪽찌쓰기'},
];




export default function BoardDetail() {

  const navi = useNavigate()

  const goCreate = () => {
    navi("/CreateComment")
  }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <Box>
      <Paper sx={{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '0.5em',
        display: 'block',
        maxWidth: '100%',
        height: 700
        }} elevation={0}>
          <TextField
          fullWidth
          variant='outlined'
          id="filled-read-only-input"
          label="Category"
          defaultValue="테니스"
          InputProps={{
            readOnly: true,
          }}
          />
          <div>&nbsp;</div>
          <TextField
          fullWidth
          variant='filled'
          id="filled-read-only-input"
          label="Title"
          defaultValue="테니스 입문하고 시퍼요"
          InputProps={{
            readOnly: true,
          }}
          />
          <div>&nbsp;</div>
          <TextField
          fullWidth
          multiline
          variant='filled'
          id="filled-read-only-input"
          label="Content"
          minRows={18}
          defaultValue="안녕하세요 일산 사는 재니임미다 테니스 하고 시퍼요"
          InputProps={{
            readOnly: true,
          }}
          />
      </Paper>
      <Button variant='outlined'>수정</Button>&nbsp;<Button variant='outlined'>삭제</Button>
      <div>&nbsp;</div>
      <Paper sx={{
        p: 2,
        flexGrow: 1,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: '0.5em',
        display: 'block',
        maxWidth: '80%',
        }} elevation={3}
        >
        <Grid container spacing={2}>
        <Grid item>
          {/* <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="user_icon" src="https://cdn-icons-png.flaticon.com/512/1389/1389234.png" />
          </ButtonBase> */}
          <Box>
            <ButtonBase 
              sx={{ width: 128, height: 128 }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <Img alt="user_icon" src="https://cdn-icons-png.flaticon.com/512/1389/1389234.png" />
            </ButtonBase>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {otherUser.map((user) => (
                <MenuItem key={user.to} onClick={handleCloseNavMenu}>
                  <Link to={user.to}>
                    <Button>
                      <Typography textalign="center">{user.name}</Typography>
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                대충 닉네임 자리인 곳
              </Typography>
              <Typography variant="h6" gutterBottom>
                반갑습니당
              </Typography>
              <Typography variant="body2" color="text.secondary">
                대충 작성시간..
              </Typography>
            </Grid>
            <Grid item>
              <Typography onClick={goCreate} sx={{cursor:'pointer'}} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </Paper>
      <div>&nbsp;</div>
      <Button onClick={goCreate}
        variant="outlined"
        sx ={{
          display:'block',
          marginRight:'auto',
          marginLeft:'auto'
        }}>
        댓글등록
      </Button>
    </Box>
  );
}