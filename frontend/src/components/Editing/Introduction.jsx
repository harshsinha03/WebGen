import React from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { style } from '../../styles/editLanding';
import { introductionWriteup } from '../../constants/writeups/index';
import { enablePage } from '../../actions/introduction_action';
import { Greeting } from './Introduction/Greeting.jsx';
import { Name } from './Introduction/Name.jsx';
import { Specialisation } from './Introduction/Specialisation.jsx';
import { ViewProfile } from './Introduction/ViewProfile.jsx';
import { Theme } from './Introduction/Theme.jsx';
import { SEO } from './Introduction/SEO.jsx';
import { StepperComp as Stepper } from './Stepper.jsx';

const useStyles = makeStyles(style);

const getLabels = () => [
  'Greeting',
  'Your Name',
  'Specialisation',
  'View Profile Button',
  'Theme',
  'SEO Tags',
];

const getContent = () => [Greeting, Name, Specialisation, ViewProfile, Theme, SEO];

const Introduction = (props) => {
  const classes = useStyles();
  const introductionReducer = useSelector((state) => state.introductionReducer);
  const { enable } = introductionReducer;
  const dispatch = useDispatch();
  const { updateDisplayMode } = props;
  if (!enable)
    return (
      <>
        <Container maxWidth="xl">
          <Typography
            gutterBottom
            variant="h3"
            align="center"
            className={clsx(classes.heading, {
              [classes.responsiveHeading]: window.innerWidth > 750,
            })}
          >
            Introduction Page
          </Typography>
          <Typography gutterBottom variant="h6" align="right">
            <Button
              variant="contained"
              color="primary"
              onClick={updateDisplayMode}
              id="editPreviewbtn"
              startIcon={<VisibilityIcon />}
              size="large"
            >
              Preview
            </Button>
          </Typography>
          <div
            className={clsx(classes.exampleContainer, {
              [classes.responsiveExampleContainer]: window.innerWidth < 750,
            })}
          >
            <div className={classes.textContainer}>
              <Typography
                gutterBottom
                align="center"
                variant={window.innerWidth < 750 ? 'subtitle1' : 'h6'}
                className={clsx(classes.writeUp, {
                  [classes.responsiveWriteUp]: window.innerWidth < 750,
                })}
              >
                {introductionWriteup}
              </Typography>
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    name="enable"
                    className={classes.switchBase}
                    size="medium"
                    checked={enable}
                    onChange={(event) => {
                      dispatch(enablePage(event.target.checked));
                    }}
                  />
                }
                label="Enable Page"
                labelPlacement="top"
                className={clsx(classes.labelEnable, {
                  [classes.responsiveLabelEnable]: window.innerWidth < 750,
                })}
                classes={{ label: classes.formControl }}
              />
            </div>
            <Typography gutterBottom align="center">
              {/* TODO: Add example of landing page here */}
              <img
                src="https://bit.ly/3cr31mU"
                alt="Test"
                className={clsx(classes.image, {
                  [classes.responsiveImage]: window.innerWidth < 750,
                })}
              />
            </Typography>
          </div>
        </Container>
      </>
    );
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        className={clsx(classes.heading, {
          [classes.responsiveHeading]: window.innerWidth > 750,
        })}
      >
        Introduction Page
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <FormControlLabel
            value="start"
            control={
              <Switch
                name="enable"
                className={classes.switchBase}
                size="medium"
                checked={enable}
                onChange={(event) => {
                  dispatch(enablePage(event.target.checked));
                }}
              />
            }
            label="Enable Page"
            labelPlacement="top"
            className={clsx(classes.labelForm, {
              [classes.responsiveLabelEnable]: window.innerWidth < 750,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            <Button
              variant="contained"
              color="primary"
              onClick={updateDisplayMode}
              id="editPreviewbtnForm"
              startIcon={<VisibilityIcon />}
              size="large"
            >
              Preview
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        align="center"
        variant="h5"
        gutterBottom
        className={classes.formHeading}
      >
        Customizable Features of this Page
      </Typography>
      <Typography align="center" className={classes.warning} variant="subtitle1">
        PS: If you don&apos;t want to render a component, simply leave the asterisk
        marked field as blank.
      </Typography>
      <Stepper steps={getLabels()} contentList={getContent()} />
    </>
  );
};

Introduction.propTypes = {
  updateDisplayMode: PropTypes.func.isRequired,
};

export { Introduction };
