import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import ModalLogin from './ModalLogin';
import Token from '../utils/Token';

const pages = [
  {to: '/FreeBoard', name: '자유게시판'},
  {to: '/CoachingRequest', name: '코칭신청'},
  {to: '/', name: '영상'}
];
const settings = [
  {to:'/MyPage', name :'마이페이지'},
  {to:'Token.delToken', name:'로그아웃'}];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navi = useNavigate()
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goLogin = () => {
    navi("/ModalLogin")
  }
  
  return (
    <AppBar position="relative" color="primary" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Fit Box
          </Typography>
          </Link>
          <Box sx={{ display: {xs:'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page.to} onClick={handleCloseNavMenu}>
                  <Link to={page.to}>
                    <Typography textalign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Fit Box
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.to}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {props.logined ? <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> : <Button sx={{marginRight:3}} size="small" color="inherit" onClick={goLogin}>로그인/회원가입</Button>}
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.to} onClick={handleCloseUserMenu}>
                  <Button href={setting.to} textalign="center">{setting.name}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;