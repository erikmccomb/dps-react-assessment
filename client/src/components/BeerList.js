import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';


class BeerList extends Component {

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {

    const { beers } = this.props;

    return beers.map( beer => {
        <Card>
          <Card.Content>
            <Card.Header>
              {beer.name}
            </Card.Header>
          </Card.Content>
        </Card>
    })
  }

  render() {
    return (
      <div>
        <Image
          src={require('../images/beer.png')}
          alt='6 pints of Beer image'
          style = {styles.centered}
          size="small"
        />
        <Header style={styles.header}>Beers</Header>
        <Card.Group itemsPerRow={1}>
          { this.beers() }
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { all_beers: state.all_beers }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40',
    margin: '0 auto',

  }
}

export default connect(mapStateToProps)(BeerList);