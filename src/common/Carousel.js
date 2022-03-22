import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'https://google.com',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg',
  },
  {
    label: 'https://naver.com',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_1280.jpg',
  },
  {
    label: 'https://github.com',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg',
  },
  {
    label: 'https://youtube.com',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0.4em',
        display: 'block',
        overflow: 'hidden',
        width: '70%',
    }}>
      <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardActionArea>
              <Card
                  component="img"
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  href={images.label}
              ></Card>
              </CardActionArea>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{marginLeft:'auto', marginRight:'auto', maxWidth:'400px', flexGrow: 1 }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
              ) : (
              <KeyboardArrowRight />
              )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
              ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;