import './App.css';
import 'sweetalert2/src/sweetalert2.scss';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import FreeBoard from './pages/FreeBoard';
import UsedBoard from './pages/UsedBoard';
import Coaching from './pages/Coaching';
import MyPage from './pages/MyPage';
import BoardCard from './common/BoardCard';
import RegistUser from './pages/RegistUser';
import ModalLogin from './pages/ModalLogin';
import CreateBoard from './pages/CreateBoard';
import CoachingRequest from './pages/CoachingRequest';
import BoardDetail from './pages/BoardDetail';
import CreateComment from './pages/CreateComment';
import CreateMessage from './pages/CreateMessage';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Token from './utils/Token'
import Api from './utils/Api';
import ExpertList from './pages/ExpertList';
import ModalInputEx from './common/ModalInputEx'


function App(props) {
  const [userInfo, setUserInfo] = useState({})
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    if (Token.getToken()?.length > 0) {
      // if access token
      // api 호출 --> userInfo 
      // setUserInfo()
      setLogined(true)
    }
  }, [])
  return (
    <div className="App">
      <Container fixed >
        <Header logined={logined}/>
        <Toolbar id="back-to-top-anchor" sx={{display:'inline'}} />
        <React.Fragment>
        <CssBaseline />
        <Routes>
          <Route path="/ModalLogin" element={<ModalLogin setLogined={setLogined}/>} />
          <Route path="/" element={<Home />} />
          <Route path="/BoardCard" element={<BoardCard/>} />
          <Route path="/freeBoard" element={<FreeBoard />} />
          <Route path="/ExpertList" element={<ExpertList/>} />
          <Route path="/usedBoard" element={<UsedBoard />} />
          <Route path='/createBoard' element={<CreateBoard />}/>
          <Route path="/coachingRequest" element={<CoachingRequest/>}/>
          <Route path='/boardDetail' element={<BoardDetail />}/>
          <Route path="/createComment" element={<CreateComment/>}/>
          <Route path='/createMessage' element={<CreateMessage/>}/>
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/registUser" element={<RegistUser />} />
          <Route path="/modalInputEx" element={<ModalInputEx/>} />
        </Routes>
        <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
        </React.Fragment>
      </Container>
    </div>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default App;
