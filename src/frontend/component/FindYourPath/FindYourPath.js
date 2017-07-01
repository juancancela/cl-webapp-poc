import React, { PropTypes } from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {ItemButton, Button} from 'react-toolbox/lib/button';

const FindYourPath = () => (
  <Card style={{width: '700px', 'marginLeft': 'auto', 'marginRight':'auto'}}>
    <CardTitle style={{textAlign: 'center'}}
      title="In this quiz, we’ll suggest careers and majors that fit your unique personality by showing you some simple statements about high school."
      subtitle="Your answers are 100% private and never shared."
    />
    <CardMedia
      aspectRatio="wide"
      image="https://image.ibb.co/gNStSk/mock.png"
    />
    <CardActions>
      <Button label="Previous" />
      <Button label="Next" />
    </CardActions>
  </Card>
);

export default FindYourPath