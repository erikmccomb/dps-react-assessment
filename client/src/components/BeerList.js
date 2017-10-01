import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import { getBeers } from '../actions/beers';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  beers = () => {
    const { beers } = this.props;
    return beers.map( beer => 
      <Card
        key={beer.id}
        header={<Link to={`/beer/${beer.id}`}>{beer.name}</Link>}
        meta={beer.style.short_name}
        description={beer.description}
        extra={beer.abv}
      />
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
        <Card.Group itemsPerRow={2}>
          { this.beers() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const beers = state.beers; 
  return { beers }
}

const styles = {
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