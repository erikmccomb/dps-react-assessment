import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { getBeers } from '../actions/beers';

class BeerList extends Component {

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => 
        <Card>
          
          <Card.Content>
            <Card.Header style={styles.header}>
              {beer.name}
            </Card.Header>
          </Card.Content>
          
          <Card.Content>
          
          </Card.Content>

        </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>Beers</Header>
        <Image
          src={require('../images/beer.png')}
          alt='6 pints of Beer image'
          style = {styles.centered}
          size="medium"
        />
        <Grid columns={1}>
          <Grid.Column width={16}>
            <Card.Group itemsPerRow={2}>
              { this.beers() }
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return { beers: state.beers }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    color: '#2ecc40',
    margin: '0 auto',
    textAlign: 'center'
  }
}

export default connect(mapStateToProps)(BeerList);