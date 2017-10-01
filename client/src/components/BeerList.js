import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Header, Card, Image } from 'semantic-ui-react';
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
        header={<Link style={styles.header} to={`/beer/${beer.id}`}>{beer.name}</Link>}
      />
    )
  }

  render() {
    return (
    <Segment basic>
      <Segment basic textAlign='center'>
        <Image
          src={require('../images/beer.png')}
          alt='6 pints of Beer image'
          style = {styles.centered}
          size="medium"
        />
      </Segment>
        <Card.Group itemsPerRow={2}>
          { this.beers() }
        </Card.Group>
      </Segment>
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
    color: '#BC6733',
    margin: '0 auto',
    textAlign: 'center'
  }
}

export default connect(mapStateToProps)(BeerList);