import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';

class Beers extends Component {
  render() {
    return (
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image
            src={require('../images/beer.png')} 
            alt='6 pints of Beer image'
            style = {styles.beer}
          />
          <Header as='h1' style={styles.header}>Beers</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}
              >
                Assessment Details:
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  },
  beer: {
    width: '30%',
    height: '30%',
    margin: '0 auto'
  }
}

export default Beers;