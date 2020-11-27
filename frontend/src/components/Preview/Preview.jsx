import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { IntroductionLayout } from './Introduction/IntroductionLayout.jsx';
import { AboutMeLayout } from './AboutMe/AboutMeLayout.jsx';
import '../../styles/preview.scss';

const Preview = (props) => {
  const { location } = props;
  const { state: stateLocation } = location;
  let previousSiteAvailable = false;
  let buttonText = 'Edit';
  if (stateLocation) {
    const { previousAvailable, isSubmit } = stateLocation;
    previousSiteAvailable = previousAvailable;
    buttonText = isSubmit ? 'Back' : buttonText;
  }
  const introductionReducer = useSelector(
    (stateReact) => stateReact.introductionReducer,
  );

  const aboutMeReducer = useSelector((stateReact) => stateReact.aboutMeReducer);

  const goBackToPrevious = () => {
    if (previousSiteAvailable) {
      navigate(-1);
    } else {
      navigate('/introduction');
    }
  };

  const { enable: introductionEnable } = introductionReducer;
  const { enable: aboutMeEnable } = aboutMeReducer;
  return (
    <>
      <div className="static__container">
        <Button
          variant="contained"
          color="primary"
          onClick={goBackToPrevious}
          className="preview__goBackbtn"
          id="editPreviewbtn"
          startIcon={<EditIcon />}
          size="large"
        >
          {buttonText}
        </Button>
        {introductionEnable && <IntroductionLayout />}
      </div>
      <div className="preview__container">{aboutMeEnable && <AboutMeLayout />}</div>
    </>
  );
};

Preview.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      previousAvailable: PropTypes.bool,
      isSubmit: PropTypes.bool,
    }),
  }),
};

Preview.defaultProps = {
  location: {
    pathname: '',
    state: {
      previousAvailable: false,
      isSubmit: false,
    },
  },
};

export { Preview };
